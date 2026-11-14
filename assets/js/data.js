/* =============================================================
   CHASIA — SITE CONTENT  (structure follows Sitemap_Chasia_Profile_Website.xlsx)
   -------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.

   • SITE        → name, welcome message, portrait, contact, reel video
   • SECTIONS    → the 5 main menu sections (1.0 – 5.0) and their sub-sections
   • ACTIVITIES  → one entry = one page (activity.html?id=…), numbered as in the sitemap

   Adding photos / videos to a page:
     1. Put files in   assets/media/<activity-id>/
     2. Add entries to that activity's `gallery` array:
          { type: "image",   src: "assets/media/<id>/01.jpg", caption: "…" }
          { type: "video",   src: "assets/media/<id>/clip.mp4", poster: "assets/media/<id>/poster.jpg", caption: "…" }
          { type: "youtube", id: "YOUTUBE_VIDEO_ID", caption: "…" }
     3. Optional: `cover: "assets/media/<id>/cover.jpg"` for the card / page header.

   External links (Instagram, YouTube, documents) go in `links`:
          links: [{ label: "View on Instagram", url: "https://…" }]

   `needsInfo: true` shows a small "more details coming soon" note on the page.
   ============================================================= */

window.SITE = {
  name: "Chasia Pulungan",
  firstName: "Chasia",
  tagline: "Curious mind. Kind heart. Bold ideas.",
  intro:
    "A Grade 8 student in Jakarta who moves comfortably between a debate podium, a football pitch, a pottery wheel and a neighbourhood volunteer drive — and gives each one her full attention.",
  // MAIN PAGE — Welcome Message
  welcome: [
    "Welcome! I’m Chasia — a Grade 8 student at ACS Jakarta. This website is a home for the things I love doing and the people I’ve learned from along the way.",
    "You’ll find my school work and competitions, the community projects I care about, the sports I train for, the art and music I make, and the places, books and kitchens that keep me curious. Every page has the story behind it, plus photos and videos.",
    "Thank you for visiting — I hope you find something here that makes you smile.",
  ],
  // Put a photo at assets/img/portrait.jpg and set: portrait: "assets/img/portrait.jpg"
  portrait: "",
  // MAIN PAGE — Video? : e.g. reel: "assets/media/reel/chasia-reel.mp4"  (or a YouTube id: reelYoutube: "…")
  reel: "",
  reelYoutube: "",
  email: "chasia.pulungan@gmail.com",
  location: "Jakarta, Indonesia",
  school: "ACS Jakarta",
};

/* ---------------- 1.0 – 5.0 MAIN SECTIONS ---------------- */
window.SECTIONS = [
  {
    id: "academics", num: "1.0", name: "Academics", short: "Academics", icon: "cap", c1: "#2B44C9", c2: "#6F8DFF",
    tagline: "Learning that goes beyond the classroom.",
    intro: [
      "Chasia has been named Top Student of her grade twice, earned a perfect score on the Cambridge Primary Checkpoint, and carried consistent A* and A grades into secondary school.",
      "Her academic life doesn’t stop at the report card. She has debated and written her way to the World Scholar’s Cup Global Round, turned a Global Perspectives project on fast fashion into a real campaign, and explored business and investing through clubs, competitions and a fintech camp.",
    ],
    groups: [
      { id: "coursework", num: "1.1", name: "Coursework", icon: "book", intro: "Year-by-year results from Grade 5 to Grade 8." },
      { id: "awards", num: "1.2", name: "Awards", icon: "award", intro: "Academic recognitions from primary school." },
      { id: "debate", num: "1.3", name: "Debate", icon: "mic", intro: "Four seasons of the World Scholar’s Cup — from the Skittles Division to the Global Round." },
      { id: "writing", num: "1.4", name: "Writing", icon: "pen", intro: "Graded writing samples and competition work." },
      { id: "fast-fashion", num: "1.5", name: "Environment: Ethics of Fast Fashion", short: "Ethics of Fast Fashion", icon: "leaf", intro: "A Global Perspectives project that grew into a seminar, a donation drive, a video and school-wide recognition." },
      { id: "entrepreneurship", num: "1.6", name: "Entrepreneurship & Investment", icon: "trend", intro: "Business plans, investment research and pitching." },
    ],
  },
  {
    id: "service", num: "2.0", name: "Service", short: "Service", icon: "heart", c1: "#B8335F", c2: "#F27CA2",
    tagline: "Showing up for her school, her neighbours and the planet.",
    intro: [
      "Service is where Chasia’s leadership is most visible. At school she was elected Vice Captain, led events and projects for the Primary Student Council, and conducted the national anthem in front of more than 700 people.",
      "Outside school she organises environmental awareness in her neighbourhood, leads volunteer visits to an elderly care home, and helps prepare food and gifts for the community during Ramadhan and on Fridays.",
    ],
    groups: [
      { id: "school", num: "2.1", name: "School", icon: "flag", intro: "Student government and ceremonial leadership." },
      { id: "environment", num: "2.2", name: "Environment", icon: "leaf", intro: "Practical action for a cleaner neighbourhood and a greener economy." },
      { id: "elderly", num: "2.3", name: "Elderly Care Home", icon: "users", intro: "Three years of visits — from companionship to teaching technology." },
      { id: "islam", num: "2.4", name: "Islam", icon: "moon", intro: "Faith-based giving: Ramadhan and Friday blessings." },
    ],
  },
  {
    id: "athletics", num: "3.0", name: "Athletics", short: "Athletics", icon: "ball", c1: "#0B7F57", c2: "#3CC38C",
    tagline: "Training, teamwork and a lot of football.",
    intro: [
      "Football is Chasia’s main sport. She plays for the ACS Secondary Girls team, trains on weekends with an academy under the French Football Federation, and previously trained at a school inspired by Dutch Total Football — with one-on-one coaching in between.",
      "Before football took over, she swam for the ACS Primary team and earned her green belt in taekwondo.",
    ],
    groups: [
      { id: "soccer", num: "3.1", name: "Soccer", icon: "ball", intro: "School team, two academies and private coaching." },
      { id: "swimming", num: "3.2", name: "Swimming", icon: "waves", intro: "ACS Primary swimming team." },
      { id: "taekwondo", num: "3.3", name: "Taekwondo", icon: "zap", intro: "ACS Primary taekwondo club." },
    ],
  },
  {
    id: "arts", num: "4.0", name: "Arts & Music", short: "Arts & Music", icon: "palette", c1: "#6B35B8", c2: "#B47CF2",
    tagline: "Making things by hand — and by ear.",
    intro: [
      "Chasia paints on canvas, throws and hand-builds pottery, draws with wax in traditional batik tulis, and makes music on the piano and in digital software.",
      "Some of her work carries a message: “Burning Borneo” raises awareness and funds for communities affected by forest-fire haze, and “Mother’s Love Doesn’t Fade” is a portrait of family love painted for her grandmother.",
    ],
    groups: [
      { id: "painting", num: "4.1", name: "Painting", icon: "brush", intro: "Acrylic and oil on canvas." },
      { id: "pottery", num: "4.2", name: "Pottery", icon: "cup", intro: "Wheel-thrown and hand-built ceramics." },
      { id: "batik", num: "4.3", name: "“Batik Tulis”", short: "Batik Tulis", icon: "flower", intro: "Hand-drawn batik, the traditional way." },
      { id: "music", num: "4.4", name: "Music", icon: "music", intro: "Piano and digital music production." },
    ],
  },
  {
    id: "interests", num: "5.0", name: "Interests", short: "Interests", icon: "compass", c1: "#0C6585", c2: "#35B2D3",
    tagline: "The places, flavours and stories that keep her curious.",
    intro: [
      "Away from school, Chasia is happiest exploring — new countries and Indonesian islands, cooking classes, a good book, a great film, and the occasional roller coaster.",
      "These interests feed everything else: travel shapes her Global Perspectives work, cooking builds patience and precision, and reading and films give her ideas to debate and write about.",
    ],
    groups: [
      { id: "travel", num: "5.1", name: "Travel & Nature", icon: "globe", intro: "Abroad and across Indonesia." },
      { id: "cooking", num: "5.2", name: "Cooking", icon: "utensils", intro: "Cooking and baking classes." },
      { id: "reading", num: "5.3", name: "Reading", icon: "book", intro: "Recent reads." },
      { id: "cinema", num: "5.4", name: "Cinema", icon: "film", intro: "Recent watches." },
      { id: "parks", num: "5.5", name: "Amusement Parks", icon: "ticket", intro: "Theme parks and water parks." },
    ],
  },
];

