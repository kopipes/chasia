# Content Audit: Sitemap → Website

Source: `Sitemap_Chasia_Profile_Website.xlsx` (sheets **“to OmBob”**, with upload status and notes, and **“to Syaz”**, a clean copy of the structure), checked against `docs/Chasia List of Achievements.md`.

Branch: `claude/sitemap-v2`

> Names of family members and helpers from the spreadsheet's internal notes are left out on purpose, because this repository and website are public.

---

## 1. How the sitemap maps to the website

| Sitemap | Website |
|---|---|
| MAIN PAGE: Welcome Message | Home → **Welcome** section (`SITE.welcome` in `data.js`) |
| MAIN PAGE: Video? | Home → **Video** section. It stays hidden until `SITE.reel` (mp4) or `SITE.reelYoutube` is set |
| 1.0 – 5.0 (sections) + Intro Text | `section.html?s=<id>`: intro text, sticky sub-section menu, cards per sub-section |
| 1.1, 1.2 … (sub-sections) | Blocks on the section page (`section.html?s=academics#debate` etc.), also in the menu dropdowns |
| Leaf items (1.1.1 …) | `activity.html?id=<id>`: one page each with story, highlights, links, and a photo/video gallery |

**Totals:** 5 sections · 22 sub-sections · 56 pages.

| Section | Sub-sections (pages) |
|---|---|
| 1.0 Academics | 1.1 Coursework (4) · 1.2 Awards (4) · 1.3 Debate (4) · 1.4 Writing (4) · 1.5 Ethics of Fast Fashion (4) · 1.6 Entrepreneurship & Investment (2) |
| 2.0 Service | 2.1 School (3) · 2.2 Environment (3) · 2.3 Elderly Care Home (3) · 2.4 Islam (3) |
| 3.0 Athletics | 3.1 Soccer (3) · 3.2 Swimming (1) · 3.3 Taekwondo (1) |
| 4.0 Arts & Music | 4.1 Painting (3) · 4.2 Pottery (5) · 4.3 Batik Tulis (1) · 4.4 Music (2) |
| 5.0 Interests | 5.1 Travel & Nature (2) · 5.2 Cooking (1) · 5.3 Reading (1) · 5.4 Cinema (1) · 5.5 Amusement Parks (1) |

**Choices made where the sitemap left room:**
- Most leaf items in the sitemap get their own page. In **5.0 Interests**, the classes and destinations are listed inside one page each (Cooking, Reading, Cinema, Amusement Parks, Travel International, Travel Domestic), because each one is only a list of names and photos.
- **1.5 Ethics of Fast Fashion** keeps its four numbered steps (1.5.1–1.5.4) as four pages, in order: seminar → donation drive → YouTube → ACS recognition.

---

## 2. Differences between the two sheets (“to OmBob” vs “to Syaz”)

| Item | to OmBob | to Syaz | Used on the website |
|---|---|---|---|
| 1.4.3 Grade 6 Writing Sample | listed (3 files, uploaded) | **missing** | Included |
| 1.4 Writing item naming | “Grade 8 / 7 Writing Sample – Graded”, “Scanned Doc” | “Grade 8 / 7 Writing Sample”, “Writing Doc” | “… — Graded” |
| 1.6.2 Financial Technology Camp | Certificate | Certificate, **Camp Poster** | Both expected in the gallery |
| 2.2.2 Retail Green Rubric | Certificate | **Slides, Poster** | All three expected |
| 4.4 Piano | “???” | “Videos?” | Videos expected |
| 1.3 Debate (row) | “Videos – 2 files, uploaded” | (none) | Add the 2 debate videos to the WSC pages |

**Next step:** confirm which sheet is the final version. The website follows the more complete “to OmBob” sheet.

---

## 3. Discrepancies with the List of Achievements

