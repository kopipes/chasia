(function () {
  const { icon, esc, sectionById, groupOf, activityUrl, sectionUrl, itemsOf, gname, activityCard, renderHeader, renderFooter, reveal } = window.UI;
  const S = window.SITE, SECS = window.SECTIONS, ACTS = window.ACTIVITIES;
  const $ = (s) => document.querySelector(s);

  renderHeader("home");
  renderFooter();
  document.querySelectorAll("[data-icon]").forEach((el) =>
    el.className ? (el.innerHTML = icon(el.dataset.icon)) : (el.outerHTML = icon(el.dataset.icon))
  );

  /* ---------- Hero ---------- */
  $("[data-first]").textContent = S.firstName;
  $("[data-tagline]").textContent = S.tagline;
  $("[data-intro]").textContent = S.intro;
  $("[data-portrait]").innerHTML = S.portrait
    ? `<img src="${esc(S.portrait)}" alt="Portrait of ${esc(S.name)}">`
    : `<div class="portrait__ph"><span class="portrait__mono">CP</span></div>`;
  const words = SECS.map((s) => `<span>${icon(s.icon)}${esc(s.name)}</span>`).join("");
  $("[data-marquee]").innerHTML = words + words + words;

  /* ---------- Welcome message ---------- */
  $("[data-welcome]").innerHTML = S.welcome.map((p, i) => `<p${i === 0 ? ' class="welcome__first"' : ""}>${esc(p)}</p>`).join("") +
    `<p class="welcome__sign">— ${esc(S.firstName)}</p>`;
  $("[data-facts]").innerHTML = [["building", "School", S.school], ["cap", "Currently", "Grade 8"], ["pin", "Based in", S.location]]
    .map(([i, k, v]) => `<li>${icon(i)}<span>${k}</span><strong>${esc(v)}</strong></li>`).join("");
  $("[data-stats]").innerHTML = [
    ["50/50", "Perfect Cambridge Primary Checkpoint score"],
    ["1st", "Overall Team — WSC Global Round, Bangkok"],
    ["Top", "Student of 70+, in Grade 5 and Grade 6"],
    [String(ACTS.length), "Pages across 5 sections"],
  ].map(([v, l]) => `<div class="stat reveal"><span class="stat__value">${v}</span><span class="stat__label">${l}</span></div>`).join("");

  /* ---------- Video ---------- */
  if (S.reel || S.reelYoutube) {
    $("#video").hidden = false;
    $("[data-reel]").innerHTML = S.reelYoutube
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(S.reelYoutube)}?rel=0" title="${esc(S.name)} — reel" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
      : `<video src="${esc(S.reel)}" controls playsinline preload="metadata"></video>`;
  }

  /* ---------- Sections ---------- */
  $("[data-sections]").innerHTML = SECS.map((s, i) => {
    const n = itemsOf(s.id).length;
    return `<a class="world reveal world--${i}" href="${sectionUrl(s.id)}" style="--c1:${s.c1};--c2:${s.c2}">
      <span class="world__glow" aria-hidden="true"></span>
      <span class="world__top"><span class="world__num">${s.num}</span><span class="world__count">${n} pages</span></span>
      <span class="world__icon">${icon(s.icon)}</span>
      <span class="world__name">${esc(s.name)}</span>
      <span class="world__tag">${esc(s.tagline)}</span>
      <span class="world__groups">${s.groups.map((g) => `<span>${esc(gname(g))}</span>`).join("")}</span>
      <span class="world__go">${icon("arrowUpRight")}</span>
    </a>`;
  }).join("");

  /* ---------- Featured bento ---------- */
  $("[data-featured]").innerHTML = ACTS.filter((a) => a.featured).slice(0, 6).map((a, i) => {
    const s = sectionById(a.section), g = groupOf(a);
    return `<a class="feat feat--${i} reveal" href="${activityUrl(a)}" style="--c1:${s.c1};--c2:${s.c2}">
      <span class="feat__glow" aria-hidden="true"></span>
      <span class="feat__icon">${icon(g.icon)}</span>
      <span class="feat__cat">${esc(s.name)} · ${esc(gname(g))}</span>
      ${a.stat ? `<span class="feat__stat">${esc(a.stat.value)}<small>${esc(a.stat.label)}</small></span>` : ""}
      <span class="feat__title">${esc(a.title)}</span>
      <span class="feat__go">${icon("arrowUpRight")}</span>
    </a>`;
  }).join("");

  /* ---------- All pages explorer ---------- */
  const grid = $("[data-grid]"), filters = $("[data-filters]"), search = $("[data-search]");
  const empty = $("[data-empty]"), count = $("[data-count]");
  let state = { sec: "all", q: "" }, expanded = false;
  const LIMIT = 9;
  const more = document.createElement("div"); more.className = "more-wrap"; grid.after(more);

  filters.innerHTML = `<button class="filter" role="tab" data-f="all">All <span>${ACTS.length}</span></button>` +
    SECS.map((s) => `<button class="filter" role="tab" data-f="${s.id}" style="--c1:${s.c1};--c2:${s.c2}">${icon(s.icon)}${esc(s.short)} <span>${itemsOf(s.id).length}</span></button>`).join("");

  function render() {
    const q = state.q.trim().toLowerCase();
    const list = ACTS.filter((a) => state.sec === "all" || a.section === state.sec)
      .filter((a) => !q || [a.title, a.summary, a.org, a.period, sectionById(a.section).name, gname(groupOf(a)), ...(a.highlights || [])].join(" ").toLowerCase().includes(q));
    const capped = !expanded && !q && list.length > LIMIT;
    grid.innerHTML = (capped ? list.slice(0, LIMIT) : list).map((a) => activityCard(a, { showSection: state.sec === "all" })).join("");
    more.innerHTML = capped ? `<button class="btn btn--ghost" data-more>Show all ${list.length} pages ${icon("chevD")}</button>` : "";
    empty.hidden = list.length > 0;
    count.textContent = `Showing ${list.length} ${list.length === 1 ? "page" : "pages"} in ${state.sec === "all" ? "all sections" : sectionById(state.sec).name}${q ? ` matching “${state.q}”` : ""}`;
    filters.querySelectorAll(".filter").forEach((b) => { const on = b.dataset.f === state.sec; b.classList.toggle("is-active", on); b.setAttribute("aria-selected", on); });
    reveal(grid);
  }
  filters.addEventListener("click", (e) => { const b = e.target.closest(".filter"); if (b) { state.sec = b.dataset.f; expanded = false; render(); } });
  more.addEventListener("click", (e) => { if (e.target.closest("[data-more]")) { expanded = true; render(); } });
  search.addEventListener("input", () => { state.q = search.value; render(); });
  $("[data-reset]").addEventListener("click", () => { search.value = ""; state = { sec: "all", q: "" }; render(); });
  render();

  /* ---------- Journey ---------- */
  const dated = ACTS.filter((a) => a.year);
  const years = [...new Set(dated.map((a) => a.year))].sort((a, b) => b - a);
  const now = Math.max(...years);
  $("[data-journey]").innerHTML = years.map((y) => {
    const items = dated.filter((a) => a.year === y);
    return `<div class="year reveal">
      <div class="year__label"><span>${y === now ? "Now" : y}</span><small>${y === now ? y : `${items.length} pages`}</small></div>
      <ul class="year__list">${items.map((a) => {
        const s = sectionById(a.section), g = groupOf(a);
        return `<li><a href="${activityUrl(a)}" style="--c1:${s.c1};--c2:${s.c2}">
          <span class="year__dot">${icon(g.icon)}</span>
          <span class="year__text"><strong>${esc(a.title)}</strong><small>${esc(s.short)} · ${esc(gname(g))} · ${esc(a.period)}</small></span>
          ${icon("arrow", "year__arrow")}
        </a></li>`;
      }).join("")}</ul>
    </div>`;
  }).join("");

  /* ---------- Contact ---------- */
  $("[data-email]").href = `mailto:${S.email}`;
  $("[data-email-text]").textContent = S.email;

  reveal();
  if (location.hash) { const t = document.querySelector(location.hash); if (t) setTimeout(() => t.scrollIntoView(), 50); }
})();
