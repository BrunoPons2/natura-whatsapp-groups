(function () {
  "use strict";

  const groups = Array.isArray(window.NATURA_GROUPS) ? window.NATURA_GROUPS : [];
  const searchInput = document.getElementById("groupSearch");
  const groupList = document.getElementById("groupList");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const clearSearch = document.getElementById("clearSearch");
  const template = document.getElementById("groupCardTemplate");
  const installButton = document.getElementById("installButton");
  let deferredInstallPrompt = null;
  const contactLookups = new Map();
  const administratorsDialog = document.getElementById("administratorsDialog");
  document.getElementById("closeAdministrators").addEventListener("click", () => administratorsDialog.close());
  function openAdministrators(group) {
    document.getElementById("administratorsGroup").textContent = group.name;
    const content = document.getElementById("administratorsContent");
    const admins = getAdministrators(group);
    content.replaceChildren();
    if (admins.length) {
      const list = document.createElement("ul");
      list.className = "admin-list";
      admins.forEach((admin) => {
        const item = document.createElement("li");
        item.className = "resident-contact";
        item.textContent = `${administratorName(admin)} - Loading contact details…`;
        list.appendChild(item);
      });
      content.appendChild(list);
      contactLookups.clear();
      loadAdministratorContacts(group, list);
    } else {
      content.textContent = "Administrator names and contact details have not yet been released.";
    }
    administratorsDialog.showModal();
  }
  const inviteDialog = document.getElementById("inviteDialog");
  const emailInput = document.getElementById("inviteEmails");
  const gmailButton = document.getElementById("inviteGmail");
  const emailAppButton = document.getElementById("inviteEmailApp");
  let invitedGroup;
  document.getElementById("closeInvite").addEventListener("click", () => inviteDialog.close());
  inviteDialog.addEventListener("close", () => { emailInput.value = ""; });

  function inviteRecipients() {
    return emailInput.value.split(/[,;\n]/).map((email) => email.trim()).filter(Boolean);
  }
  function validateInviteEmails() {
    const emails = inviteRecipients();
    const valid = emails.length > 0 && emails.every((email) => /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(email));
    gmailButton.disabled = emailAppButton.disabled = !valid;
    emailInput.setAttribute("aria-invalid", String(emailInput.value.trim().length > 0 && !valid));
    document.getElementById("emailError").textContent = emailInput.value.trim() && !valid ? "Enter a complete email address for each recipient." : "";
    return valid;
  }
  emailInput.addEventListener("input", validateInviteEmails);
  function openInvitation(group, mode) {
    invitedGroup = group;
    document.getElementById("inviteTitle").textContent = `Invitation to group via ${mode}`;
    document.getElementById("emailInviteFields").hidden = mode !== "email";
    document.getElementById("inviteGroupName").textContent = group.name;
    document.getElementById("inviteLinkName").textContent = group.name;
    document.getElementById("inviteLinkValue").value = group.inviteUrl;
    document.getElementById("copyInviteStatus").textContent = "";
    emailInput.value = "";
    validateInviteEmails();
    inviteDialog.showModal();
    if (mode === "email") emailInput.focus();
  }
  document.getElementById("copyInviteLink").addEventListener("click", async () => {
    const input = document.getElementById("inviteLinkValue");
    try {
      await navigator.clipboard.writeText(input.value);
      document.getElementById("copyInviteStatus").textContent = "Group link copied.";
    } catch {
      input.focus(); input.select();
      document.getElementById("copyInviteStatus").textContent = "Select and copy the link above (Ctrl+C on Windows).";
    }
  });
  function emailDraft(useGmail) {
    if (!validateInviteEmails()) return;
    const recipients = inviteRecipients().join(",");
    const subject = `Invitation to join ${invitedGroup.name}`;
    const body = `You’re invited to join ${invitedGroup.name} on WhatsApp.\n\n${invitedGroup.description}\n\nJoin using this link:\n${invitedGroup.inviteUrl}`;
    if (useGmail) {
      const params = new URLSearchParams({ view: "cm", fs: "1", to: recipients, su: subject, body });
      window.open(`https://mail.google.com/mail/?${params}`, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${recipients.split(",").map(encodeURIComponent).join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }
  gmailButton.addEventListener("click", () => emailDraft(true));
  emailAppButton.addEventListener("click", () => emailDraft(false));

  function administratorName(admin) {
    return typeof admin === "string" ? admin : String(admin.name || "Name not yet released");
  }

  async function loadAdministratorContacts(group, adminList) {
    const admins = getAdministrators(group);
    if (!admins.length) return;
    try {
      const ids = admins.map((admin) => admin.residentId).filter(Boolean);
      let residents = [];
      if (ids.length) {
        const key = ids.join(",");
        if (!contactLookups.has(key)) {
          contactLookups.set(key, fetch(["127.0.0.1", "localhost"].includes(location.hostname) ? `api/administrator-contacts?ids=${encodeURIComponent(key)}` : "data/administrator-contacts.json", { cache: "no-store" })
            .then((response) => { if (!response.ok) throw new Error("Directory unavailable"); return response.json(); })
            .then((data) => data.residents)
            .catch((error) => { contactLookups.delete(key); throw error; }));
        }
        residents = await contactLookups.get(key);
      }
      adminList.replaceChildren();
      admins.forEach((admin) => {
        const resident = residents.find((item) => item.residentId === String(admin.residentId));
        const section = document.createElement("li");
        section.className = "resident-contact";
        const heading = document.createElement("strong");
        heading.textContent = resident ? resident.name : administratorName(admin);
        section.appendChild(heading);
        if (resident) {
          section.append(` - ${resident.address || "Address not recorded"}`);
          const actions = document.createElement("div");
          actions.className = "contact-actions";
          const phone = String(resident.phone || "").replace(/[^+\d]/g, "");
          addContactButton(actions, "Call", phone ? `tel:${phone}` : "", resident.name, "Phone not recorded");
          addContactButton(actions, "Text", phone ? `sms:${phone}` : "", resident.name, "Phone not recorded");
          addContactButton(actions, "Email", resident.email ? `mailto:${resident.email}` : "", resident.name, "Email not recorded");
          section.appendChild(actions);
        } else {
          const missing = document.createElement("span");
          missing.textContent = " - Contact details not yet available from the Residents Directory.";
          section.appendChild(missing);
        }
        adminList.appendChild(section);
      });
    } catch (error) {
      adminList.replaceChildren();
      admins.forEach((admin) => {
        const item = document.createElement("li");
        item.className = "resident-contact";
        const name = document.createElement("strong");
        name.textContent = administratorName(admin);
        item.append(name, " - Contact details unavailable. Reconnect and try again.");
        adminList.appendChild(item);
      });
    }
  }

  function addContactButton(container, label, href, name, unavailableReason) {
    const control = document.createElement(href ? "a" : "button");
    control.className = "contact-action";
    control.textContent = label;
    control.setAttribute("aria-label", `${label} ${name}${href ? "" : `: ${unavailableReason}`}`);
    if (href) {
      control.href = href;
    } else {
      control.type = "button";
      control.disabled = true;
      control.title = unavailableReason;
    }
    container.appendChild(control);
  }

  function normalise(value) {
    return String(value || "")
      .toLocaleLowerCase("en-AU")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function isWhatsAppInvite(url) {
    if (!url) return false;
    try {
      const parsed = new URL(url);
      return parsed.protocol === "https:" && ["chat.whatsapp.com", "whatsapp.com", "www.whatsapp.com"].includes(parsed.hostname);
    } catch {
      return false;
    }
  }


  function buildCard(group) {
    const card = template.content.firstElementChild.cloneNode(true);
    if (normalise(group.name) === "the telegraph") card.classList.add("telegraph-card");
    const name = card.querySelector(".group-name");
    const description = card.querySelector(".group-description");


    const joinButton = card.querySelector(".join-button");

    name.textContent = group.name || "Unnamed group";
    description.textContent = group.description || "Group information will be added soon.";

    card.querySelector(".administrators-button").addEventListener("click", () => openAdministrators(group));

    if (group.template === "A") {
      joinButton.remove();
      const actions = card.querySelector(".invite-actions");
      const approvalNote = document.createElement("p");
      approvalNote.className = "approval-note";
      approvalNote.textContent = "Unfortunately, you cannot self-invite yourself. The administrators need to approve new members. Contact one the administrators to be added to the group.";
      actions.replaceWith(approvalNote);
    } else if (group.template === "B" && isWhatsAppInvite(group.inviteUrl)) {
      card.querySelector(".invite-actions").hidden = false;
      card.querySelector(".invite-link-button").addEventListener("click", () => openInvitation(group, "link"));
      card.querySelector(".invite-email-button").addEventListener("click", () => openInvitation(group, "email"));
      joinButton.href = group.inviteUrl;
      joinButton.setAttribute("aria-label", `Join ${group.name} on WhatsApp`);
    } else {
      joinButton.hidden = true;
      const pendingNote = document.createElement("p");
      pendingNote.className = "approval-note";
      pendingNote.textContent = group.template === "B" ? "Invitation link not yet available." : "Invitation arrangements awaiting confirmation.";
      card.querySelector(".invite-actions").after(pendingNote);
    }

    return card;
  }

  function render() {
    const query = normalise(searchInput.value.trim());
    const visibleGroups = groups
      .filter((group) => {
        const searchable = normalise([group.name, group.description, group.category, ...getAdministrators(group).map(administratorName)].join(" "));
        return searchable.includes(query);
      })
      .sort((a, b) => {
        // The Telegraph always leads; all other matching groups stay alphabetical.
        const aPinned = normalise(a.name) === "the telegraph";
        const bPinned = normalise(b.name) === "the telegraph";
        if (aPinned !== bPinned) return aPinned ? -1 : 1;
        return String(a.name).localeCompare(String(b.name), "en-AU", { sensitivity: "base" });
      });

    const fragment = document.createDocumentFragment();
    visibleGroups.forEach((group) => fragment.appendChild(buildCard(group)));
    groupList.replaceChildren(fragment);

    const total = visibleGroups.length;
    resultCount.textContent = query
      ? `${total} ${total === 1 ? "group" : "groups"} found`
      : `${total} ${total === 1 ? "group" : "groups"}`;
    emptyState.hidden = total !== 0;
    groupList.hidden = total === 0;
  }

  function getAdministrators(group) {
    const names = Array.isArray(group.administrators) ? group.administrators : [group.contact];
    return names.filter((admin) => (typeof admin === "string" && admin.trim()) || (admin && typeof admin === "object" && admin.residentId));
  }

  searchInput.addEventListener("input", render);
  document.getElementById("clearSearchBox").addEventListener("click", () => clearSearch.click());
  clearSearch.addEventListener("click", function () {
    searchInput.value = "";
    render();
    searchInput.focus();
  });

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = false;
  });

  installButton.addEventListener("click", async function () {
    if (!deferredInstallPrompt) {
      document.getElementById("installDialog").showModal();
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });

  window.addEventListener("appinstalled", function () {
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });

  if ("serviceWorker" in navigator && window.location.protocol.startsWith("http") && !["127.0.0.1", "localhost"].includes(window.location.hostname)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {
        // The directory still works online if service-worker registration fails.
      });
    });
  }

  document.getElementById("closeInstall").addEventListener("click", () => document.getElementById("installDialog").close());
  const standalone = window.matchMedia("(display-mode: standalone)");
  function updateInstallVisibility() { installButton.hidden = standalone.matches || navigator.standalone === true; }
  standalone.addEventListener("change", updateInstallVisibility);
  updateInstallVisibility();
  function updateConnection() { document.getElementById("connectionStatus").hidden = navigator.onLine; }
  window.addEventListener("online", updateConnection);
  window.addEventListener("offline", updateConnection);
  updateConnection();
  render();
})();




