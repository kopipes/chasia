/* Shared helpers: icons, header, footer, cards, reveal animations */
(function () {
  const ICONS = {
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M12 17v5"/><path d="M8 22h8"/>',
    ball: '<circle cx="12" cy="12" r="10"/><path d="m12 7 4.2 3-1.6 5H9.4l-1.6-5L12 7Z"/><path d="M12 2v5M21.5 9.5 16.2 10M18 20l-3.4-5M6 20l3.4-5M2.5 9.5 7.8 10"/>',
    trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    palette: '<path d="M12 22a10 10 0 1 1 10-10c0 2.8-2.2 4-4 4h-2a2 2 0 0 0-1.5 3.3A1.6 1.6 0 0 1 12 22Z"/><circle cx="7.5" cy="10.5" r="1.2"/><circle cx="12" cy="7" r="1.2"/><circle cx="16.5" cy="10.5" r="1.2"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    flag: '<path d="M4 22V4"/><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1"/>',
    book: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6.5a2.5 2.5 0 0 0 0 5H20"/><path d="M8 7h8M8 11h6"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-10-1 10-4 16-10 16"/><path d="M4 21c3-5 6-8 11-11"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4.5-6.5"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/><path d="m17 3 .7 1.6L19.3 5l-1.6.7L17 7.3l-.7-1.6L14.7 5l1.6-.4Z"/>',
    waves: '<path d="M2 7c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M2 13c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
    brush: '<path d="M18.4 2.6a2 2 0 0 1 2.9 2.9L12 15l-3-3Z"/><path d="M9 12c-2 0-4 1.5-4 4 0 1.5-1 3-3 3 1.5 1.5 3.5 2 5 2 3 0 5-2 5-5"/>',
    cup: '<path d="M4 8h13v6a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 2c0 1.5 1 1.5 1 3M12 2c0 1.5 1 1.5 1 3"/>',
    flower: '<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5C12 6 13.5 3 12 3s0 3-0 6.5M12 14.5c0 3.5 1.5 6.5 0 6.5s0-3 0-6.5M9.5 12C6 12 3 10.5 3 12s3 0 6.5 0M14.5 12c3.5 0 6.5-1.5 6.5 0s-3 0-6.5 0"/><path d="M14 10c2.5-2.5 3.5-5.5 4.5-4.5S16.5 8 14 10M10 14c-2.5 2.5-3.5 5.5-4.5 4.5S7.5 16 10 14M10 10C7.5 7.5 4.5 6.5 5.5 5.5S8 7.5 10 10M14 14c2.5 2.5 5.5 3.5 4.5 4.5S16 16.5 14 14"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3Z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
    utensils: '<path d="M3 2v7a3 3 0 0 0 3 3v10M9 2v7a3 3 0 0 1-3 3M6 2v5"/><path d="M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3Zm0 0v7"/>',
    ticket: '<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a3 3 0 0 0 0 6v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a3 3 0 0 0 0-6Z"/><path d="M13 5v2M13 11v2M13 17v2"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
    arrowUpRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    chevL: '<path d="m15 18-6-6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    play: '<path d="M8 5v14l11-7L8 5Z" fill="currentColor"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4-4L5 21"/>',
    film: '<rect x="2" y="3" width="20" height="18" rx="3"/><path d="M7 3v18M17 3v18M2 9h5M17 9h5M2 15h5M17 15h5"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
  };

  const icon = (name, cls = "") =>
    `<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const sectionById = (id) => window.SECTIONS.find((s) => s.id === id);
  const groupOf = (a) => sectionById(a.section).groups.find((g) => g.id === a.group);
  const groupById = (sid, gid) => sectionById(sid).groups.find((g) => g.id === gid);
  const activityUrl = (a) => `activity.html?id=${encodeURIComponent(a.id)}`;
  const sectionUrl = (sid, gid) => `section.html?s=${encodeURIComponent(sid)}${gid ? "#" + encodeURIComponent(gid) : ""}`;
  const itemsOf = (sid, gid) => window.ACTIVITIES.filter((a) => a.section === sid && (!gid || a.group === gid));
  const gname = (g) => g.short || g.name;

  /* Decorative cover art when no photo exists — a gradient + big icon */
  function coverArt(a, extraCls = "") {
    const s = sectionById(a.section), g = groupOf(a);
    if (a.cover) return `<div class="cover ${extraCls}" style="--c1:${s.c1};--c2:${s.c2}"><img src="${esc(a.cover)}" alt="" loading="lazy"></div>`;
    return `<div class="cover cover--art ${extraCls}" style="--c1:${s.c1};--c2:${s.c2}">
      <span class="cover__icon">${icon(g.icon)}</span><span class="cover__grain"></span>
    </div>`;
  }

  function activityCard(a, opts = {}) {
    const s = sectionById(a.section), g = groupOf(a);
    const badge = a.badges && a.badges[0] ? `<span class="card__badge">${icon("award")}${esc(a.badges[0])}</span>` : "";
    return `<a class="card reveal" href="${activityUrl(a)}" style="--c1:${s.c1};--c2:${s.c2}">
      <div class="card__media">${coverArt(a)}${badge}</div>
      <div class="card__body">
        <div class="card__meta"><span class="chip chip--cat">${icon(g.icon)}${esc(opts.showSection ? s.short : gname(g))}</span><span class="card__period">${esc(a.period || "")}</span></div>
        <h3 class="card__title">${esc(a.title)}</h3>
        ${opts.noSummary ? "" : `<p class="card__summary">${esc(a.summary)}</p>`}
        <span class="card__cta">View details ${icon("arrow")}</span>
      </div>
    </a>`;
  }

  /* ---------- Header ---------- */
  function renderHeader(active) {
    const el = document.getElementById("site-header");
    if (!el) return;
    const home = active === "home";
    const sections = window.SECTIONS.map((s) => {
      const groups = s.groups.map((g) => `<a class="mega__item" href="${sectionUrl(s.id, g.id)}" style="--c1:${s.c1};--c2:${s.c2}">
          <span class="mega__icon">${icon(g.icon)}</span>
          <span><strong>${esc(gname(g))}</strong><small>${itemsOf(s.id, g.id).length} ${itemsOf(s.id, g.id).length === 1 ? "page" : "pages"}</small></span>
        </a>`).join("");
      return `<div class="nav__drop${active === s.id ? " is-current" : ""}">
          <a class="nav__link" href="${sectionUrl(s.id)}">${esc(s.short)}</a>
          <button class="nav__caret" aria-expanded="false" aria-label="Show ${esc(s.name)} sub-pages">${icon("chevD")}</button>
          <div class="mega"><a class="mega__head" href="${sectionUrl(s.id)}" style="--c1:${s.c1};--c2:${s.c2}"><span class="mega__icon">${icon(s.icon)}</span><span><strong>${esc(s.name)}</strong><small>${esc(s.tagline)}</small></span>${icon("arrow")}</a><div class="mega__grid">${groups}</div></div>
        </div>`;
    }).join("");
    const drawerSections = window.SECTIONS.map((s, i) => `<details class="dsec" style="--c1:${s.c1};--c2:${s.c2};--d:${i}">
        <summary><span class="mega__icon">${icon(s.icon)}</span><span>${esc(s.name)}</span>${icon("chevD", "dsec__chev")}</summary>
        <div class="dsec__list">
          <a href="${sectionUrl(s.id)}"><strong>All of ${esc(s.short)}</strong>${icon("arrow")}</a>
          ${s.groups.map((g) => `<a href="${sectionUrl(s.id, g.id)}">${icon(g.icon)}${esc(gname(g))}</a>`).join("")}
        </div>
      </details>`).join("");

    el.innerHTML = `
      <div class="header__inner container">
        <a class="brand" href="index.html" aria-label="${esc(window.SITE.name)} — home">
          <span class="brand__mark">C</span><span class="brand__word">${esc(window.SITE.firstName)}<i>.</i></span>
        </a>
        <nav class="nav" aria-label="Main">${sections}</nav>
        <a class="btn btn--sm btn--ink header__cta" href="${home ? "#contact" : "index.html#contact"}">Contact ${icon("arrow")}</a>
        <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">${icon("menu")}</button>
      </div>
      <div class="drawer" id="drawer" hidden>
        <div class="drawer__inner container">
          <a class="drawer__home" href="index.html">Home</a>
          <div class="drawer__secs">${drawerSections}</div>
          <a class="btn btn--ink drawer__contact" href="${home ? "#contact" : "index.html#contact"}">${icon("mail")} Contact</a>
        </div>
      </div>`;

    const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // dropdowns: open on hover (desktop) and via the caret button (keyboard / touch)
    const drops = [...el.querySelectorAll(".nav__drop")];
    const closeAll = (except) => drops.forEach((d) => { if (d !== except) { d.classList.remove("is-open"); d.querySelector(".nav__caret").setAttribute("aria-expanded", "false"); } });
    drops.forEach((d) => {
      const b = d.querySelector(".nav__caret");
      b.addEventListener("click", (e) => { e.stopPropagation(); const open = !d.classList.contains("is-open"); closeAll(d); d.classList.toggle("is-open", open); b.setAttribute("aria-expanded", open); });
      d.addEventListener("mouseenter", () => { if (matchMedia("(hover: hover)").matches) { closeAll(d); d.classList.add("is-open"); } });
      d.addEventListener("mouseleave", () => { if (matchMedia("(hover: hover)").matches) d.classList.remove("is-open"); });
    });
    document.addEventListener("click", (e) => { if (!e.target.closest(".nav__drop")) closeAll(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

    // mobile drawer
    const burger = el.querySelector(".burger"), drawer = el.querySelector(".drawer");
    const setDrawer = (open) => {
      burger.setAttribute("aria-expanded", open);
      burger.innerHTML = icon(open ? "close" : "menu");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("drawer-open", open);
      if (open) { drawer.hidden = false; requestAnimationFrame(() => drawer.classList.add("is-open")); }
      else { drawer.classList.remove("is-open"); setTimeout(() => (drawer.hidden = true), 300); }
    };
    burger.addEventListener("click", () => setDrawer(burger.getAttribute("aria-expanded") !== "true"));
    drawer.addEventListener("click", (e) => { if (e.target.closest("a")) setDrawer(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") setDrawer(false); });
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const S = window.SITE;
    el.innerHTML = `
      <div class="container footer__inner">
        <div class="footer__brand">
          <a class="brand brand--light" href="index.html"><span class="brand__mark">C</span><span class="brand__word">${esc(S.firstName)}<i>.</i></span></a>
          <p>${esc(S.tagline)}</p>
        </div>
        ${window.SECTIONS.map((s) => `<div class="footer__col">
          <h4><a href="${sectionUrl(s.id)}">${esc(s.name)}</a></h4>
          <ul>${s.groups.map((g) => `<li><a href="${sectionUrl(s.id, g.id)}">${esc(gname(g))}</a></li>`).join("")}</ul>
        </div>`).join("")}
      </div>
      <div class="container footer__bottom">
        <span>© ${new Date().getFullYear()} ${esc(S.name)} · <a href="index.html#contact">Contact</a></span>
        <button class="totop" type="button">Back to top ${icon("up")}</button>
      </div>`;
    el.querySelector(".totop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- Scroll reveal ---------- */
  let io;
  function reveal(root = document) {
    const els = root.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((e) => e.classList.add("is-in"));
      return;
    }
    io = io || new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((e, i) => { e.style.setProperty("--stagger", (i % 6) * 60 + "ms"); io.observe(e); });
  }

  window.UI = { icon, esc, sectionById, groupOf, groupById, activityUrl, sectionUrl, itemsOf, gname, coverArt, activityCard, renderHeader, renderFooter, reveal };
})();
