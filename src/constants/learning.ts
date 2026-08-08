export interface LearningFigure {
  src: string;
  alt: string;
  caption: string;
}

export interface LearningSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  figures?: LearningFigure[];
}

export interface LearningPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  readTimeMinutes: number;
  kind?: "case-study" | "note";
  url?: string;
  content?: {
    intro: string;
    stack?: string[];
    /** ~2 min interview version of the story */
    interviewPitch?: string;
    sections: LearningSection[];
    takeaways?: string[];
  };
}

export const learningContent = {
  title: "Blogs",
  viewAllHref: "",
} as const;

const barnabasFigures = {
  landing: {
    src: "/projects/barnabas-dental-clinic/landing.webp",
    alt: "Barnabas Dental public homepage with booking and patient login",
    caption: "Public homepage — booking and login without Messenger.",
  },
  patient: {
    src: "/projects/barnabas-dental-clinic/patient-dashboard.webp",
    alt: "Patient portal showing appointments, balance, and clinic policy",
    caption: "Patient portal — visits, billing status, and payment policy.",
  },
  receptionist: {
    src: "/projects/barnabas-dental-clinic/receptionist-dashboard.webp",
    alt: "Receptionist dashboard for scheduling and payment checks",
    caption: "Reception — schedule, waiting list, and GCash verification.",
  },
  dentist: {
    src: "/projects/barnabas-dental-clinic/dentist-dashboard.webp",
    alt: "Dentist dashboard with daily schedule and patient records",
    caption: "Dentist view — today’s schedule and clinical records.",
  },
  admin: {
    src: "/projects/barnabas-dental-clinic/admin-dashboard.webp",
    alt: "Admin dashboard with clinic metrics and staff management",
    caption: "Admin — clinic metrics, revenue, and staff accounts.",
  },
} as const;

const cbcFigures = {
  login: {
    src: "/projects/cbc-church-management/login.webp",
    alt: "CBC staff portal sign-in screen",
    caption: "Staff sign-in — authorized access to the CBC portal.",
  },
  admin: {
    src: "/projects/cbc-church-management/dashboard-admin.webp",
    alt: "CBC admin home with members, families, events, and notices summary",
    caption: "Admin home — full access across church records.",
  },
  volunteer: {
    src: "/projects/cbc-church-management/dashboard-volunteer.webp",
    alt: "CBC volunteer home with scoped record and attendance access",
    caption: "Volunteer home — view records and mark attendance.",
  },
  accounts: {
    src: "/projects/cbc-church-management/accounts.webp",
    alt: "CBC accounts page with role legend and staff user table",
    caption: "Accounts — roles (Admin, Pastor, Staff, Volunteer) and logins.",
  },
} as const;

const churchFigures = {
  preview: {
    src: "/projects/cainta-baptist-church/preview.webp",
    alt: "Cainta Baptist Church public website homepage",
    caption: "Public homepage — visitors see services, location, and contact first.",
  },
} as const;

const bibleFigures = {
  home: {
    src: "/projects/bible-app/home.webp",
    alt: "Bible app home with today's verse and reading shortcuts",
    caption: "Home — today's verse, continue reading, and open Bible.",
  },
  books: {
    src: "/projects/bible-app/books.webp",
    alt: "Bible book picker with Old and New Testament categories",
    caption: "Books — pick a book by testament and category.",
  },
  chapter: {
    src: "/projects/bible-app/chapter.webp",
    alt: "Chapter reading view with verse text and reading controls",
    caption: "Reading view — chapter text, font size, compare, and listen.",
  },
  plans: {
    src: "/projects/bible-app/plans.webp",
    alt: "Guided Bible reading plans list",
    caption: "Plans — day-by-day tracks saved on this device.",
  },
  devotionals: {
    src: "/projects/bible-app/devotionals.webp",
    alt: "Devotionals themes for reflection",
    caption: "Devotionals — quiet themes to reflect on.",
  },
  prayer: {
    src: "/projects/bible-app/prayer.webp",
    alt: "Prayer wall for sharing and viewing requests",
    caption: "Prayer wall — share requests and follow along.",
  },
  journey: {
    src: "/projects/bible-app/journey.webp",
    alt: "Journey streak and reading progress screen",
    caption: "Journey — streak and progress for steady reading.",
  },
} as const;

