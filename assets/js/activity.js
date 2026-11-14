(function () {
  const { icon, esc, sectionById, groupOf, activityUrl, sectionUrl, itemsOf, gname, coverArt, activityCard, renderHeader, renderFooter, reveal } = window.UI;
  const ACTS = window.ACTIVITIES, SECS = window.SECTIONS, S = window.SITE;
  const main = document.getElementById("main");

  const id = new URLSearchParams(location.search).get("id");
  const a = ACTS.find((x) => x.id === id);

  renderHeader(a ? a.section : "");
  renderFooter();

  if (!a) {
    document.title = `Not found — ${S.name}`;
    document.body.classList.remove("page-activity");
    main.innerHTML = `<section class="notfound container">
      <p class="kicker">404</p><h1 class="h2">This page <em>doesn’t exist</em>.</h1>
      <p>The page may have been moved or renamed.</p>
      <a class="btn btn--ink" href="index.html#all">${icon("arrowLeft")} See all pages</a>
    </section>`;
    return;
  }

  const c = sectionById(a.section), g = groupOf(a);
  document.title = `${a.title.replace(/[“”]/g, "")} — ${S.name}`;
  document.querySelector('meta[name="description"]').setAttribute("content", a.summary);

  /* ---------- Gallery data (real or placeholder) ---------- */
  const isPlaceholder = !a.gallery || a.gallery.length === 0;
  const gallery = isPlaceholder ? makePlaceholders(c) : a.gallery;
  const nPhotos = gallery.filter((x) => x.type === "image").length;
  const nVideos = gallery.length - nPhotos;

  /* ---------- Sibling navigation (sitemap order) ---------- */
  const inSec = itemsOf(a.section);
  const idx = inSec.indexOf(a);
  const prev = inSec[idx - 1], next = inSec[idx + 1];
  const sameGroup = itemsOf(a.section, a.group).filter((x) => x !== a);
  const more = (sameGroup.length ? sameGroup : inSec.filter((x) => x !== a)).slice(0, 3);

  const facts = [
    ["calendar", "Period", a.period],
    ["building", "Organisation", a.org],
    ["pin", "Location", a.location],
    ["user", "Role", a.role],
  ].filter((f) => f[2]);

  main.innerHTML = `
  <section class="a-hero" style="--c1:${c.c1};--c2:${c.c2}">
    <div class="a-hero__bg" aria-hidden="true"></div>
    <div class="container a-hero__inner">
      <div class="a-hero__copy">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="index.html">Home</a><span>/</span>
          <a href="${sectionUrl(c.id)}">${esc(c.name)}</a><span>/</span>
          <a href="${sectionUrl(c.id, g.id)}">${esc(gname(g))}</a><span>/</span>
          <span aria-current="page">${esc(a.title)}</span>
        </nav>
        <p class="a-hero__cat">${icon(g.icon)} ${esc(c.short)} · ${esc(gname(g))}</p>
        <h1 class="a-hero__title">${esc(a.title)}</h1>
        <p class="a-hero__lead">${esc(a.summary)}</p>
        <div class="a-hero__meta">
          ${a.period ? `<span class="pill">${icon("calendar")}${esc(a.period)}</span>` : ""}
          ${a.location ? `<span class="pill">${icon("pin")}${esc(a.location)}</span>` : ""}
          ${(a.badges || []).map((b) => `<span class="pill pill--solid">${icon("award")}${esc(b)}</span>`).join("")}
        </div>
        <div class="a-hero__jump">
          <a class="btn btn--light btn--sm" href="#gallery">${icon("image")} View gallery <span class="count">${isPlaceholder ? 0 : gallery.length}</span></a>
        </div>
      </div>
      <div class="a-hero__visual">
        ${coverArt(a, "cover--hero")}
        ${a.stat ? `<div class="a-hero__stat"><strong>${esc(a.stat.value)}</strong><span>${esc(a.stat.label)}</span></div>` : ""}
      </div>
    </div>
  </section>

  <section class="section a-body">
    <div class="container a-body__grid">
      <article class="story">
        <p class="kicker reveal">The story</p>
        ${a.description.map((p, i) => `<p class="${i === 0 ? "story__first" : ""} reveal">${esc(p)}</p>`).join("")}
        ${a.needsInfo ? `<p class="notice notice--soft reveal">${icon("info")} More details about this page are coming soon.</p>` : ""}

        ${a.highlights && a.highlights.length ? `
        <h2 class="h3 reveal">Highlights</h2>
        <ul class="ticks">${a.highlights.map((h) => `<li class="reveal" style="--c1:${c.c1};--c2:${c.c2}">${icon("check")}<span>${esc(h)}</span></li>`).join("")}</ul>` : ""}

        ${a.list && a.list.length ? `
        <h2 class="h3 reveal">${a.group === "travel" ? "Destinations" : a.group === "cooking" ? "Classes" : a.group === "parks" ? "Parks" : "List"}</h2>
        <ul class="tags">${a.list.map((l) => `<li class="reveal" style="--c1:${c.c1};--c2:${c.c2}">${icon(g.icon)}<span><strong>${esc(l.title)}</strong>${l.text ? `<small>${esc(l.text)}</small>` : ""}</span></li>`).join("")}</ul>` : ""}

        ${a.timeline ? `
        <h2 class="h3 reveal">Over the years</h2>
        <ol class="mini-tl">${a.timeline.map((t) => `<li class="reveal" style="--c1:${c.c1};--c2:${c.c2}"><span class="mini-tl__when">${esc(t.period)}</span><p>${esc(t.text)}</p></li>`).join("")}</ol>` : ""}

        ${a.links && a.links.length ? `
        <h2 class="h3 reveal">Links</h2>
        <div class="links">${a.links.map((l) => `<a class="linkcard reveal" href="${esc(l.url)}" target="_blank" rel="noopener" style="--c1:${c.c1};--c2:${c.c2}">
          <span class="linkcard__icon">${icon("external")}</span><span><strong>${esc(l.label)}</strong><small>${esc(l.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0])}</small></span>${icon("arrowUpRight")}</a>`).join("")}</div>` : ""}
      </article>

      <aside class="aside">
        <div class="factcard reveal" style="--c1:${c.c1};--c2:${c.c2}">
          <h2 class="factcard__title">At a glance</h2>
          <dl>${facts.map(([i, k, v]) => `<div><dt>${icon(i)}${k}</dt><dd>${esc(v)}</dd></div>`).join("")}
            <div><dt>${icon(c.icon)}Section</dt><dd><a href="${sectionUrl(c.id)}">${c.num} ${esc(c.name)}</a></dd></div>
            <div><dt>${icon(g.icon)}Sub-section</dt><dd><a href="${sectionUrl(c.id, g.id)}">${g.num} ${esc(g.name)}</a></dd></div>
          </dl>
          <div class="factcard__actions">
            <button class="btn btn--ghost btn--sm" data-share>${icon("share")} <span>Share</span></button>
            <a class="btn btn--ghost btn--sm" href="${sectionUrl(c.id, g.id)}">${icon("arrowLeft")} ${esc(gname(g))}</a>
          </div>
        </div>
      </aside>
    </div>
  </section>

  <section class="section section--tint gallery-sec" id="gallery">
    <div class="container">
      <div class="section__head">
        <div>
          <p class="kicker reveal">Gallery</p>
          <h2 class="h2 reveal">Photos <em>&amp; videos</em></h2>
        </div>
        <div class="tabs reveal" role="tablist" aria-label="Filter gallery">
          <button class="tab is-active" data-g="all" role="tab" aria-selected="true">All <span>${gallery.length}</span></button>
          <button class="tab" data-g="image" role="tab" aria-selected="false">${icon("image")} Photos <span>${nPhotos}</span></button>
          <button class="tab" data-g="video" role="tab" aria-selected="false">${icon("film")} Videos <span>${nVideos}</span></button>
        </div>
      </div>
      ${isPlaceholder ? `<p class="notice reveal">${icon("sparkle")} Photos and videos for this page are coming soon — the tiles below are previews.</p>` : ""}
      <div class="masonry" data-gallery></div>
    </div>
  </section>

  <section class="section more">
    <div class="container">
      <div class="pager reveal">
        ${prev ? `<a class="pager__link" href="${activityUrl(prev)}"><small>${icon("arrowLeft")} Previous</small><strong>${esc(prev.title)}</strong></a>` : `<a class="pager__link" href="${sectionUrl(c.id)}"><small>${icon("arrowLeft")} ${c.num}</small><strong>${esc(c.name)} overview</strong></a>`}
        ${next ? `<a class="pager__link pager__link--next" href="${activityUrl(next)}"><small>Next ${icon("arrow")}</small><strong>${esc(next.title)}</strong></a>` : `<a class="pager__link pager__link--next" href="${sectionUrl(c.id)}"><small>${c.num} ${icon("arrow")}</small><strong>${esc(c.name)} overview</strong></a>`}
      </div>
      ${more.length ? `
      <div class="section__head">
        <div><p class="kicker reveal">Keep exploring</p><h2 class="h2 reveal">More in <em>${esc(sameGroup.length ? gname(g) : c.name)}</em></h2></div>
        <a class="link-arrow reveal" href="${sectionUrl(c.id, sameGroup.length ? g.id : "")}">See all ${icon("arrow")}</a>
      </div>
      <div class="grid grid--3">${more.map((m) => activityCard(m)).join("")}</div>` : ""}
      <div class="other-areas reveal">
        <p>Other sections</p>
        <div>${SECS.filter((x) => x.id !== c.id).map((x) => `<a class="chip chip--area" href="${sectionUrl(x.id)}" style="--c1:${x.c1};--c2:${x.c2}">${icon(x.icon)}${esc(x.name)}</a>`).join("")}</div>
      </div>
    </div>
  </section>`;

  /* ---------- Gallery render ---------- */
  const gEl = main.querySelector("[data-gallery]");
  let visible = gallery;

  function thumbOf(g) {
    if (g.type === "image") return g.thumb || g.src;
    if (g.type === "youtube") return g.poster || `https://i.ytimg.com/vi/${encodeURIComponent(g.id)}/hqdefault.jpg`;
    return g.poster || "";
  }

  function renderGallery(filter) {
    visible = filter === "all" ? gallery : gallery.filter((x) => (filter === "image" ? x.type === "image" : x.type !== "image"));
    gEl.innerHTML = visible.length
      ? visible.map((g, i) => {
          const isVid = g.type !== "image";
          const t = thumbOf(g);
          return `<button class="tile reveal ${isVid ? "tile--video" : ""}" data-i="${i}" aria-label="Open ${isVid ? "video" : "photo"} ${i + 1}${g.caption ? ": " + esc(g.caption) : ""}" style="--c1:${c.c1};--c2:${c.c2}">
            ${t ? `<img src="${esc(t)}" alt="${esc(g.alt || g.caption || "")}" loading="lazy">` : `<span class="tile__blank" style="aspect-ratio:16/9"></span>`}
            ${isVid ? `<span class="tile__play">${icon("play")}</span>` : `<span class="tile__zoom">${icon("arrowUpRight")}</span>`}
            ${g.caption ? `<span class="tile__cap">${esc(g.caption)}</span>` : ""}
          </button>`;
        }).join("")
      : `<p class="gallery-empty">No ${filter === "video" ? "videos" : "photos"} yet.</p>`;
    reveal(gEl);
  }
  renderGallery("all");

  main.querySelector(".tabs").addEventListener("click", (e) => {
    const t = e.target.closest(".tab");
    if (!t) return;
    main.querySelectorAll(".tab").forEach((x) => { x.classList.toggle("is-active", x === t); x.setAttribute("aria-selected", x === t); });
    renderGallery(t.dataset.g);
  });
  gEl.addEventListener("click", (e) => { const t = e.target.closest(".tile"); if (t) openLB(+t.dataset.i, t); });

  /* ---------- Share ---------- */
  main.querySelector("[data-share]").addEventListener("click", async (e) => {
    const btn = e.currentTarget, label = btn.querySelector("span");
    try {
      if (navigator.share) await navigator.share({ title: document.title, text: a.summary, url: location.href });
      else { await navigator.clipboard.writeText(location.href); label.textContent = "Link copied"; setTimeout(() => (label.textContent = "Share"), 2000); }
    } catch (_) { /* cancelled */ }
  });

  /* ---------- Lightbox ---------- */
  const lb = document.getElementById("lightbox");
  const stage = lb.querySelector("[data-lb-stage]");
  const cap = lb.querySelector("[data-lb-caption]");
  const cnt = lb.querySelector("[data-lb-count]");
  const thumbs = lb.querySelector("[data-lb-thumbs]");
  lb.querySelector("[data-lb-close]").innerHTML = icon("close");
  lb.querySelector("[data-lb-prev]").innerHTML = icon("chevL");
  lb.querySelector("[data-lb-next]").innerHTML = icon("chevR");
  lb.style.setProperty("--c1", c.c1); lb.style.setProperty("--c2", c.c2);
  let cur = 0, opener = null;

  function stageHTML(g) {
    switch (g.type) {
      case "image":
        return `<img src="${esc(g.src)}" alt="${esc(g.alt || g.caption || "")}">`;
      case "video":
        return `<video src="${esc(g.src)}" ${g.poster ? `poster="${esc(g.poster)}"` : ""} controls autoplay playsinline></video>`;
      case "youtube":
        return `<div class="lb-frame"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(g.id)}?autoplay=1&rel=0" title="${esc(g.caption || "Video")}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
      default: // placeholder video
        return `<div class="lb-frame lb-frame--ph" style="--c1:${c.c1};--c2:${c.c2}"><span class="lb-ph__play">${icon("play")}</span><p>Video coming soon</p><small>Add an .mp4 or a YouTube link in <code>data.js</code></small></div>`;
    }
  }

  function show(i) {
    cur = (i + visible.length) % visible.length;
    const g = visible[cur];
    stage.classList.remove("is-in");
    stage.innerHTML = stageHTML(g);
    requestAnimationFrame(() => stage.classList.add("is-in"));
    cap.textContent = g.caption || "";
    cnt.textContent = `${cur + 1} / ${visible.length}`;
    thumbs.querySelectorAll("button").forEach((b, j) => {
      b.classList.toggle("is-active", j === cur);
      if (j === cur) b.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    });
    const single = visible.length < 2;
    lb.querySelector("[data-lb-prev]").hidden = single;
    lb.querySelector("[data-lb-next]").hidden = single;
  }

  function openLB(i, from) {
    opener = from;
    thumbs.innerHTML = visible.map((g, j) => {
      const t = thumbOf(g);
      return `<button aria-label="Go to item ${j + 1}" data-j="${j}">${t ? `<img src="${esc(t)}" alt="">` : `<span class="thumb-blank">${icon("play")}</span>`}</button>`;
    }).join("");
    lb.hidden = false;
    document.body.classList.add("lb-open");
    requestAnimationFrame(() => lb.classList.add("is-open"));
    show(i);
    lb.querySelector("[data-lb-close]").focus();
  }

  function closeLB() {
    lb.classList.remove("is-open");
    document.body.classList.remove("lb-open");
    setTimeout(() => { lb.hidden = true; stage.innerHTML = ""; }, 250);
    if (opener) opener.focus();
  }

  lb.querySelector("[data-lb-close]").addEventListener("click", closeLB);
  lb.querySelector("[data-lb-prev]").addEventListener("click", () => show(cur - 1));
  lb.querySelector("[data-lb-next]").addEventListener("click", () => show(cur + 1));
  thumbs.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) show(+b.dataset.j); });
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target === stage) closeLB(); });

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLB();
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "ArrowRight") show(cur + 1);
    else if (e.key === "Tab") { // keep focus inside the viewer
      const f = [...lb.querySelectorAll("button:not([hidden]), video, iframe")].filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  let sx = 0, sy = 0;
  stage.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(cur + (dx < 0 ? 1 : -1));
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLB();
  }, { passive: true });

  reveal();

  /* ---------- Placeholder generator ---------- */
  function makePlaceholders(cat) {
    const shapes = [[4, 5], [4, 3], [1, 1], [3, 4], [16, 10], [4, 5], [3, 2]];
    const items = shapes.map(([w, h], i) => ({
      type: "image",
      src: phSVG(w * 200, h * 200, cat, i, "Photo " + (i + 1)),
      caption: `Photo ${i + 1} — coming soon`,
    }));
    items.splice(2, 0, { type: "placeholder-video", poster: phSVG(1600, 900, cat, 9, "Video"), caption: "Video — coming soon" });
    return items;
  }

  function phSVG(w, h, cat, seed, label) {
    const r = (n) => ((Math.sin(seed * 9.13 + n * 3.71) + 1) / 2);
    const circles = [0, 1, 2].map((n) =>
      `<circle cx="${(r(n) * w).toFixed(0)}" cy="${(r(n + 5) * h).toFixed(0)}" r="${((0.25 + r(n + 9) * 0.35) * Math.max(w, h)).toFixed(0)}" fill="#fff" fill-opacity="${(0.06 + r(n + 2) * 0.1).toFixed(2)}"/>`
    ).join("");
    const s = Math.min(w, h) * 0.12;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${cat.c1}"/><stop offset="1" stop-color="${cat.c2}"/></linearGradient></defs>
      <rect width="100%" height="100%" fill="url(#g)"/>${circles}
      <g transform="translate(${w / 2 - s / 2} ${h / 2 - s / 2 - s * 0.3}) scale(${s / 24})" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${label === "Video" ? '<rect x="2" y="3" width="20" height="18" rx="3"/><path d="M7 3v18M17 3v18M2 9h5M17 9h5M2 15h5M17 15h5"/>' : '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4-4L5 21"/>'}</g>
      <text x="50%" y="${h / 2 + s * 0.85}" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="${s * 0.32}" font-weight="600" fill="#fff" fill-opacity=".85" letter-spacing="2">${label.toUpperCase()}</text>
    </svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
})();