/* ---------------- PAGES ---------------- */
window.ACTIVITIES = [
  /* =========================================================== 1.0 ACADEMICS */
  /* ---- 1.1 Coursework ---- */
  {
    id: "grade-8", num: "1.1.1", section: "academics", group: "coursework",
    title: "Grade 8", org: "ACS Jakarta — Secondary", period: "2026 – 2027 · Present", year: 2026,
    summary: "A grades in Math (84) and English (81) in the first continuous assessment, with a core subject average of 77.6.",
    description: [
      "Grade 8 is Chasia’s second year of secondary school at ACS Jakarta. In the first Continuous Assessment (CA1) of the year she maintained an A in both Mathematics and English — the two subjects she has kept at the top of her report card since primary school.",
      "Her core subject average for CA1 is 77.6. The full report card is available in the gallery below.",
    ],
    highlights: ["Mathematics: A (84)", "English: A (81)", "Core subject average: 77.6 (CA1)"],
    gallery: [],
  },
  {
    id: "grade-7", num: "1.1.2", section: "academics", group: "coursework",
    title: "Grade 7", org: "ACS Jakarta — Secondary", period: "2025 – 2026", year: 2025,
    stat: { value: "80.9", label: "core subject average" },
    summary: "A* and A grades in every subject in her first year of secondary school, with a core subject average of 80.9.",
    description: [
      "Moving up to secondary school brings more subjects, more teachers and higher expectations. Chasia met that step up by earning A* and A grades in every single subject during Grade 7.",
      "She finished the year with a core subject average of 80.9. Her Grade 7 report cards are available in the gallery below.",
    ],
    highlights: ["A* and A in all subjects", "Core subject average: 80.9"],
    gallery: [],
  },
  {
    id: "grade-6", num: "1.1.3", section: "academics", group: "coursework",
    title: "Grade 6", org: "ACS Jakarta — Primary", period: "2024 – 2025", year: 2024,
    summary: "Her final year of primary school — Top Student of the grade and a perfect Cambridge Checkpoint.",
    description: [
      "Grade 6 was Chasia’s final year of primary school, and her strongest yet. She was named Top Student of the grade (out of more than 70 students), was recognised as the Top Student in Global Perspectives, and finished the year with a perfect score on the Cambridge Primary Checkpoint.",
      "Her Grade 6 report card is available in the gallery below. The awards from this year each have their own page under Awards.",
    ],
    highlights: ["Top Student of 70+ students", "Top Student — Global Perspectives", "Cambridge Primary Checkpoint: 50/50 in all 3 subjects"],
    gallery: [],
  },
  {
    id: "grade-5", num: "1.1.4", section: "academics", group: "coursework",
    title: "Grade 5", org: "ACS Jakarta — Primary", period: "2023 – 2024", year: 2023,
    summary: "The year she was first named Top Student of her grade.",
    description: [
      "In Grade 5 Chasia was named Top Student of the grade, out of more than 70 students — a result she would repeat the following year.",
      "Her Grade 5 report card is available in the gallery below.",
    ],
    highlights: ["Top Student of 70+ students"],
    gallery: [],
  },

  /* ---- 1.2 Awards ---- */
  {
    id: "cambridge-checkpoint", num: "1.2.1", section: "academics", group: "awards",
    title: "Perfect Score on Cambridge Primary Checkpoint", org: "Cambridge Assessment International Education", period: "2024 – 2025", year: 2024,
    featured: true, stat: { value: "50/50", label: "on all three subjects" },
    summary: "A perfect 50 out of 50 in all three subjects, with Gold for Global Perspectives.",
    description: [
      "The Cambridge Primary Checkpoint is an international assessment taken at the end of primary school by students in Cambridge schools around the world. It assesses English, Mathematics and Science, and gives schools and families an external benchmark of how a student compares internationally.",
      "Chasia scored a perfect 50/50 in all three subjects. She was also awarded Gold for Global Perspectives, the subject in which she was named Top Student that same year.",
      "Her results, certificates and photos — along with the school’s Instagram post celebrating the result — are below.",
    ],
    highlights: ["50/50 on all 3 subjects", "Gold for Global Perspectives"],
    badges: ["Perfect Score", "Gold"],
    links: [{ label: "View the post on Instagram", url: "https://www.instagram.com/p/DMrqszVzM7r/" }],
    gallery: [],
  },
  {
    id: "grade-6-top-student", num: "1.2.2", section: "academics", group: "awards",
    title: "Grade 6 Top Student", org: "ACS Jakarta — Primary", period: "2024 – 2025", year: 2024,
    summary: "Top Student of Grade 6, in the top 10% of more than 70 students.",
    description: [
      "At the end of primary school, Chasia was recognised as one of the Top Students of Grade 6 — placing her in the top 10% of a grade of more than 70 students.",
      "It was the second year running that she earned the award, after being named a Top Student in Grade 5.",
    ],
    highlights: ["Top 10% of 70+ students", "Second consecutive year"],
    badges: ["Top Student"],
    gallery: [],
  },
  {
    id: "grade-6-top-gp", num: "1.2.3", section: "academics", group: "awards",
    title: "Grade 6 Top Student — Global Perspectives", org: "ACS Jakarta — Primary", period: "2024 – 2025", year: 2024,
    summary: "Top Student in Global Perspectives — the subject where she later earned Gold on the Cambridge Checkpoint.",
    description: [
      "Global Perspectives is the Cambridge subject that teaches students to research global issues, weigh different viewpoints, work in teams and reflect on what they learn. Chasia was named Top Student in the subject for Grade 6.",
      "The same skills led to real projects: with the ACS Global Perspectives team she organised a seminar and donation drive on the ethics of fast fashion, and she earned Gold for Global Perspectives on the Cambridge Primary Checkpoint.",
    ],
    highlights: ["Top Student — Global Perspectives", "Gold for GP on Cambridge Checkpoint"],
    badges: ["Top Student"],
    gallery: [],
  },
  {
    id: "grade-5-top-student", num: "1.2.4", section: "academics", group: "awards",
    title: "Grade 5 Top Student", org: "ACS Jakarta — Primary", period: "2023 – 2024", year: 2023,
    summary: "Top Student of Grade 5, in the top 10% of more than 70 students.",
    description: [
      "In Grade 5 Chasia was named one of the Top Students of the grade — in the top 10% of more than 70 students.",
      "It was the first of two consecutive Top Student awards.",
    ],
    highlights: ["Top 10% of 70+ students"],
    badges: ["Top Student"],
    gallery: [],
  },

  /* ---- 1.3 Debate ---- */
  {
    id: "wsc-2025-regional", num: "1.3.1", section: "academics", group: "debate",
    title: "World Scholar’s Cup — 2025 Regional Round, Jakarta", org: "World Scholar’s Cup · Junior Division", location: "Jakarta, Indonesia", period: "2025 – 2026", year: 2025,
    summary: "Qualified for the Global Round for the second year running, with medals in Debate and Writing.",
    description: [
      "The World Scholar’s Cup is an international academic tournament in which teams of three compete in four events — Team Debate, Collaborative Writing, the Scholar’s Challenge (a multiple-choice test) and the Scholar’s Bowl (a team quiz) — all built around one shared theme that changes every year.",
      "Competing in the Junior Division at the 2025 Jakarta Regional Round, Chasia earned silver and gold medals in Debate, Collaborative Writing and Individual Writing, and qualified for the Global Round for the second consecutive year.",
      "Her certificates, photos and qualification letter are below.",
    ],
    highlights: ["Qualified for the Global Round", "Silver and gold medals in Debate, Collaborative and Individual Writing"],
    badges: ["Global Qualifier"],
    gallery: [],
  },
  {
    id: "wsc-2024-global", num: "1.3.2", section: "academics", group: "debate",
    title: "World Scholar’s Cup — Global Round, Bangkok", org: "World Scholar’s Cup · Junior Division", location: "Bangkok, Thailand", period: "2024 – 2025", year: 2024,
    featured: true, stat: { value: "1st", label: "Overall Team, Global Round" },
    summary: "First Place Trophy for Overall Team across all four categories — and a place in the Tournament Final Round at Yale.",
    description: [
      "The Global Rounds bring together the strongest teams from regional rounds around the world. At the Global Round in Bangkok, Chasia and her teammates won the First Place Trophy for Overall Team — the top team result across all four events combined.",
      "The result qualified them for the Tournament Final Round at Yale University in the United States, the final stage of the World Scholar’s Cup season.",
      "Individually, Chasia earned silver and gold medals in Individual Debate, Team Debate and as a Challenge Scholar.",
    ],
    highlights: [
      "First Place Trophy — Overall Team, across all four categories",
      "Qualified for the Tournament Final Round at Yale University, USA",
      "Silver and gold medals in Individual Debate, Team Debate and Challenge Scholar",
    ],
    badges: ["1st Place", "Yale Qualifier"],
    gallery: [],
  },
  {
    id: "wsc-2024-regional", num: "1.3.3", section: "academics", group: "debate",
    title: "World Scholar’s Cup — 2024 Regional Round, Jakarta", org: "World Scholar’s Cup · Junior Division", location: "Jakarta, Indonesia", period: "2024 – 2025", year: 2024,
    summary: "Three team trophies and medals in all four events — the round that earned her first ticket to the Global Round.",
    description: [
      "Chasia’s first season in the Junior Division started strongly at the Jakarta Regional Round. Her team took home three trophies: Third Place in Writing, Fourth Place Overall across all four categories, and Fifth Place in the Scholar’s Challenge.",
      "She also won silver and gold medals in Debate, Writing, the Scholar’s Bowl and the Scholar’s Challenge, and qualified for the Global Round in Bangkok.",
    ],
    highlights: [
      "Third Place Trophy — Writing Team",
      "Fourth Place Trophy — Overall Team, across all four categories",
      "Fifth Place Trophy — Challenge Team",
      "Silver and gold medals in Debate, Writing, Bowl and Challenge Scholar",
    ],
    badges: ["3 Trophies"],
    gallery: [],
  },
  {
    id: "wsc-2023-regional", num: "1.3.4", section: "academics", group: "debate",
    title: "World Scholar’s Cup — 2023 Regional Round, Jakarta", org: "World Scholar’s Cup · Skittles Division", location: "Jakarta, Indonesia", period: "2023 – 2024", year: 2023,
    summary: "Her first World Scholar’s Cup: Top School Scholar for ACS Jakarta, with gold in Debate and Subject.",
    description: [
      "The Skittles Division is the World Scholar’s Cup’s division for younger scholars. Competing in her first tournament at the Jakarta Regional Round, Chasia was named Top School Scholar for ACS Jakarta — the highest-scoring student from her school.",
      "She won gold medals in Debate and in a subject event, and a silver medal in Team Debate — the start of a four-season run in the competition.",
    ],
    highlights: ["Top School Scholar — ACS Jakarta", "Gold medals in Debate and Subject", "Silver medal in Team Debate"],
    badges: ["Top School Scholar"],
    gallery: [],
  },

  /* ---- 1.4 Writing ---- */
  {
    id: "writing-grade-8", num: "1.4.1", section: "academics", group: "writing",
    title: "Grade 8 Writing Sample — Graded", org: "ACS Jakarta — Secondary", period: "2026 – 2027", year: 2026, needsInfo: true,
    summary: "A graded piece of writing from Grade 8.",
    description: [
      "A graded writing assignment from Chasia’s Grade 8 English coursework, shown with her teacher’s marks and feedback.",
      "The scanned document will be added here soon.",
    ],
    gallery: [],
  },
  {
    id: "writing-grade-7", num: "1.4.2", section: "academics", group: "writing",
    title: "Grade 7 Writing Sample — Graded", org: "ACS Jakarta — Secondary", period: "2025 – 2026", year: 2025,
    summary: "A graded piece of writing from Grade 7, with teacher feedback.",
    description: [
      "A graded writing assignment from Chasia’s first year of secondary school, shown with her teacher’s marks and feedback.",
      "Writing is one of the threads that runs through her work — from Collaborative and Individual Writing medals at the World Scholar’s Cup to the scripts and slides behind her community campaigns.",
    ],
    gallery: [],
  },
  {
    id: "writing-grade-6", num: "1.4.3", section: "academics", group: "writing",
    title: "Grade 6 Writing Sample — Graded", org: "ACS Jakarta — Primary", period: "2024 – 2025", year: 2024,
    summary: "A graded piece of writing from her final year of primary school.",
    description: [
      "A graded writing assignment from Grade 6, shown with her teacher’s marks and feedback.",
      "This was the same year her team took Third Place in Writing at the World Scholar’s Cup Jakarta Regional Round.",
    ],
    gallery: [],
  },
  {
    id: "primary-writing-competition", num: "1.4.4", section: "academics", group: "writing",
    title: "Primary Writing Competition", org: "ACS Jakarta — Primary", period: "Primary school", year: null, needsInfo: true,
    summary: "Taking part in the primary school writing competition.",
    description: [
      "Chasia took part in the primary school writing competition at ACS Jakarta. Photos from the competition are below; more details about the entry will be added soon.",
    ],
    gallery: [],
  },

  /* ---- 1.5 Environment: Ethics of Fast Fashion ---- */
  {
    id: "fast-fashion-seminar", num: "1.5.1", section: "academics", group: "fast-fashion",
    title: "Seminar: The Ethics of Fast Fashion", org: "ACS Global Perspectives team", period: "2025", year: 2025,
    featured: true, stat: { value: "4", label: "steps: seminar → donations → video → recognition" },
    summary: "A seminar explaining the hidden costs of cheap, fast-changing clothes — to people and to the planet.",
    description: [
      "Fast fashion is the business of producing trendy clothes very quickly and very cheaply. It makes clothing affordable, but it also creates huge amounts of textile waste, uses large amounts of water and energy, and often relies on low-paid garment workers.",
      "Together with the ACS Global Perspectives team, Chasia turned this research topic into action, starting with a seminar event on the ethics of fast fashion — what it costs, who pays, and what young people can do differently.",
      "The seminar was the first step of a four-part project: it was followed by a clothing donation drive, a video on social media, and recognition from the school.",
    ],
    highlights: ["Researched the social and environmental costs of fast fashion", "Seminar event", "First step of a four-part campaign"],
    needsInfo: true,
    gallery: [],
  },
  {
    id: "fast-fashion-donation", num: "1.5.2", section: "academics", group: "fast-fashion",
    title: "Donation Drive", org: "ACS Global Perspectives team", period: "2025", year: 2025,
    summary: "Turning awareness into action with a donation drive.",
    description: [
      "After the seminar, the team organised a donation drive to turn awareness into action.",
      "Chasia and two classmates recorded a video, “Evidence of Action: Seminar and Donation”, documenting the seminar and the donation drive from start to finish. The video and photos are below.",
    ],
    highlights: ["Donation drive", "“Evidence of Action” video documenting the project"],
    gallery: [],
  },
  {
    id: "fast-fashion-video", num: "1.5.3", section: "academics", group: "fast-fashion",
    title: "Raising Awareness on Social Media", org: "YouTube", period: "2025", year: 2025,
    summary: "“Truth Behind Trends: The Ethics of Fast Fashion” — a video to take the message beyond school.",
    description: [
      "To reach people beyond school, the project shared a YouTube video titled “Truth Behind Trends: The Ethics of Fast Fashion”, explaining the issue in a way anyone could share.",
    ],
    highlights: ["YouTube video: “Truth Behind Trends: The Ethics of Fast Fashion”"],
    needsInfo: true,
    gallery: [],
  },
  {
    id: "fast-fashion-recognition", num: "1.5.4", section: "academics", group: "fast-fashion",
    title: "Recognition by ACS", org: "ACS Jakarta", period: "2025", year: 2025,
    summary: "The project was featured by ACS Jakarta on Instagram.",
    description: [
      "ACS Jakarta recognised the Ethics of Fast Fashion project by featuring it on the school’s official Instagram account.",
    ],
    highlights: ["Featured on the ACS Jakarta Instagram"],
    links: [{ label: "Watch the reel on Instagram", url: "https://www.instagram.com/reel/DPD7uUGkofk/" }],
    gallery: [],
  },

  /* ---- 1.6 Entrepreneurship & Investment ---- */
  {
    id: "ac-investment-club", num: "1.6.1", section: "academics", group: "entrepreneurship",
    title: "AC Investment & Entrepreneurship Club", org: "ACS Jakarta · Co-Curricular Activity", period: "2025 – Present", year: 2025,
    role: "Active member · Applying for Treasury role", featured: true, stat: { value: "6", label: "business & investing projects" },
    summary: "Business plans, investor debates, case competitions and virtual trading — and applying for the club’s Treasury role.",
    description: [
      "In the Entrepreneurship and AC Investment club, Chasia learns how businesses are planned, funded and run — by actually doing it. She is an active member and is applying for the club’s Treasury role.",
      "For the school’s United Nations Day charity fair, she led a team of three to develop a business plan within a fixed budget. She has argued for and against business ideas in a Business Investor Debate, competed in a Business Case Competition, and presented a case study on an insurance company expanding into Southeast Asia.",
      "On the investing side she completed an investment research project, “Big Hero 6”, and uses Stockbit to practise virtual trading — learning how markets move without risking real money.",
    ],
    highlights: [
      "Led a team of 3 to build a business plan for the UN Day charity fair",
      "Business Investor Debate",
      "Business Case Competition",
      "Investment Research Project — “Big Hero 6”",
      "Virtual trading on Stockbit",
      "Case study: an insurance company expanding into Southeast Asia",
    ],
    badges: ["Team Lead"],
    gallery: [],
  },
  {
    id: "fintech-camp", num: "1.6.2", section: "academics", group: "entrepreneurship",
    title: "Financial Technology Camp", org: "Sekolah Pelita Harapan", location: "Jakarta, Indonesia", period: "2025", year: 2025,
    summary: "“Financial Technology for Young Moguls” — two weeks of fintech and entrepreneurship, ending with a team investment pitch.",
    description: [
      "Chasia completed “Financial Technology for Young Moguls”, a two-week summer camp at Sekolah Pelita Harapan for students aged 9 to 16. The programme focused on how technology is used in business, digital finance and entrepreneurship.",
      "Working in a team of five, she helped develop a business plan and presented it as an Investment Pitch at the end of the camp. Her certificate is below.",
    ],
    highlights: ["Two-week summer camp", "Technology, digital finance and entrepreneurship", "5-member team Investment Pitch"],
    gallery: [],
  },

  /* =========================================================== 2.0 SERVICE */
  /* ---- 2.1 School ---- */
  {
    id: "vice-captain", num: "2.1.1", section: "service", group: "school",
    title: "Student Government: Primary School Vice Captain", org: "Primary Student Council · ACS Jakarta", period: "2024", year: 2024,
    role: "Elected Vice Captain", badges: ["Elected"],
    summary: "Campaigned for School Captain and was elected Vice Captain — stepping in to lead whenever the Captain was away.",
    description: [
      "Chasia ran for School Captain of the primary school, preparing a campaign and speaking to students about what she would do in the role. She was elected School Vice Captain.",
      "As Vice Captain she took on the Captain’s responsibilities whenever the School Captain was absent — delivering public addresses at school events and making announcements to the whole primary school.",
      "Photos, the school publication, her certificate and campaign poster are below.",
    ],
    highlights: ["Campaigned for School Captain", "Elected School Vice Captain", "Delivered public addresses and announcements"],
    gallery: [],
  },
  {
    id: "head-of-events", num: "2.1.2", section: "service", group: "school",
    title: "Student Government: Head of Events and Projects", org: "Primary Student Council · ACS Jakarta", period: "2024", year: 2024,
    summary: "Planned and organised school events and special activity days with the Student Council.",
    description: [
      "As Head of Events and Projects, Chasia worked with the Primary Student Council Committee to plan and organise school events and special activity days — from the first idea to the day itself.",
      "It built on her earlier role as a Student Councillor (2023), where she set an example of positive behaviour for younger students and volunteered at school community-service events.",
    ],
    highlights: ["Planned school events and special activity days", "Worked with the Primary Student Council Committee", "Previously Student Councillor (2023)"],
    gallery: [],
  },
  {
    id: "paskibra-conductor", num: "2.1.3", section: "service", group: "school",
    title: "Paskibra: National Songs Conductor", org: "Independence Day Ceremony · ACS Jakarta", period: "2025", year: 2025,
    featured: true, stat: { value: "700+", label: "audience members" }, badges: ["Paskibra"],
    summary: "Conducted “Indonesia Raya” for 700+ students, parents and teachers, as part of the Independence Day flag-raising troop.",
    description: [
      "Paskibra (Pasukan Pengibar Bendera) is the flag-raising troop at the heart of every Indonesian Independence Day ceremony on 17 August. Members train for weeks to perform precise, perfectly synchronised marching drills.",
      "Chasia was selected for her school’s Paskibra troop, and was given the role of conductor: she led the national anthem “Indonesia Raya” and the national songs for a campus-wide audience of more than 700 primary and secondary students, parents and teachers.",
    ],
    highlights: ["Selected for the Paskibra flag-raising troop", "Conducted “Indonesia Raya” and national songs", "Audience of 700+"],
    gallery: [],
  },

  /* ---- 2.2 Environment ---- */
  {
    id: "waste-sorting", num: "2.2.1", section: "service", group: "environment",
    title: "Waste Sorting Awareness — “Pentingnya Pemilahan Sampah”", org: "Neighbourhood community", period: "2026 – Present", year: 2026,
    role: "Organiser", featured: true, stat: { value: "5", label: "streets of neighbours joined" },
    summary: "Organised a neighbourhood event on why — and how — to sort household waste, joined by neighbours from five streets.",
    description: [
      "When household rubbish is all mixed together, recycling and composting become much harder. Chasia organised a neighbourhood event called “Pentingnya Pemilahan Sampah” — The Importance of Sorting Waste — to show her neighbours how separating organic waste, recyclables and residual waste at home makes a real difference.",
      "The event was joined by neighbours from five streets. Slides, posters and photos from the event will be shown below.",
    ],
    highlights: ["Organised a neighbourhood awareness event", "Joined by neighbours from 5 streets", "Slides and posters on sorting waste at home"],
    gallery: [],
  },
  {
    id: "retail-green-rubric", num: "2.2.2", section: "service", group: "environment",
    title: "Retail Green Rubric", org: "Environment project", period: "2026", year: 2026, needsInfo: true,
    summary: "A project on how shops can be measured — and improved — for their environmental impact.",
    description: [
      "A rubric is a scoring guide. A “green rubric” for retail sets out clear criteria for how environmentally friendly a shop is — for example how it handles packaging, energy and waste.",
      "Full details of Chasia’s Retail Green Rubric project, with her certificate, slides and poster, will be added here soon.",
    ],
    gallery: [],
  },
  {
    id: "carbon-credit", num: "2.2.3", section: "service", group: "environment",
    title: "Carbon Credit", org: "Environment programme", period: "2026", year: 2026, needsInfo: true,
    summary: "Learning how carbon credits put a price on reducing emissions.",
    description: [
      "A carbon credit represents one tonne of carbon dioxide that has been reduced or removed from the atmosphere. Carbon credits are one of the tools used to fund forest protection and cleaner energy.",
      "Details of Chasia’s Carbon Credit programme and her certificate will be added here soon.",
    ],
    gallery: [],
  },

  /* ---- 2.3 Elderly Care Home ---- */
  {
    id: "elderly-tech", num: "2.3.1", section: "service", group: "elderly",
    title: "Craft & Music Appreciation; Use of Technology Devices", org: "Elderly Care Home", period: "2026 – Present", year: 2026,
    role: "Lead Volunteer",
    summary: "Leading regular visits: crafts, music — and teaching residents to use tablets and smartphones to stay in touch with family.",
    description: [
      "As Lead Volunteer, Chasia invites other volunteers and regularly visits an elderly care home. Together they help residents with crafts and music appreciation sessions.",
      "She also teaches residents how to use technology: checking the news on a tablet, and using a smartphone to send messages and take calls — so they can stay connected with their friends and family members.",
    ],
    highlights: ["Lead Volunteer — invites and organises other volunteers", "Crafts and music appreciation", "Teaching tablets and smartphones"],
    gallery: [],
  },
  {
    id: "elderly-holiday", num: "2.3.2", section: "service", group: "elderly",
    title: "Holiday Seasons", org: "Elderly Care Home", period: "2025", year: 2025,
    role: "Lead Volunteer",
    summary: "Helping residents write holiday cards to their friends and family.",
    description: [
      "Before the holiday seasons, Chasia visited the elderly care home to help residents write cards to their friends and family — so that no one was left out of the season’s greetings.",
    ],
    highlights: ["Holiday card-writing with residents"],
    gallery: [],
  },
  {
    id: "elderly-companionship", num: "2.3.3", section: "service", group: "elderly",
    title: "Companionship", org: "Elderly Care Home · with the Primary Student Council and Social Impact Society Club", period: "2024", year: 2024,
    summary: "Her first visits: chatting, singing and playing games with residents.",
    description: [
      "Chasia’s first visits to the elderly care home were with the Primary Student Council and the Social Impact Society Club. The students provided companionship to the residents by chatting, singing together, and playing card and board games.",
      "Those first visits grew into the lead volunteer role she holds today.",
    ],
    highlights: ["Chatting and singing with residents", "Card and board games", "With the Student Council and Social Impact Society Club"],
    gallery: [],
  },

  /* ---- 2.4 Islam ---- */
  {
    id: "ramadhan-iftar", num: "2.4.1", section: "service", group: "islam",
    title: "Annual Ramadhan Blessing — Iftar Meal Box", org: "Community initiative", period: "2026 – Present", year: 2026,
    role: "Coordinator",
    summary: "Preparing iftar meal boxes for breaking the fast, distributed to mosques in several areas.",
    description: [
      "During Ramadhan, Muslims fast from dawn until sunset and break the fast together at iftar. Sharing iftar with others is a cherished act of kindness.",
      "As coordinator, Chasia prepares iftar meal boxes — snacks, drinks and meals for breaking the fast — and distributes them to mosques in a number of areas.",
    ],
    highlights: ["Coordinator", "Iftar meal boxes", "Distributed to mosques in several areas"],
    gallery: [],
  },
  {
    id: "ramadhan-hamper", num: "2.4.2", section: "service", group: "islam",
    title: "Annual Ramadhan Blessing — Hamper", org: "Community initiative", period: "2025", year: 2025,
    role: "Volunteer",
    summary: "Ramadhan hampers with dates, prayer clothes, prayer mats and books.",
    description: [
      "Chasia helped prepare Ramadhan hampers containing dates, prayer clothes, a prayer mat and a book, and distributed them to neighbours, extended family and people in need.",
    ],
    highlights: ["Dates, prayer clothes, prayer mats and books", "For neighbours, family and those in need"],
    gallery: [],
  },
  {
    id: "friday-blessing", num: "2.4.3", section: "service", group: "islam",
    title: "Friday’s Blessing (Jum’at Barokah) — Snack Box", org: "Community initiative", period: "2024", year: 2024,
    role: "Volunteer",
    summary: "Snack boxes for worshippers after Friday midday prayer at the neighbourhood mosque.",
    description: [
      "Jum’at Barokah — “blessed Friday” — is a tradition of sharing food and kindness on Fridays. Chasia prepared bags of snacks and drinks and gave them to people who performed the midday Friday prayer at a nearby mosque.",
    ],
    highlights: ["Weekly on Fridays", "Snacks and drinks for worshippers"],
    gallery: [],
  },

  /* =========================================================== 3.0 ATHLETICS */
  {
    id: "acs-football-girls", num: "3.1", section: "athletics", group: "soccer",
    title: "ACS Football Girls", org: "ACS Jakarta · Co-Curricular Activity", period: "Present", year: 2026, role: "Secondary Girls team",
    summary: "Plays for the ACS Secondary Girls football team, with practice twice a week after school.",
    description: [
      "Chasia is a member of the ACS Football Secondary Girls team and trains with the team twice a week after school.",
      "Alongside her school team she has weekly one-on-one and small-group private coaching at home or at a nearby park, working on individual skills.",
    ],
    highlights: ["Secondary Girls team", "Practice twice weekly", "Plus weekly private coaching"],
    gallery: [],
  },
  {
    id: "french-football-academy", num: "3.1", section: "athletics", group: "soccer",
    title: "French Football Academy (3F)", org: "3F Soccer Club", period: "Present", year: 2026, role: "Club member",
    summary: "Weekend training at an official soccer school under the French Football Federation.",
    description: [
      "3F is an official soccer training school under the French Football Federation (FFF).",
      "Chasia is a member of the club and trains during weekend sessions.",
    ],
    highlights: ["Official training school under the French Football Federation", "Weekend sessions"],
    gallery: [],
  },
  {
    id: "total-football-school", num: "3.1", section: "athletics", group: "soccer",
    title: "Total Football School (TFS)", org: "TFS Soccer Club", period: "2025", year: 2025, role: "Club member",
    summary: "Weekend training at a football school inspired by Dutch Total Football.",
    description: [
      "“Total Football” is the Dutch philosophy in which every player can play in any position and the whole team attacks and defends together. TFS soccer club builds its training around that idea.",
      "Chasia was a member of TFS and trained during weekend sessions.",
    ],
    highlights: ["Dutch Total Football philosophy", "Weekend sessions"],
    gallery: [],
  },
  {
    id: "swimming", num: "3.2", section: "athletics", group: "swimming",
    title: "ACS Primary Swimming Team", org: "ACS Jakarta · Co-Curricular Activity", period: "2025", year: 2025, role: "Team member",
    summary: "Member of the primary swimming team, practising twice a week after school.",
    description: [
      "Chasia was a member of the ACS Primary swimming team and trained twice a week after school — building the stamina and discipline that carry over into her football.",
    ],
    highlights: ["Primary swimming team", "Training twice weekly"],
    gallery: [],
  },
  {
    id: "taekwondo", num: "3.3", section: "athletics", group: "taekwondo",
    title: "ACS Primary Taekwondo", org: "ACS Jakarta · Co-Curricular Activity", period: "2023 – 2024", year: 2023,
    badges: ["Green Belt"],
    summary: "Trained with the primary taekwondo club and earned her Green Belt.",
    description: [
      "Taekwondo is a Korean martial art known for its kicks, and for its focus on respect, self-control and perseverance. Students progress through coloured belts as they master new techniques.",
      "Chasia trained with the ACS Primary taekwondo club and earned her Green Belt.",
    ],
    highlights: ["Earned Green Belt"],
    gallery: [],
  },

  /* =========================================================== 4.0 ARTS & MUSIC */
  /* ---- 4.1 Painting ---- */
  {
    id: "burning-borneo", num: "4.1", section: "arts", group: "painting",
    title: "“Burning Borneo”", org: "Acrylic on canvas", period: "Present", year: 2026, featured: true,
    summary: "A painting to raise funds and awareness for communities affected by toxic haze from forest fires in Kalimantan.",
    description: [
      "Forest and peatland fires in Kalimantan send thick, toxic haze across the region, harming the health of local communities — especially children and the elderly.",
      "“Burning Borneo” is Chasia’s acrylic painting dedicated to raising awareness of the issue and raising funds for the people affected. ",
    ],
    highlights: ["Acrylic on canvas", "Awareness and fundraising for haze-affected communities"],
    gallery: [],
  },
  {
    id: "mothers-love", num: "4.1", section: "arts", group: "painting",
    title: "“Mother’s Love Doesn’t Fade”", org: "Oil on canvas", period: "Present", year: 2026,
    summary: "An oil painting of her father and uncle on graduation day, honouring their mother.",
    description: [
      "Chasia painted this oil portrait from a photograph taken on her father’s graduation day. It shows her father and his brother, and the love and gratitude they feel for their mother — Chasia’s grandmother — who now lives with dementia.",
      "The title is the message: memories may fade, but a mother’s love does not.",
    ],
    highlights: ["Oil on canvas", "Interpreted from a family photograph"],
    gallery: [],
  },
  {
    id: "painting-collection", num: "4.1", section: "arts", group: "painting",
    title: "Painting — Collection from the Past", org: "Acrylic on canvas", period: "2024 – 2025", year: 2024,
    summary: "Landscapes, still life, pop art pet portraits, sunset seascapes and flowers.",
    description: [
      "Before her recent pieces, Chasia explored a wide range of subjects and styles in acrylic: landscapes, a still life of oranges, colourful pop-art portraits of pets, sunset seascapes and floral still life.",
    ],
    highlights: ["Landscapes", "Oranges still life", "Pop art pet portraits", "Sunset seascapes", "Floral still life"],
    gallery: [],
  },

  /* ---- 4.2 Pottery ---- */
  {
    id: "teapot-cups", num: "4.2", section: "arts", group: "pottery",
    title: "Teapot and Cups", org: "Ceramics · electric and manual wheel", period: "Present", year: 2026,
    summary: "A matching teapot set thrown on the electric and manual wheel.",
    description: [
      "A teapot is one of the hardest things to make on the potter’s wheel: the body, lid, spout and handle are made separately and have to fit together — and pour without dripping.",
      "Chasia threw her teapot and cups using both the electric and the manual wheel.",
    ],
    highlights: ["Electric and manual wheel"],
    gallery: [],
  },
  {
    id: "cookie-platters", num: "4.2", section: "arts", group: "pottery",
    title: "Cookie Platters", org: "Ceramics · slabbing, hand-building and pinching", period: "Present", year: 2026,
    summary: "A crescent-cookie platter made by slabbing, and a snacks platter made by hand-building and pinching.",
    description: [
      "For her platters Chasia used hand-building techniques: a Crescent Cookies platter made by slabbing — rolling clay into flat sheets and shaping it — and an assorted snacks platter made with hand-building and pinching.",
    ],
    highlights: ["Crescent Cookies platter — slabbing", "Assorted snacks platter — hand-built and pinched"],
    gallery: [],
  },
  {
    id: "keychains-figurines", num: "4.2", section: "arts", group: "pottery",
    title: "Keychains and Figurines", org: "Ceramics · press-molding, carving, hand-building", period: "2024 – Present", year: 2026,
    summary: "Small ceramic pieces: carved keychains and hand-built animal figurines.",
    description: [
      "Small pieces need careful detail. Chasia made ceramic keychains using press-molding and carving, and a series of animal figurines using hand-building and pinching. She has also hand-built ceramic drink stirrers.",
    ],
    highlights: ["Keychains — press-molding and carving", "Animal figurines — hand-built and pinched", "Drink stirrers — hand-built"],
    gallery: [],
  },
  {
    id: "pitcher", num: "4.2", section: "arts", group: "pottery",
    title: "Pitcher", org: "Ceramics · manual wheel", period: "2024 – 2025", year: 2024,
    summary: "A pitcher thrown on the manual wheel.",
    description: [
      "Chasia threw this pitcher on the manual wheel, shaping the spout and attaching the handle by hand.",
    ],
    highlights: ["Manual wheel"],
    gallery: [],
  },
  {
    id: "pottery-collection", num: "4.2", section: "arts", group: "pottery",
    title: "Pottery — Collection from the Past", org: "Ceramics", period: "2024 – 2025", year: 2024,
    summary: "Her first pieces: a flower vase on the wheel and press-molded calligraphy tiles.",
    description: [
      "Chasia’s earlier ceramic work includes a flower vase thrown on the manual wheel and calligraphy and decorative tiles made with press-molding.",
    ],
    highlights: ["Flower vase — manual wheel", "Calligraphy and decorative tiles — press-molding"],
    gallery: [],
  },

  /* ---- 4.3 Batik Tulis ---- */
  {
    id: "batik-flowers", num: "4.3", section: "arts", group: "batik",
    title: "Batik Tulis — Flowers", org: "Hand-drawn batik", period: "2023", year: 2023,
    summary: "Flower motifs drawn in hot wax with a canting — the traditional way of making batik.",
    description: [
      "Batik tulis (“written batik”) is the traditional, fully hand-made form of Indonesian batik, recognised by UNESCO as part of the world’s intangible cultural heritage. The design is drawn onto cloth with hot wax using a small copper pen called a canting; the cloth is then dyed, and the wax keeps the drawn lines from taking the colour.",
      "Chasia made batik tulis pieces with flower motifs. Photos and videos of the process are below.",
    ],
    highlights: ["Hand-drawn with a canting and hot wax", "Flower motifs"],
    gallery: [],
  },

  /* ---- 4.4 Music ---- */
  {
    id: "digital-music", num: "4.4", section: "arts", group: "music",
    title: "Digital Music", org: "Self-directed", period: "Present", year: 2026,
    summary: "Producing electronic beats and learning digital music software.",
    description: [
      "Chasia develops beats in the electronic music genre and is learning a range of digital music software — building tracks layer by layer, from drums and bass to melody.",
      "Audio samples of her tracks will be added here.",
    ],
    highlights: ["Electronic music beats", "Digital music software"],
    gallery: [],
  },
  {
    id: "piano", num: "4.4", section: "arts", group: "music",
    title: "Piano", org: "The Resonanz Music Studio", period: "2024 – 2025", year: 2024,
    summary: "Weekly private coaching, with recitals at the neighbourhood community centre.",
    description: [
      "Chasia trained at The Resonanz Music Studio with weekly private coaching, and performed in recitals at the neighbourhood community centre.",
      "Videos of her playing will be added here.",
    ],
    highlights: ["Weekly private coaching", "Recitals at the community centre"],
    gallery: [],
  },

  /* =========================================================== 5.0 INTERESTS */
  {
    id: "travel-international", num: "5.1.1", section: "interests", group: "travel",
    title: "Travel — International", org: "Travel & Nature", period: "", year: null,
    summary: "From the Middle East and Türkiye to Egypt, Australia, Southeast Asia and the United States.",
    description: [
      "Travelling has shown Chasia how differently people live, eat, pray and celebrate — and how much they have in common. It feeds directly into her Global Perspectives work.",
      "Photos from each destination are below.",
    ],
    list: [
      { title: "Arab region", text: "" }, { title: "Türkiye", text: "" }, { title: "Egypt", text: "" }, { title: "Australia", text: "" },
      { title: "Singapore", text: "" }, { title: "Thailand", text: "" }, { title: "United States — California & Hawaii", text: "" },
    ],
    gallery: [],
  },
  {
    id: "travel-domestic", num: "5.1.2", section: "interests", group: "travel",
    title: "Travel — Domestic", org: "Travel & Nature", period: "", year: null,
    summary: "Exploring Indonesia: Bali, Lombok, Sumatera, Bandung and beyond.",
    description: [
      "Indonesia has more than 17,000 islands, and Chasia has been exploring them — from the beaches of Bali and Lombok to the highlands around Bandung and the hills of Cisarua.",
      "Photos from each destination are below.",
    ],
    list: [
      { title: "Bali", text: "" }, { title: "Lombok", text: "" }, { title: "Sumatera", text: "" }, { title: "Bandung", text: "" },
      { title: "Off Bandung", text: "" }, { title: "Sentul", text: "" }, { title: "Cisarua", text: "" }, { title: "Jogja", text: "" },
    ],
    gallery: [],
  },
  {
    id: "cooking", num: "5.2", section: "interests", group: "cooking",
    title: "Cooking", org: "Cooking & baking classes", period: "", year: null,
    summary: "Classes at Maison Bleu and ABC Cooking.",
    description: [
      "Cooking is chemistry you can eat. Chasia has taken classes at Maison Bleu and ABC Cooking, learning to follow — and then adapt — recipes.",
    ],
    list: [{ title: "Maison Bleu", text: "" }, { title: "ABC Cooking — Class 1", text: "" }, { title: "ABC Cooking — Class 2", text: "" }],
    gallery: [],
  },
  {
    id: "reading", num: "5.3", section: "interests", group: "reading",
    title: "Reading", org: "Recent readings", period: "", year: null, needsInfo: true,
    summary: "Books Chasia has been reading lately.",
    description: ["A list of Chasia’s recent reads, with their covers, will be added here soon."],
    list: [],
    gallery: [],
  },
  {
    id: "cinema", num: "5.4", section: "interests", group: "cinema",
    title: "Cinema", org: "Recent watches", period: "", year: null, needsInfo: true,
    summary: "Films Chasia has watched recently.",
    description: ["A list of Chasia’s recent favourite films, with their posters, will be added here soon."],
    list: [],
    gallery: [],
  },
  {
    id: "amusement-parks", num: "5.5", section: "interests", group: "parks",
    title: "Amusement Parks", org: "Theme parks & water parks", period: "", year: null,
    summary: "Roller coasters and water slides in Singapore, the United States and Bandung.",
    description: ["For the thrill of it: theme parks and water parks Chasia has visited."],
    list: [
      { title: "Universal Studios Singapore", text: "" },
      { title: "Six Flags California", text: "" },
      { title: "Six Flags New Jersey", text: "" },
      { title: "Water park — Southbay Shore, California", text: "" },
      { title: "Water park — Wahoo, Bandung", text: "" },
    ],
    gallery: [],
  },
];
