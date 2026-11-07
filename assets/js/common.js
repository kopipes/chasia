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
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
    arrowUpRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    chevL: '<path d="m15 18-6-6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
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
  };

  const icon = (name, cls = "") =>
    `<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const catById = (id) => window.CATEGORIES.find((c) => c.id === id);
  const activityUrl = (a) => `activity.html?id=${encodeURIComponent(a.id)}`;
  const areaUrl = (catId) => `index.html?area=${encodeURIComponent(catId)}#achievements`;

  /* Decorative cover art when no photo exists — a gradient + big icon */
  function coverArt(a, extraCls = "") {
    const c = catById(a.cat);
    if (a.cover) {
      return `<div class="cover ${extraCls}" style="--c1:${c.c1};--c2:${c.c2}"><img src="${esc(a.cover)}" alt="" loading="lazy"></div>`;
    }
    return `<div class="cover cover--art ${extraCls}" style="--c1:${c.c1};--c2:${c.c2}">
      <span class="cover__icon">${icon(c.icon)}</span>
      <span class="cover__grain"></span>
    </div>`;
  }

  function activityCard(a, opts = {}) {
    const c = catById(a.cat);
    const badge = (a.badges && a.badges[0]) ? `<span class="card__badge">${icon("award")}${esc(a.badges[0])}</span>` : "";
    return `<a class="card reveal" href="${activityUrl(a)}" data-cat="${a.cat}" style="--c1:${c.c1};--c2:${c.c2}">
      <div class="card__media">${coverArt(a)}${badge}</div>
      <div class="card__body">
        <div class="card__meta"><span class="chip chip--cat">${icon(c.icon)}${esc(c.short)}</span><span class="card__period">${esc(a.period)}</span></div>
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
    const onHome = active === "home";
    const href = (hash) => (onHome ? hash : "index.html" + hash);
    const links = [
      ["About", href("#about")],
      ["Achievements", href("#achievements")],
      ["Journey", href("#journey")],
      ["Contact", href("#contact")],
    ];
    const areas = window.CATEGORIES.map(
      (c) => `<a class="mega__item" href="${onHome ? "#achievements" : areaUrl(c.id)}" data-area="${c.id}" style="--c1:${c.c1};--c2:${c.c2}">
        <span class="mega__icon">${icon(c.icon)}</span>
        <span><strong>${esc(c.name)}</strong><small>${window.ACTIVITIES.filter((a) => a.cat === c.id).length} activities</small></span>
      </a>`
    ).join("");

    el.innerHTML = `
      <div class="header__inner container">
        <a class="brand" href="index.html" aria-label="${esc(window.SITE.name)} — home">
          <span class="brand__mark">C</span><span class="brand__word">${esc(window.SITE.firstName)}<i>.</i></span>
        </a>
        <nav class="nav" aria-label="Main">
          <a href="${links[0][1]}">${links[0][0]}</a>
          <div class="nav__drop">
            <button class="nav__dropbtn" aria-expanded="false" aria-controls="mega">Areas ${icon("chevR", "rot90")}</button>
            <div class="mega" id="mega"><div class="mega__grid">${areas}</div></div>
          </div>
          ${links.slice(1).map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}
        </nav>
        <a class="btn btn--sm btn--ink header__cta" href="${links[1][1]}">Explore ${icon("arrow")}</a>
        <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">${icon("menu")}</button>
      </div>
      <div class="drawer" id="drawer" hidden>
        <div class="drawer__inner container">
          <nav class="drawer__links" aria-label="Mobile">
            ${links.map(([t, h], i) => `<a href="${h}" style="--d:${i}">${t}</a>`).join("")}
          </nav>
          <p class="drawer__label">Browse by area</p>
          <div class="drawer__areas">${areas}</div>
        </div>
      </div>`;

    const header = el;
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mega menu
    const drop = el.querySelector(".nav__drop");
    const dropBtn = el.querySelector(".nav__dropbtn");
    const setDrop = (open) => { drop.classList.toggle("is-open", open); dropBtn.setAttribute("aria-expanded", open); };
    dropBtn.addEventListener("click", (e) => { e.stopPropagation(); setDrop(!drop.classList.contains("is-open")); });
    document.addEventListener("click", (e) => { if (!drop.contains(e.target)) setDrop(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setDrop(false); });

    // Mobile drawer
    const burger = el.querySelector(".burger");
    const drawer = el.querySelector(".drawer");
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

    // Area links on the home page filter in place
    if (onHome) {
      el.querySelectorAll("[data-area]").forEach((a) =>
        a.addEventListener("click", () => { setDrop(false); window.dispatchEvent(new CustomEvent("area:select", { detail: a.dataset.area })); })
      );
    }
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
        <div class="footer__col">
          <h4>Areas</h4>
          <ul>${window.CATEGORIES.map((c) => `<li><a href="${areaUrl(c.id)}">${esc(c.name)}</a></li>`).join("")}</ul>
        </div>
        <div class="footer__col">
          <h4>Site</h4>
          <ul>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#achievements">Achievements</a></li>
            <li><a href="index.html#journey">Journey</a></li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer__bottom">
        <span>© ${new Date().getFullYear()} ${esc(S.name)}</span>
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

  window.UI = { icon, esc, catById, activityUrl, areaUrl, coverArt, activityCard, renderHeader, renderFooter, reveal };
})();