| # | Topic | Sitemap says | Achievement list says | What the site does / to confirm |
|---|---|---|---|---|
| 1 | Grade 5 & 6 Top Student | “Top Student (**Top 10%**; of 70+ students)” | “Top Student (of 70+ students)” | Site says “Top 10% of 70+”. **Confirm**: was she *the* top student (rank 1) or one of the top 10%? Home page stat currently says “Top Student of 70+”. |
| 2 | WSC years | “2025 Regional”, “**2024 Global**, Bangkok”, “2024 Regional”, “2023 Regional” | Global Bangkok is under **2024–2025** | The Global Round normally comes *after* the regional round of the same season. If the 2024 Regional was in late 2024, Bangkok Global was probably in **2025**. **Confirm the year** before publishing it in titles (the site currently shows “2024 – 2025”). |
| 3 | WSC 2023 | “2023 WSC Regional, Jakarta” | Skittles Division, 2023–2024 | Site title includes “Skittles Division”. |
| 4 | Student Councillor (2023) | **missing** | listed | Mentioned inside 2.1.2 Head of Events and Projects. Add a 2.1.x page if wanted. |
| 5 | Football private coaching | **missing** | listed under Athletics | Mentioned inside 3.1 ACS Football Girls. |
| 6 | Pottery drink stirrers | **missing** | listed | Mentioned inside 4.2 Keychains and Figurines. |
| 7 | Pottery “figurines” | grouped with keychains (Present) | animal figurines are **2024–2025** | Page period set to “2024 – Present”. |
| 8 | Pottery “Cookie platters” | one item | “Crescent Cookies platter” + “Assorted snacks platter” | Both described on one page. |
| 9 | Fast Fashion | under **1.0 Academics** | under **Community Service** | Follows the sitemap (Academics). |
| 10 | Grade 8 | “Transcript/Report Card” | CA1 results only | Page shows CA1 results; add the full report card later. |
| 11 | New items | Writing samples, Primary Writing Competition, Retail Green Rubric, Carbon Credit, Batik Tulis, all of 5.0 Interests | **not in the list** | Pages created with general descriptions and marked **“more details coming soon”** where facts are missing (see section 4). |

---

## 4. Pages that still need information (text)

Each of these pages shows a small “More details about this page are coming soon” note (`needsInfo: true`).

| Page | What’s missing |
|---|---|
| 1.4.1 Grade 8 Writing Sample | The document (“to find doc”). Title/topic of the piece. |
| 1.4.4 Primary Writing Competition | Year, theme, what she wrote, any result. |
| 1.5.1 Seminar | The slides (“must find old document”); date, audience size. |
| 1.5.3 Raising Awareness on Social Media | The **YouTube link** for “Truth Behind Trends: The Ethics of Fast Fashion” (the title is in the sheet but the link is not). |
| 2.2.2 Retail Green Rubric | What the project was, who ran it, her role, the result. |
| 2.2.3 Carbon Credit | What the programme was, the organiser, what she learned/did. |
| 5.3 Reading | List of recent books (+ cover photos). |
| 5.4 Cinema | List of recent films (+ posters). |

Pages that would also benefit from one or two more facts (date, place or result):
1.6.1 (which competition results?), 2.2.1 (date of the event), 2.3.x (name of the care home, if it can be published), 3.x (any matches or tournaments), 4.3 Batik (where she learned it), 5.1 (which places in “Arab region”: Saudi Arabia, UAE, …?).

---

## 5. Photo & video status per page (from “to OmBob”)

✅ = files uploaded · ⏳ = still to collect · 🎬 = a video still needs to be made

