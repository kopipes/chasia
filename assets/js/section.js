(function () {
  const { icon, esc, sectionById, sectionUrl, itemsOf, gname, activityCard, renderHeader, renderFooter, reveal } = window.UI;
  const SECS = window.SECTIONS, S = window.SITE;
  const main = document.getElementById("main");
  const sid = new URLSearchParams(location.search).get("s");
  const sec = sectionById(sid);

  renderHeader(sec ? sec.id : "");
  renderFooter();

  if (!sec) {
    document.body.classList.remove("page-activity");
    main.innerHTML = `<section class="notfound container"><p class="kicker">404</p><h1 class="h2">This section <em>doesn’t exist</em>.</h1>
      <a class="btn btn--ink" href="index.html#sections">${icon("arrowLeft")} Back home</a></section>`;
    return;
  }
  document.title = `${sec.name} — ${S.name}`;
  document.querySelector('meta[name="description"]').setAttribute("content", sec.intro[0]);

  const idx = SECS.indexOf(sec), prev = SECS[idx - 1], next = SECS[idx + 1];
  const total = itemsOf(sec.id).length;

  main.innerHTML = `
  <section class="a-hero s-hero" style="--c1:${sec.c1};--c2:${sec.c2}">
    <div class="a-hero__bg" aria-hidden="true"></div>
    <span class="s-hero__num" aria-hidden="true">${sec.num}</span>
    <div class="container">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span aria-current="page">${esc(sec.name)}</span></nav>
      <p class="a-hero__cat">${icon(sec.icon)} Section ${sec.num}</p>
      <h1 class="a-hero__title">${esc(sec.name)}</h1>
      <p class="a-hero__lead">${esc(sec.tagline)}</p>
      <div class="a-hero__meta">
        <span class="pill">${icon("hash")}${sec.groups.length} sub-sections</span>
        <span class="pill">${icon("book")}${total} pages</span>
      </div>
    </div>
  </section>

  <nav class="subnav" aria-label="${esc(sec.name)} sub-sections" style="--c1:${sec.c1};--c2:${sec.c2}">
    <div class="container subnav__inner">
      ${sec.groups.map((g) => `<a href="#${g.id}" data-g="${g.id}">${icon(g.icon)}<span>${esc(gname(g))}</span><em>${itemsOf(sec.id, g.id).length}</em></a>`).join("")}
    </div>
  </nav>

  <section class="section s-intro">
    <div class="container about__grid">
      <div><p class="kicker reveal">Introduction</p><h2 class="h2 reveal">${esc(sec.name)}, <em>in brief</em></h2></div>
      <div class="about__text">${sec.intro.map((p, i) => `<p class="reveal${i === 0 ? " welcome__first" : ""}">${esc(p)}</p>`).join("")}</div>
    </div>
  </section>

  ${sec.groups.map((g, gi) => {
    const items = itemsOf(sec.id, g.id);
    return `<section class="section group ${gi % 2 === 0 ? "section--tint" : ""}" id="${g.id}" style="--c1:${sec.c1};--c2:${sec.c2}">
      <div class="container">
        <div class="section__head group__head">
          <div class="group__title">
            <span class="group__icon reveal">${icon(g.icon)}</span>
            <div>
              <p class="kicker reveal">${g.num} · ${items.length} ${items.length === 1 ? "page" : "pages"}</p>
              <h2 class="h2 reveal">${esc(g.name)}</h2>
            </div>
          </div>
          <p class="section__sub reveal">${esc(g.intro)}</p>
        </div>
        <div class="grid ${items.length < 3 ? "grid--few" : ""}">${items.map((a) => activityCard(a)).join("")}</div>
      </div>
    </section>`;
  }).join("")}

  <section class="section more">
    <div class="container">
      <div class="pager reveal">
        ${prev ? `<a class="pager__link" href="${sectionUrl(prev.id)}"><small>${icon("arrowLeft")} ${prev.num}</small><strong>${esc(prev.name)}</strong></a>` : `<a class="pager__link" href="index.html"><small>${icon("arrowLeft")} Home</small><strong>Welcome</strong></a>`}
        ${next ? `<a class="pager__link pager__link--next" href="${sectionUrl(next.id)}"><small>${next.num} ${icon("arrow")}</small><strong>${esc(next.name)}</strong></a>` : `<a class="pager__link pager__link--next" href="index.html#contact"><small>Contact ${icon("arrow")}</small><strong>Get in touch</strong></a>`}
      </div>
    </div>
  </section>`;

  // highlight current sub-section in the sticky sub-nav
  const links = [...main.querySelectorAll(".subnav a")];
  const groupsEls = [...main.querySelectorAll("section.group")];
  let last = null;
  const setActive = () => {
    let cur = groupsEls[0] && groupsEls[0].id;
    groupsEls.forEach((el) => { if (el.getBoundingClientRect().top < 200) cur = el.id; });
    if (cur === last) return; last = cur;
    links.forEach((l) => {
      const on = l.dataset.g === cur; l.classList.toggle("is-active", on);
      const bar = l.parentElement;
      if (on && bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: l.offsetLeft - 24, behavior: "smooth" });
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  reveal();
  if (location.hash) { const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) setTimeout(() => t.scrollIntoView(), 60); }
  window.addEventListener("hashchange", () => { const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView({ behavior: "smooth" }); });
})();