/**
 * Case studies hold real UI screenshots.
 * Project cards on Work use stylized covers as the frontpage tease.
 */
export const learningPosts: LearningPost[] = [
  {
    slug: "bible-app-study",
    title: "Bible App — Reading Experience Study",
    excerpt:
      "A personal Bible web app: search, chapter reading, plans, devotionals, prayer wall, and simple progress—built to learn Astro and ship a public product.",
    image: "/blog/bible-cover-v3.webp",
    publishedAt: "2026-08-02",
    readTimeMinutes: 6,
    kind: "case-study",
    url: "/blog/bible-app-study",
    content: {
      intro:
        "Bible App is a personal learning project: a public web reader for Scripture with verse search, chapter reading, guided plans, devotionals, a prayer wall, and light progress tracking. I built it to practice shipping a multi-section product people can actually use—not just a demo page.",
      stack: [
        "Astro",
        "TypeScript",
        "Alpine.js",
        "Tailwind CSS",
        "Supabase",
        "Vercel",
      ],
      interviewPitch:
        "I built a Bible reading web app as a personal project. Visitors can search verses, open any book and chapter, follow day-by-day plans, read devotionals, use a prayer wall, and track a simple reading streak. Stack is Astro, TypeScript, Alpine.js, and Tailwind, with Supabase where shared data is needed, deployed on Vercel. The hard part was keeping navigation calm across many features while making reading itself stay distraction-free.",
      sections: [
        {
          heading: "The goal",
          paragraphs: [
            "I wanted one calm place to read Scripture on the web: find a verse quickly, continue a chapter, and optionally go deeper with plans, devotionals, or prayer—without turning the home screen into a dashboard of everything at once.",
          ],
        },
        {
          heading: "Home & entry points",
          paragraphs: [
            "The home screen leads with today's verse and clear next steps—continue reading or open the Bible—so visitors are not forced to hunt through menus first.",
          ],
          figures: [bibleFigures.home],
        },
        {
          heading: "Finding a book & reading",
          paragraphs: [
            "Books are grouped by testament and category. The chapter view focuses on readable text, with practical controls for font size, translation compare, and listen—kept secondary so the verse stays primary.",
          ],
          figures: [bibleFigures.books, bibleFigures.chapter],
        },
        {
          heading: "Plans, devotionals & prayer",
          paragraphs: [
            "Beyond single chapters, the app offers guided reading plans, quiet devotionals, and a prayer wall for shared requests. Progress and highlights stay light—often on-device—so the product stays useful without requiring a heavy account flow up front.",
          ],
          figures: [
            bibleFigures.plans,
            bibleFigures.devotionals,
            bibleFigures.prayer,
            bibleFigures.journey,
          ],
        },
        {
          heading: "What I built",
          paragraphs: [
            "A multi-route Astro site with client interactivity where it helps (search, UI state), plus shared pieces like prayer backed by Supabase when the feature needs more than local storage.",
          ],
          bullets: [
            "Verse search and book/chapter navigation",
            "Distraction-light chapter reading view",
            "Reading plans and devotionals",
            "Prayer wall and simple journey/streak tracking",
            "Deployed as a public site on Vercel",
          ],
        },
        {
          heading: "Results",
          paragraphs: [
            "The app is live and usable end-to-end: visitors can read, search, follow a plan, and explore prayer and devotionals in one place. What I would improve next is clearer empty states on the prayer wall and tighter onboarding for first-time readers—without adding clutter to the reading view.",
          ],
        },
      ],
      takeaways: [
        "Many features still need one calm primary path: open Scripture and read.",
        "Astro fit a content-heavy reader; Alpine covered light interactivity without a heavy SPA.",
        "Ship a public URL early—real usage reveals what the UI still needs.",
      ],
    },
  },
  {
    slug: "barnabas-system-study",
    title: "Barnabas Dental Clinic — Full System Study",
    excerpt:
      "Capstone clinic system: online booking, pencil GCash holds, and role-based dashboards that replaced paper and Messenger workflows.",
    image: "/blog/barnabas-cover.webp",
    publishedAt: "2026-06-20",
    updatedAt: "2026-08-08",
    readTimeMinutes: 10,
    kind: "case-study",
    url: "/blog/barnabas-system-study",
    content: {
      intro:
        "Barnabas Dental Clinic Management System is my capstone project: a full-stack web app for online scheduling, patient records, billing, and four role-based dashboards—built to replace paper charts and Facebook Messenger booking.",
      stack: ["React", "Django", "PostgreSQL", "Aiven", "Render", "Vercel"],
      interviewPitch:
        "For my capstone I built Barnabas Dental’s clinic system. Paper and Messenger made double-booking easy and records hard to find. I shipped React + Django + PostgreSQL with online booking, digital records, billing, and dashboards for patients, reception, dentists, and admin. The hard part was domain rules: procedure duration, no overlaps, and pencil bookings until reception verifies GCash. That taught me to encode clinic process in the backend—not only in the UI.",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Appointments, patient details, and billing lived on paper and in chat. Schedules conflicted, follow-ups got lost, and staff could not share one reliable source of truth.",
          ],
        },
        {
          heading: "What I built",
          paragraphs: [
            "One platform covers the clinic loop—from public booking to staff operations—while each role only sees the tools it needs.",
          ],
          bullets: [
            "Public site with clear booking and login paths",
            "Duration-aware scheduling with overlap checks",
            "Pencil bookings held until GCash is verified",
            "Waiting list when preferred slots are full",
            "Billing, notifications, and digital patient records",
            "Dashboards for patient, receptionist, dentist, and admin",
          ],
        },
        {
          heading: "Scheduling & payment holds",
          paragraphs: [
            "Procedures have different lengths, so the backend blocks overlapping slots. Patients often pay later via GCash: a pencil booking reserves time until reception confirms payment, then the visit becomes confirmed. Waiting lists capture demand when the calendar is full.",
          ],
        },
        {
          heading: "Patient path",
          paragraphs: [
            "Visitors learn about the clinic and book online. After sign-in, the patient portal shows upcoming visits, balances, and the pencil-booking / GCash policy—without needing staff in Messenger.",
          ],
          figures: [barnabasFigures.landing, barnabasFigures.patient],
        },
        {
          heading: "Staff operations",
          paragraphs: [
            "Reception runs the live schedule, waiting list, and payment checks. Dentists work from the daily schedule and records. Admins monitor clinic metrics and staff accounts.",
          ],
          figures: [
            barnabasFigures.receptionist,
            barnabasFigures.dentist,
            barnabasFigures.admin,
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "Bookings, records, and billing now live in one system. The main learning was modeling real clinic rules in software so the UI stays trustworthy under pressure.",
          ],
        },
      ],
      takeaways: [
        "Encode clinic rules (time, payment, roles) in the backend first.",
        "Separate dashboards beat one overloaded admin screen.",
        "Provisional payment holds match how the clinic already works.",
      ],
    },
  },
  {
    slug: "cbc-system-study",
    title: "CBC Church Management — System Study",
    excerpt:
      "Staff portal for Cainta Baptist Church: secure login, role-based dashboards, and CRUD for members, families, events, attendance, and notices.",
    image: "/blog/cbc-cover.webp",
    publishedAt: "2026-06-28",
    updatedAt: "2026-08-08",
    readTimeMinutes: 7,
    kind: "case-study",
    url: "/blog/cbc-system-study",
    content: {
      intro:
        "CBC Church Management System is a staff portal I built as a client learning project. It gives authorized church workers one place to manage members, families, events, attendance, and notices—with login and role-based access.",
      stack: ["React", "Django REST", "PostgreSQL", "Neon", "Render", "Vercel"],
      interviewPitch:
        "I built a staff portal for Cainta Baptist Church so records weren’t scattered across chat and spreadsheets. Staff sign in with JWT auth, land on a dashboard matched to their role, and manage members, families, events, attendance, and notices. Stack: React, Django REST, PostgreSQL on Neon, API on Render, frontend on Vercel.",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Church data lived in informal channels. Staff needed a shared system with clear permissions—volunteers should not get the same access as admins.",
          ],
        },
        {
          heading: "Access & roles",
          paragraphs: [
            "Staff authenticate on a dedicated sign-in screen. Roles (Admin, Pastor, Staff, Volunteer) control what each person can view or change after login.",
          ],
          figures: [cbcFigures.login],
        },
        {
          heading: "Dashboards by responsibility",
          paragraphs: [
            "Admins see a full operations overview and account tools. Volunteers get a scoped home focused on records and attendance—same product, different permission surface.",
          ],
          figures: [cbcFigures.admin, cbcFigures.volunteer],
        },
        {
          heading: "Accounts & church records",
          paragraphs: [
            "Admins create and manage staff logins from Accounts. Day-to-day work covers members, families, events, attendance, and notices through role-aware CRUD screens.",
          ],
          figures: [cbcFigures.accounts],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "Staff can sign in, work from the right dashboard, and keep church records in one place. The project reinforced that permissions design is as important as the forms themselves.",
          ],
        },
      ],
      takeaways: [
        "Role-based screens matter as much as CRUD.",
        "A clear staff login builds trust for internal tools.",
        "Neon + Render + Vercel works well for student client deploys.",
      ],
    },
  },
  {
    slug: "cainta-church-website-study",
    title: "Cainta Baptist Church Website — Case Study",
    excerpt:
      "Visitor-first church site: service times, directions, giving, and contact—built so first-time guests know what to do next.",
    image: "/blog/church-cover-v3.webp",
    publishedAt: "2026-07-05",
    readTimeMinutes: 4,
    kind: "case-study",
    url: "/blog/cainta-church-website-study",
    content: {
      intro:
        "The Cainta Baptist Church website is a public, visitor-focused site. Guests should find Sunday times, how to get there, giving options, and a clear contact path without digging through menus.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      interviewPitch:
        "I built the public website for Cainta Baptist Church so first-time visitors can quickly see service times, location, giving, and contact. It’s a clean Next.js site focused on clarity for guests—not an admin tool.",
      sections: [
        {
          heading: "Goal",
          paragraphs: [
            "Make the first visit to the site feel welcoming and practical: where to go on Sunday, how to reach the church, and how to give—without clutter.",
          ],
        },
        {
          heading: "What visitors see",
          paragraphs: [
            "The homepage leads with atmosphere and clear next steps—services, directions, and contact—so guests aren’t lost in secondary content.",
          ],
          figures: [churchFigures.preview],
        },
        {
          heading: "What I focused on",
          paragraphs: [
            "Responsive layout, simple CTAs, and copy written for people who may be visiting for the first time.",
          ],
          bullets: [
            "Clear Sunday and location CTAs",
            "Mobile-friendly pages",
            "Straightforward giving and contact paths",
          ],
        },
      ],
      takeaways: [
        "Public church sites succeed when the next action is obvious.",
        "Keep visitor pages separate from staff tools (like the CBC portal).",
      ],
    },
  },
];

export function getLearningPost(slug: string): LearningPost | undefined {
  return learningPosts.find((post) => post.slug === slug);
}

export function getPublishedLearningPosts(): LearningPost[] {
  return learningPosts.filter((post) => Boolean(post.url && post.content));
}