| # | Page | Content type | Files | Status / to-do |
|---|---|---|---|---|
| 1.1.1 | Grade 8 | Report card | 1 | ✅ |
| 1.1.2 | Grade 7 | Report card | 2 | ✅ |
| 1.1.3 | Grade 6 | Report card | 1 | ✅ |
| 1.1.4 | Grade 5 | Report card | 1 | ✅ |
| 1.2.1 | Cambridge Primary Checkpoint | Results, photos, IG, certificates | 3 | ✅ IG link added to the page |
| 1.2.2 | Grade 6 Top Student | Photos | 2 | ✅ |
| 1.2.3 | Grade 6 Top Student – GP | Photos | 3 | ✅ |
| 1.2.4 | Grade 5 Top Student | Photos | 2 | ✅ |
| 1.3 | Debate (videos) | Videos | 2 | ✅ |
| 1.3.1 | 2025 WSC Regional | Certificates, photos, letter | 6 | ✅ |
| 1.3.2 | WSC Global, Bangkok | Certificates, photos | 6 | ✅ |
| 1.3.3 | 2024 WSC Regional | Certificates, photos | 5 | ✅ |
| 1.3.4 | 2023 WSC Regional | Certificates, photos | 5 | ✅ |
| 1.4.1 | Grade 8 Writing Sample | Scanned doc | – | ⏳ Find the document |
| 1.4.2 | Grade 7 Writing Sample | Scanned doc | 3 | ✅ |
| 1.4.3 | Grade 6 Writing Sample | Scanned doc | 3 | ✅ |
| 1.4.4 | Primary Writing Competition | Photos | 2 | ✅ |
| 1.5.1 | Seminar | Slides | – | ⏳ Find the old document |
| 1.5.2 | Donation Drive | Video, photos | – | ✅ “Evidence of Action” video |
| 1.5.3 | Social media | YouTube link | – | ⏳ Need the URL |
| 1.5.4 | Recognition by ACS | IG link | – | ✅ IG link added to the page |
| 1.6.1 | AC Investment & Entrepreneurship Club | Slides, docs | – | ⏳ Check with Chasia |
| 1.6.2 | Financial Technology Camp | Certificate (+ poster) | 1 | ✅ (poster ⏳) |
| 2.1.1 | Vice Captain | Photos, publication, certificate, poster | 5 | ✅ + ⏳ add the yearbook essay |
| 2.1.2 | Head of Events and Projects | Docs | 5 | ✅ |
| 2.1.3 | Paskibra conductor | Photos | 7 | ✅ + 🎬 video with a national song (check music licensing) |
| 2.2.1 | Waste Sorting Awareness | Slides, photos | – | ⏳ Prepare slides/posters (planned 27 Nov) |
| 2.2.2 | Retail Green Rubric | Certificate (slides, poster) | – | ⏳ Planned 25 Nov |
| 2.2.3 | Carbon Credit | Certificate | – | ⏳ Planned 26 Nov |
| 2.3.1 | Craft, music & technology | Photos | – | ⏳ Planned 28 Nov |
| 2.3.2 | Holiday seasons | Photos | – | ⏳ Planned 29 Nov |
| 2.3.3 | Companionship | Photos | – | ⏳ Photos from school (ACS lobby display) |
| 2.4.1 | Iftar Meal Box | – | – | ⏳ Planned 21 Nov (prepare & pack) |
| 2.4.2 | Ramadhan Hamper | – | – | ⏳ Planned 22 Nov (prepare & pack) |
| 2.4.3 | Friday’s Blessing Snack Box | – | – | ⏳ Planned 20 Nov (prepare & pack) |
| 3.1 | ACS Football Girls | ? | – | ⏳ Videos after exams (1 & 4 Dec) |
| 3.1 | French Football Academy | Photos | – | ⏳ Weekend photos (21 & 28 Nov) |
| 3.1 | Total Football School | Photos | 5 | ✅ |
| 3.2 | Swimming | Videos, photos | 7 | ✅ |
| 3.3 | Taekwondo | Videos, photos | – | ⏳ Look for old photos/videos (Nov 2023) |
| 4.1 | “Burning Borneo” | Videos, photos | 1 | ✅ + ⏳ more photos/videos |
| 4.1 | “Mother’s Love Doesn’t Fade” | Videos, photos | 2 + 12 | ✅ + 🎬 short video from 12 files |
| 4.1 | Painting collection | Photos | 4 | ✅ |
| 4.2 | Teapot and cups | Videos, photos | – | ✅ + 🎬 one video |
| 4.2 | Cookie platters | Videos, photos | – | ✅ + 🎬 one video |
| 4.2 | Keychains and figurines | Videos, photos | – | ✅ + 🎬 one video |
| 4.2 | Pitcher | Photos | 4 | ✅ + 🎬 one video |
| 4.2 | Pottery collection | Photos | – | ⏳ Take photos |
| 4.3 | Batik Tulis — Flowers | Videos, photos | 6 | ✅ + 🎬 edit the Sept 27, 2023 videos to landscape |
| 4.4 | Digital Music | Sound | – | ⏳ Record (planned 9 Dec) |
| 4.4 | Piano | Videos | – | ⏳ Record (planned 29 Nov) |
| 5.1.1 | Travel — International | Photos | – | US ✅ · others in progress |
| 5.1.2 | Travel — Domestic | Photos | 3 + 5 | Cisarua ✅, Jogja ✅ (need to select) · others ⏳ |
| 5.2 | Cooking | Photos | 4 | Maison Bleu ✅ (make a collage) · ABC Cooking ⏳ |
| 5.3 | Reading | Book covers | – | ⏳ List of recent reads |
| 5.4 | Cinema | Movie posters | – | ⏳ List of recent watches |
| 5.5 | Amusement Parks | Photos | – | Universal Studios Singapore ✅, Southbay Shore water park ✅ · others ⏳ |

**Count:** 34 pages have at least some files uploaded. 22 pages are still waiting for media. 10 videos still need to be edited.

---

## 6. Things to decide before going live

1. **Report cards and transcripts (1.1.x) on a public website.** These contain grades and possibly student ID numbers. Consider blurring IDs, or showing only a summary or the first page.
2. **Certificates.** Check for personal details (date of birth, ID numbers) before uploading.
3. **Other children in photos and videos** (debate teams, donation video, school events). Ask their families for permission, or crop/blur faces.
4. **Instagram links.** The tracking parameters were removed from the two Instagram URLs. Both are linked, not embedded, because Instagram embeds need its script and are slow.
5. **Music in videos.** The Paskibra video idea uses a national song. Check that the recording you use is free to publish online.
6. **Contact.** Only Chasia’s email is shown. Phone numbers are not published.

---

## 7. How to add the uploaded files

For each page, put the files in `assets/media/<page-id>/` and list them in that page's `gallery` in `assets/js/data.js`. The page IDs are in `data.js`, for example `cambridge-checkpoint`, `wsc-2024-global`, `vice-captain`. Large videos are better uploaded to YouTube and added as `{ type: "youtube", id: "…" }`.
