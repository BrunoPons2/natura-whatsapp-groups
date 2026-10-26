(function () {
  "use strict";

  const brunoDialog = document.getElementById("brunoDialog");
  const brunoMapDialog = document.getElementById("brunoMapDialog");
  const brunoMapSvg = document.getElementById("brunoMapSvg");
  const mapHouses = [{"number":1,"x":378,"y":1250,"width":69,"height":105},{"number":2,"x":309,"y":1250,"width":69,"height":105},{"number":3,"x":240,"y":1250,"width":69,"height":105},{"number":4,"x":240,"y":1175,"width":105,"height":75},{"number":5,"x":240,"y":1105,"width":105,"height":70},{"number":6,"x":240,"y":1040,"width":105,"height":65},{"number":7,"x":240,"y":970,"width":105,"height":70},{"number":8,"x":240,"y":905,"width":105,"height":65},{"number":9,"x":240,"y":830,"width":105,"height":75},{"number":10,"x":240,"y":755,"width":105,"height":75},{"number":11,"x":240,"y":680,"width":105,"height":75},{"number":12,"x":345,"y":450,"width":105,"height":82},{"number":13,"x":345,"y":532,"width":105,"height":75},{"number":14,"x":345,"y":607,"width":105,"height":73},{"number":15,"x":345,"y":680,"width":105,"height":75},{"number":16,"x":345,"y":755,"width":105,"height":75},{"number":17,"x":345,"y":830,"width":105,"height":75},{"number":18,"x":345,"y":905,"width":105,"height":65},{"number":19,"x":345,"y":970,"width":105,"height":70},{"number":20,"x":345,"y":1040,"width":105,"height":65},{"number":21,"x":345,"y":1105,"width":105,"height":70},{"number":22,"x":345,"y":1175,"width":105,"height":75},{"number":23,"x":530,"y":1303,"width":69.5,"height":105},{"number":24,"x":599.5,"y":1303,"width":69.5,"height":105},{"number":25,"x":669,"y":1303,"width":69.5,"height":105},{"number":26,"x":738.5,"y":1303,"width":69.5,"height":105},{"number":27,"x":808,"y":1303,"width":69.5,"height":105},{"number":28,"x":877.5,"y":1303,"width":69.5,"height":105},{"number":29,"x":947,"y":1303,"width":69.5,"height":105},{"number":30,"x":1016.5,"y":1303,"width":69.5,"height":105},{"number":31,"x":1086,"y":1303,"width":69.5,"height":105},{"number":32,"x":1155.5,"y":1303,"width":69.5,"height":105},{"number":33,"x":1225,"y":1303,"width":69.5,"height":105},{"number":34,"x":1294.5,"y":1303,"width":69.5,"height":105},{"number":35,"x":1294.5,"y":1198,"width":69.5,"height":105},{"number":36,"x":1225,"y":1198,"width":69.5,"height":105},{"number":37,"x":1155.5,"y":1198,"width":69.5,"height":105},{"number":38,"x":1086,"y":1198,"width":69.5,"height":105},{"number":39,"x":1016.5,"y":1198,"width":69.5,"height":105},{"number":40,"x":947,"y":1198,"width":69.5,"height":105},{"number":41,"x":877.5,"y":1198,"width":69.5,"height":105},{"number":42,"x":808,"y":1198,"width":69.5,"height":105},{"number":43,"x":738.5,"y":1198,"width":69.5,"height":105},{"number":44,"x":669,"y":1198,"width":69.5,"height":105},{"number":45,"x":599.5,"y":1198,"width":69.5,"height":105},{"number":46,"x":530,"y":1198,"width":69.5,"height":105},{"number":47,"x":515,"y":1046,"width":77,"height":105},{"number":48,"x":592,"y":1046,"width":77,"height":105},{"number":49,"x":669,"y":1046,"width":77,"height":105},{"number":50,"x":746,"y":1046,"width":77,"height":105},{"number":51,"x":823,"y":1046,"width":77,"height":105},{"number":52,"x":900,"y":1046,"width":77,"height":105},{"number":53,"x":977,"y":1046,"width":77,"height":105},{"number":54,"x":1054,"y":1046,"width":77,"height":105},{"number":55,"x":1131,"y":1046,"width":77,"height":105},{"number":56,"x":1208,"y":1046,"width":77,"height":105},{"number":57,"x":1285,"y":1046,"width":77,"height":105},{"number":58,"x":1292.7,"y":951,"width":70.7,"height":95},{"number":59,"x":1222,"y":951,"width":70.7,"height":95},{"number":60,"x":1151.3000000000002,"y":951,"width":70.7,"height":95},{"number":61,"x":1080.6,"y":951,"width":70.7,"height":95},{"number":62,"x":1009.9000000000001,"y":951,"width":70.7,"height":95},{"number":63,"x":939.2,"y":951,"width":70.7,"height":95},{"number":64,"x":868.5,"y":951,"width":70.7,"height":95},{"number":65,"x":797.8,"y":951,"width":70.7,"height":95},{"number":66,"x":727.1,"y":951,"width":70.7,"height":95},{"number":67,"x":656.4,"y":951,"width":70.7,"height":95},{"number":68,"x":585.7,"y":951,"width":70.7,"height":95},{"number":69,"x":515,"y":951,"width":70.7,"height":95},{"number":70,"x":515,"y":796,"width":70.7,"height":103},{"number":71,"x":585.7,"y":796,"width":70.7,"height":103},{"number":72,"x":656.4,"y":796,"width":70.7,"height":103},{"number":73,"x":727.1,"y":796,"width":70.7,"height":103},{"number":74,"x":797.8,"y":796,"width":70.7,"height":103},{"number":75,"x":868.5,"y":796,"width":70.7,"height":103},{"number":76,"x":939.2,"y":796,"width":70.7,"height":103},{"number":77,"x":1009.9000000000001,"y":796,"width":70.7,"height":103},{"number":78,"x":1080.6,"y":796,"width":70.7,"height":103},{"number":79,"x":1151.3000000000002,"y":796,"width":70.7,"height":103},{"number":80,"x":1222,"y":796,"width":70.7,"height":103},{"number":81,"x":1292.7,"y":796,"width":70.7,"height":103},{"number":82,"x":1285,"y":690,"width":77,"height":106},{"number":83,"x":1208,"y":690,"width":77,"height":106},{"number":84,"x":1131,"y":690,"width":77,"height":106},{"number":85,"x":1054,"y":690,"width":77,"height":106},{"number":86,"x":977,"y":690,"width":77,"height":106},{"number":87,"x":900,"y":690,"width":77,"height":106},{"number":88,"x":823,"y":690,"width":77,"height":106},{"number":89,"x":746,"y":690,"width":77,"height":106},{"number":90,"x":669,"y":690,"width":77,"height":106},{"number":91,"x":592,"y":690,"width":77,"height":106},{"number":92,"x":515,"y":690,"width":77,"height":106},{"number":93,"x":1105,"y":535,"width":76,"height":104},{"number":94,"x":1181,"y":535,"width":77,"height":104},{"number":95,"x":1258,"y":568,"width":104,"height":71},{"number":96,"x":1258,"y":515,"width":104,"height":53},{"number":97,"x":1258,"y":430,"width":104,"height":85},{"number":98,"x":1181,"y":430,"width":77,"height":105},{"number":99,"x":1105,"y":430,"width":76,"height":105},{"number":100,"x":980,"y":535,"width":75,"height":103},{"number":101,"x":928,"y":535,"width":52,"height":103},{"number":102,"x":842,"y":535,"width":86,"height":103},{"number":103,"x":842,"y":463,"width":107,"height":72},{"number":104,"x":842,"y":410,"width":107,"height":53},{"number":105,"x":842,"y":338,"width":107,"height":72},{"number":106,"x":842,"y":234,"width":77,"height":104},{"number":107,"x":919,"y":234,"width":61,"height":104},{"number":108,"x":980,"y":234,"width":75,"height":104},{"number":109,"x":949,"y":338,"width":106,"height":72},{"number":110,"x":949,"y":410,"width":106,"height":53},{"number":111,"x":949,"y":463,"width":106,"height":72}];
  let mappedHouse = mapHouses.find(house => house.number === 35);
  function showMappedHome() {
    if (!mappedHouse) return;
    mapView = {x: mappedHouse.x + mappedHouse.width / 2 - 210, y: mappedHouse.y + mappedHouse.height / 2 - 210, size: 420};
    drawMap();
  }
  function houseForResident(resident) {
    const match = String(resident.address || "").match(/^\s*(\d+)\b/);
    return match ? mapHouses.find(house => house.number === Number(match[1])) : null;
  }
  function openResidentMap(resident) {
    mappedHouse = houseForResident(resident);
    if (!mappedHouse) return;
    document.getElementById("brunoMapTitle").textContent = resident.address + " — " + resident.name;
    document.getElementById("brunoMapHome").textContent = "Show home";
    brunoMapSvg.setAttribute("aria-label", "Natura village map highlighting " + resident.name + " at " + resident.address);
    const highlight = brunoMapSvg.querySelector("rect");
    for (const key of ["x", "y", "width", "height"]) highlight.setAttribute(key, mappedHouse[key]);
    showMappedHome();
    brunoMapDialog.showModal();
  }
  document.getElementById("contactBruno").addEventListener("click", () => brunoDialog.showModal());
  document.getElementById("closeBruno").addEventListener("click", () => brunoDialog.close());
  document.getElementById("brunoMap").addEventListener("click", () => openResidentMap({name: "Bruno Pons", address: "35 Autumn Ave"}));
  document.getElementById("closeBrunoMap").addEventListener("click", () => brunoMapDialog.close());
  document.getElementById("brunoMapHome").addEventListener("click", showMappedHome);
  document.getElementById("brunoMapAll").addEventListener("click", () => { mapView = {x:0, y:0, size:1600}; drawMap(); });
  [brunoDialog, brunoMapDialog].forEach(dialog => {
    dialog.addEventListener("click", event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  });

  let mapView = {x:0, y:0, size:1600};
  const mapPointers = new Map();
  let mapGesture = null;
  function drawMap() {
    mapView.x = Math.max(-100, Math.min(1700-mapView.size, mapView.x));
    mapView.y = Math.max(-100, Math.min(1700-mapView.size, mapView.y));
    brunoMapSvg.setAttribute("viewBox", [mapView.x, mapView.y, mapView.size, mapView.size].join(" "));
  }
  function zoomMap(factor, anchor = {x:mapView.x+mapView.size/2, y:mapView.y+mapView.size/2}) {
    const size = Math.max(260, Math.min(1600, mapView.size*factor));
    const ratio = size/mapView.size;
    mapView = {x:anchor.x-(anchor.x-mapView.x)*ratio, y:anchor.y-(anchor.y-mapView.y)*ratio, size};
    drawMap();
  }
  document.getElementById("mapZoomIn").addEventListener("click", () => zoomMap(.75));
  document.getElementById("mapZoomOut").addEventListener("click", () => zoomMap(1.333333));
  brunoMapSvg.addEventListener("wheel", event => {
    const matrix = brunoMapSvg.getScreenCTM();
    if (!matrix || mapPointers.size || !event.deltaY) return;
    event.preventDefault();
    const anchor = new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse());
    const unit = event.deltaMode===1 ? 16 : event.deltaMode===2 ? brunoMapSvg.clientHeight : 1;
    zoomMap(Math.exp(Math.max(-.2, Math.min(.2,event.deltaY*unit*.0007))), anchor);
  }, {passive:false});
  function pointerMetric() {
    const p = [...mapPointers.values()];
    return p.length>1 ? {x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2,d:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)} : {...p[0],d:0};
  }
  function resetGesture() { mapGesture = mapPointers.size ? {...pointerMetric(),view:{...mapView}} : null; }
  brunoMapSvg.addEventListener("pointerdown", event => {
    if(event.pointerType==="mouse" && event.button!==0)return;
    mapPointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    brunoMapSvg.setPointerCapture(event.pointerId);
    resetGesture();
  });
  brunoMapSvg.addEventListener("pointermove", event => {
    if(!mapPointers.has(event.pointerId)||!mapGesture)return;
    mapPointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    const m=pointerMetric(), g=mapGesture;
    const scale=Math.min(brunoMapSvg.clientWidth,brunoMapSvg.clientHeight);
    const size=g.d && m.d ? Math.max(260,Math.min(1600,g.view.size*g.d/m.d)) : g.view.size;
    mapView={size,x:g.view.x-(m.x-g.x)*g.view.size/scale+(g.view.size-size)/2,y:g.view.y-(m.y-g.y)*g.view.size/scale+(g.view.size-size)/2};
    drawMap();
  });
  function endMapPointer(event) { mapPointers.delete(event.pointerId); resetGesture(); }
  for (const type of ["pointerup","pointercancel","lostpointercapture"]) brunoMapSvg.addEventListener(type,endMapPointer);
  brunoMapDialog.addEventListener("close", () => {mapPointers.clear(); mapGesture=null;});
  brunoMapSvg.addEventListener("keydown", event => {
    const step=mapView.size*.12;
    if(event.key==="ArrowLeft")mapView.x-=step;
    else if(event.key==="ArrowRight")mapView.x+=step;
    else if(event.key==="ArrowUp")mapView.y-=step;
    else if(event.key==="ArrowDown")mapView.y+=step;
    else if(event.key==="+"||event.key==="=")zoomMap(.75);
    else if(event.key==="-")zoomMap(1.333333);
    else return;
    event.preventDefault(); drawMap();
  });

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
  const membershipDialog = document.getElementById("membershipDialog");
  let membershipGroup;
  document.getElementById("closeMembership").addEventListener("click", () => membershipDialog.close());
  function openMembership(group) {
    membershipGroup = group;
    document.getElementById("membershipGroup").textContent = group.name;
    membershipDialog.showModal();
  }
  document.getElementById("membershipHelp").addEventListener("click", () => {
    membershipDialog.close();
    openAdministrators(membershipGroup);
  });
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
          const mapButton = document.createElement("button");
          mapButton.type = "button";
          mapButton.className = "contact-action";
          mapButton.textContent = "Map";
          mapButton.setAttribute("aria-label", "Map for " + resident.name);
          mapButton.disabled = !houseForResident(resident);
          if (mapButton.disabled) mapButton.title = "Home location not available";
          mapButton.addEventListener("click", () => openResidentMap(resident));
          actions.appendChild(mapButton);
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
    description.textContent = group.description || "";
    description.hidden = !group.description;

    card.querySelector(".administrators-button").addEventListener("click", () => openAdministrators(group));

    card.querySelector(".membership-button").addEventListener("click", () => openMembership(group));

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
    } else if (group.template === "B") {
      const actions = card.querySelector(".invite-actions");
      actions.hidden = false;
      actions.querySelectorAll("button").forEach(button => { button.disabled = true; });
      joinButton.removeAttribute("href");
      joinButton.setAttribute("role", "link");
      joinButton.setAttribute("aria-disabled", "true");
      joinButton.classList.add("is-unavailable");
      joinButton.title = "Invitation link not yet available";
      const pendingNote = document.createElement("p");
      pendingNote.className = "approval-note";
      pendingNote.textContent = "Invitation link not yet available. Contact the administrator for access.";
      actions.after(pendingNote);
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
  const cardNavigation = document.getElementById("cardNavigation");
  const topNavigation = document.getElementById("backToTop");
  const bottomNavigation = document.getElementById("goToBottom");
  function positionCardNavigation() {
    const cards = [...document.querySelectorAll(".group-card")];
    const visible = cards.map(card => ({ card, rect: card.getBoundingClientRect() }))
      .filter(item => item.rect.bottom > 0 && item.rect.top < window.innerHeight);
    // Follow the first card still visible at the top of the viewport.
    const selected = visible[0];
    cardNavigation.hidden = !selected;
    if (!selected) return;
    const rect = selected.rect;
    const left = Math.max(4, Math.min(rect.right + 8, window.innerWidth - cardNavigation.offsetWidth - 8));
    cardNavigation.style.left = left + "px";
    cardNavigation.style.top = Math.max(8, rect.top + 8) + "px";
    const bottomRect = visible[visible.length - 1].rect;
    const bottomWidth = Math.max(topNavigation.offsetWidth, bottomNavigation.offsetWidth);
    const bottomLeft = Math.max(4, Math.min(bottomRect.right + 8, window.innerWidth - bottomWidth - 8));
    const pairHeight = topNavigation.offsetHeight + 6 + bottomNavigation.offsetHeight;
    const pairTop = Math.max(8, Math.min(window.innerHeight - pairHeight - 8, bottomRect.bottom - pairHeight - 8));
    topNavigation.style.left = bottomNavigation.style.left = bottomLeft + "px";
    topNavigation.style.top = pairTop + "px";
    bottomNavigation.style.top = (pairTop + topNavigation.offsetHeight + 6) + "px";
  }
  window.addEventListener("scroll", positionCardNavigation, { passive: true });
  window.addEventListener("resize", positionCardNavigation);
  new MutationObserver(positionCardNavigation).observe(groupList, { childList: true });
  requestAnimationFrame(positionCardNavigation);
  document.getElementById("pageDown").addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
  document.getElementById("pageUp").addEventListener("click", () => {
    window.scrollBy({ top: -window.innerHeight, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
  bottomNavigation.addEventListener("click", () => {
    const lastCard = groupList.lastElementChild;
    if (lastCard) lastCard.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "end" });
  });
  document.getElementById("backToTop").addEventListener("click", () => {
    document.getElementById("mainContent").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  });
  render();
})();




