(function () {
  const { icon, esc, catById, activityUrl, activityCard, renderHeader, renderFooter, reveal } = window.UI;
  const S = window.SITE, CATS = window.CATEGORIES, ACTS = window.ACTIVITIES;
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

  const words = CATS.map((c) => `<span>${icon(c.icon)}${esc(c.name)}</span>`).join("");
  $("[data-marquee]").innerHTML = words + words;

  /* ---------- About ---------- */
  $("[data-about]").textContent =
    `${S.firstName} is a student at ${S.school}. Over the past three years she has topped her grade, won a first-place team trophy at a global debate competition, served as School Vice Captain, played football for school and club teams, painted for a cause, thrown pottery on the wheel, made music — and given her time to elders, neighbours and the environment.`;
  $("[data-facts]").innerHTML = [
    ["building", "School", S.school],
    ["cap", "Currently", "Grade 8"],
    ["pin", "Based in", S.location],
  ].map(([i, k, v]) => `<li>${icon(i)}<span>${k}</span><strong>${esc(v)}</strong></li>`).join("");

  const stats = [
    ["50/50", "Perfect Cambridge Primary Checkpoint score"],
    ["1st", "Overall Team — WSC Global Round, Bangkok"],
    ["Top", "Student of 70+, in Grade 5 and Grade 6"],
    [String(ACTS.length), "Activities across 8 areas"],
  ];
  $("[data-stats]").innerHTML = stats
    .map(([v, l]) => `<div class="stat reveal"><span class="stat__value">${v}</span><span class="stat__label">${l}</span></div>`)
    .join("");

  /* ---------- Featured bento ---------- */
  const featured = ACTS.filter((a) => a.featured);
  $("[data-featured]").innerHTML = featured
    .map((a, i) => {
      const c = catById(a.cat);
      return `<a class="feat feat--${i} reveal" href="${activityUrl(a)}" style="--c1:${c.c1};--c2:${c.c2}">
        <span class="feat__glow" aria-hidden="true"></span>
        <span class="feat__icon">${icon(c.icon)}</span>
        <span class="feat__cat">${esc(c.name)} · ${esc(a.period)}</span>
        ${a.stat ? `<span class="feat__stat">${esc(a.stat.value)}<small>${esc(a.stat.label)}</small></span>` : ""}
        <span class="feat__title">${esc(a.title)}</span>
        <span class="feat__go">${icon("arrowUpRight")}</span>
      </a>`;
    })
    .join("");

  /* ---------- Areas ---------- */
  $("[data-areas]").innerHTML = CATS.map((c, i) => {
    const n = ACTS.filter((a) => a.cat === c.id).length;
    return `<button class="area reveal" data-area="${c.id}" style="--c1:${c.c1};--c2:${c.c2}">
      <span class="area__num">0${i + 1}</span>
      <span class="area__icon">${icon(c.icon)}</span>
      <span class="area__name">${esc(c.name)}</span>
      <span class="area__blurb">${esc(c.blurb)}</span>
      <span class="area__foot"><span>${n} ${n === 1 ? "activity" : "activities"}</span>${icon("arrow")}</span>
    </button>`;
  }).join("");

  /* ---------- Achievements explorer ---------- */
  const grid = $("[data-grid]"), filters = $("[data-filters]"), search = $("[data-search]");
  const empty = $("[data-empty]"), count = $("[data-count]");
  let state = { area: "all", q: "" }, expanded = false;
  const LIMIT = 9;
  const more = document.createElement("div");
  more.className = "more-wrap";
  grid.after(more);

  filters.innerHTML =
    `<button class="filter" role="tab" data-f="all">All <span>${ACTS.length}</span></button>` +
    CATS.map((c) => `<button class="filter" role="tab" data-f="${c.id}" style="--c1:${c.c1};--c2:${c.c2}">${icon(c.icon)}${esc(c.short)} <span>${ACTS.filter((a) => a.cat === c.id).length}</span></button>`).join("");

  const order = (a, b) => b.year - a.year || CATS.findIndex((c) => c.id === a.cat) - CATS.findIndex((c) => c.id === b.cat);

  function render() {
    const q = state.q.trim().toLowerCase();
    const list = ACTS.filter((a) => state.area === "all" || a.cat === state.area)
      .filter((a) => !q || [a.title, a.summary, a.org, a.period, catById(a.cat).name, ...(a.highlights || [])].join(" ").toLowerCase().includes(q))
      .sort(order);
    const capped = !expanded && state.area === "all" && !q && list.length > LIMIT;
    grid.innerHTML = (capped ? list.slice(0, LIMIT) : list).map((a) => activityCard(a)).join("");
    more.innerHTML = capped ? `<button class="btn btn--ghost" data-more>Show all ${list.length} activities ${icon("chevR", "rot90")}</button>` : "";
    empty.hidden = list.length > 0;
    const areaName = state.area === "all" ? "all areas" : catById(state.area).name;
    count.textContent = `Showing ${list.length} ${list.length === 1 ? "activity" : "activities"} in ${areaName}${q ? ` matching “${state.q}”` : ""}`;
    filters.querySelectorAll(".filter").forEach((b) => {
      const on = b.dataset.f === state.area;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on);
    });
    reveal(grid);
  }

  function setArea(id, scroll) {
    state.area = id;
    const url = new URL(location.href);
    if (id === "all") url.searchParams.delete("area"); else url.searchParams.set("area", id);
    history.replaceState(null, "", url.pathname + url.search + (scroll ? "#achievements" : location.hash));
    render();
    if (scroll) document.getElementById("achievements").scrollIntoView({ behavior: "smooth" });
  }

  filters.addEventListener("click", (e) => { const b = e.target.closest(".filter"); if (b) setArea(b.dataset.f); });
  $("[data-areas]").addEventListener("click", (e) => { const b = e.target.closest(".area"); if (b) setArea(b.dataset.area, true); });
  window.addEventListener("area:select", (e) => setArea(e.detail, true));
  more.addEventListener("click", (e) => { if (e.target.closest("[data-more]")) { expanded = true; render(); } });
  search.addEventListener("input", () => { state.q = search.value; render(); });
  $("[data-reset]").addEventListener("click", () => { search.value = ""; state.q = ""; setArea("all"); });

  const initial = new URLSearchParams(location.search).get("area");
  if (initial && catById(initial)) state.area = initial;
  render();

  /* ---------- Journey ---------- */
  const years = [...new Set(ACTS.map((a) => a.year))].sort((a, b) => b - a);
  const now = Math.max(...years);
  $("[data-journey]").innerHTML = years.map((y) => {
    const items = ACTS.filter((a) => a.year === y).sort((a, b) => CATS.findIndex((c) => c.id === a.cat) - CATS.findIndex((c) => c.id === b.cat));
    return `<div class="year reveal">
      <div class="year__label"><span>${y === now ? "Now" : y}</span><small>${y === now ? y : `${items.length} activities`}</small></div>
      <ul class="year__list">${items.map((a) => {
        const c = catById(a.cat);
        return `<li><a href="${activityUrl(a)}" style="--c1:${c.c1};--c2:${c.c2}">
          <span class="year__dot">${icon(c.icon)}</span>
          <span class="year__text"><strong>${esc(a.title)}</strong><small>${esc(c.name)} · ${esc(a.period)}</small></span>
          ${icon("arrow", "year__arrow")}
        </a></li>`;
      }).join("")}</ul>
    </div>`;
  }).join("");

  /* ---------- Contact ---------- */
  const mail = $("[data-email]");
  mail.href = `mailto:${S.email}`;
  $("[data-email-text]").textContent = S.email;

  reveal();
  if (location.hash) {
    const t = document.querySelector(location.hash);
    if (t) setTimeout(() => t.scrollIntoView(), 50);
  }
})();
