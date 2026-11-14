# Chasia — Achievements Website

Live site: https://chasia.my.id/

A static website (plain HTML/CSS/JS, no build step) showing Chasia Pulungan’s achievements and activities.

Structure follows `Sitemap_Chasia_Profile_Website.xlsx` (see `docs/CONTENT_AUDIT.md`):

- `index.html`: home page with welcome message, optional reel video, the 5 sections, highlights, a searchable list of all pages, year-by-year journey, and contact
- `section.html?s=<section>`: one page per main section (Academics, Service, Athletics, Arts & Music, Interests), with intro text and the sub-sections (e.g. `section.html?s=academics#debate`)
- `activity.html?id=<page-id>`: one page per item in the sitemap, with the story, highlights, links, and a photo/video gallery with a full-screen viewer

## Editing content

All content lives in **`assets/js/data.js`**. You can change text, add activities or add media there without touching any other file.

### Adding photos and videos
1. Put the files in `assets/media/<activity-id>/` (e.g. `assets/media/burning-borneo/01.jpg`).
2. In `data.js`, fill that activity’s `gallery` array:
   ```js
   gallery: [
     { type: "image",   src: "assets/media/burning-borneo/01.jpg", caption: "The finished painting" },
     { type: "video",   src: "assets/media/burning-borneo/process.mp4", poster: "assets/media/burning-borneo/poster.jpg", caption: "Process" },
     { type: "youtube", id: "YOUTUBE_VIDEO_ID", caption: "Exhibition" }
   ]
   ```
3. Optional: `cover: "assets/media/<id>/cover.jpg"` to use a photo on the card and the page header.

While a gallery is empty, the page shows styled placeholder tiles.

Tip: resize photos to about 2000px on the longest side (JPG/WebP) so pages load quickly.

### Portrait
Save a photo as `assets/img/portrait.jpg` and set `portrait: "assets/img/portrait.jpg"` in `SITE`.

### External links and lists
Add `links: [{ label, url }]` for Instagram/YouTube/document links, and `list: [{ title, text }]` for destinations, classes or books. Set `needsInfo: true` to show a “more details coming soon” note.

### Reel video on the home page
Set `reel: "assets/media/reel/chasia-reel.mp4"` or `reelYoutube: "VIDEO_ID"` in `SITE`.

### Featured highlights
Set `featured: true` (and optionally `stat: { value, label }`) on an activity to show it in the “Highlights” section. The layout is designed for six featured items.

## Running locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Publishing
Hosted on GitHub Pages (branch `main`, root folder) with the custom domain in `CNAME`. DNS for chasia.my.id: four A records pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153.
