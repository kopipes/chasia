# Chasia — Achievements Website

Live site: https://kopipes.github.io/chasia/

A static website (plain HTML/CSS/JS, no build step) showing Chasia Pulungan’s achievements and activities.

- `index.html`: home page with hero, highlights, areas, a searchable and filterable achievements grid, a year-by-year journey, and contact
- `activity.html?id=<activity-id>`: one detail page per activity, with the story, highlights, an "at a glance" card, and a photo/video gallery with a full-screen viewer

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

### Featured highlights
Set `featured: true` (and optionally `stat: { value, label }`) on an activity to show it in the “Highlights” section. The layout is designed for six featured items.

## Running locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Publishing
The site works on any static host (GitHub Pages, Netlify, Vercel). For GitHub Pages: Settings → Pages → deploy from this branch, root folder.
