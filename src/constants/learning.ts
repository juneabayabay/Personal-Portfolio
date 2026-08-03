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
    src: "/projects/barnabas-dental-clinic/landing.png",
    alt: "Barnabas Dental Clinic public landing page with online booking",
    caption: "Public landing — registration, booking, and clinic info.",
  },
  patient: {
    src: "/projects/barnabas-dental-clinic/patient-dashboard.png",
    alt: "Patient dashboard for appointments, billing, and clinic policies",
    caption: "Patient portal — appointments, balances, and payment policies.",
  },
  receptionist: {
    src: "/projects/barnabas-dental-clinic/receptionist-dashboard.png",
    alt: "Receptionist dashboard with scheduling and payment verification",
    caption: "Receptionist tools — schedule, waiting list, and payment checks.",
  },
  dentist: {
    src: "/projects/barnabas-dental-clinic/dentist-dashboard.png",
    alt: "Dentist dashboard with schedule and patient records",
    caption: "Dentist view — daily schedule, records, and approvals.",
  },
  admin: {
    src: "/projects/barnabas-dental-clinic/admin-dashboard.png",
    alt: "Admin dashboard with clinic-wide metrics and management tools",
    caption: "Admin overview — metrics, accounts, and roles.",
  },
} as const;

const cbcFigures = {
  login: {
    src: "/projects/cbc-church-management/login.png",
    alt: "CBC staff portal sign-in screen",
    caption: "Staff sign-in — secure login for authorized CBC accounts.",
  },
  admin: {
    src: "/projects/cbc-church-management/dashboard-admin.png",
    alt: "CBC admin dashboard overview",
    caption: "Admin dashboard — church ops overview and quick actions.",
  },
  volunteer: {
    src: "/projects/cbc-church-management/dashboard-volunteer.png",
    alt: "CBC volunteer dashboard",
    caption: "Volunteer view — role-scoped tools for day-to-day work.",
  },
  accounts: {
    src: "/projects/cbc-church-management/accounts.png",
    alt: "CBC account and staff management screen",
    caption: "Accounts — manage staff users and access.",
  },
  preview: {
    src: "/projects/cbc-church-management/preview.png",
    alt: "CBC church management system preview",
    caption: "System preview — members, families, events, and notices.",
  },
} as const;

const churchFigures = {
  preview: {
    src: "/projects/cainta-baptist-church/preview.jpg",
    alt: "Cainta Baptist Church public website homepage",
    caption: "Public homepage — visitors see services, location, and contact first.",
  },
} as const;

const bibleFigures = {
  home: {
    src: "/projects/bible-app/home.png",
    alt: "Bible app home with today's verse and reading shortcuts",
    caption: "Home — today's verse, continue reading, and open Bible.",
  },
  books: {
    src: "/projects/bible-app/books.png",
    alt: "Bible book picker with Old and New Testament categories",
    caption: "Books — pick a book by testament and category.",
  },
  chapter: {
    src: "/projects/bible-app/chapter.png",
    alt: "Chapter reading view with verse text and reading controls",
    caption: "Reading view — chapter text, font size, compare, and listen.",
  },
  plans: {
    src: "/projects/bible-app/plans.png",
    alt: "Guided Bible reading plans list",
    caption: "Plans — day-by-day tracks saved on this device.",
  },
  devotionals: {
    src: "/projects/bible-app/devotionals.png",
    alt: "Devotionals themes for reflection",
    caption: "Devotionals — quiet themes to reflect on.",
  },
  prayer: {
    src: "/projects/bible-app/prayer.png",
    alt: "Prayer wall for sharing and viewing requests",
    caption: "Prayer wall — share requests and follow along.",
  },
  journey: {
    src: "/projects/bible-app/journey.png",
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
    image: "/blog/bible-cover-v2.png",
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
      "One case study for the whole clinic system: problem, roles, scheduling, GCash pencil bookings, and the four dashboards.",
    image: "/blog/barnabas-cover.png",
    publishedAt: "2026-06-20",
    readTimeMinutes: 10,
    kind: "case-study",
    url: "/blog/barnabas-system-study",
    content: {
      intro:
        "Barnabas Dental Clinic Management System is my capstone: a full-stack web app that replaced paper records and Facebook Messenger booking with online scheduling, digital patient records, billing, and role-based dashboards for patients, receptionists, dentists, and administrators.",
      stack: ["React", "Django", "PostgreSQL", "Aiven", "Render", "Vercel"],
      interviewPitch:
        "For my capstone I built a clinic management system for Barnabas Dental Clinic. Before, they used paper and Facebook Messenger for appointments and billing, so schedules conflicted and records were hard to find. I built a full-stack web app with React, Django, and PostgreSQL — online booking, patient records, billing, and four dashboards: patient, receptionist, dentist, and admin. The hardest part was scheduling: appointments need procedure length, can’t overlap, and we used pencil bookings until GCash is verified by the receptionist. Now staff and patients can manage bookings and billing in one system instead of chat. Deployed on Vercel, Render, and Aiven. What I’d improve next is tighter payment automation and clearer audit logs — but the domain rules around time and payment were the real learning.",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "The clinic used paper records and Messenger for appointments, patient info, and billing. That made scheduling easy to conflict, records slow to find, and staff workflows dependent on chat threads instead of one shared system.",
          ],
        },
        {
          heading: "What the system does",
          paragraphs: [
            "One web platform covers the clinic loop — from public booking to staff operations and admin oversight.",
          ],
          bullets: [
            "Online appointment scheduling with procedure duration and overlap checks",
            "Digital patient records",
            "Billing and payment tracking (including GCash verification)",
            "Pencil / provisional bookings until payment is confirmed",
            "Waiting list when preferred slots are full",
            "Email notifications",
            "Role-based dashboards: patient, receptionist, dentist, admin",
          ],
        },
        {
          heading: "My role",
          paragraphs: [
            "I worked across the stack — from schema and APIs to the dashboards staff and patients actually use.",
          ],
          bullets: [
            "Database design",
            "Backend API development",
            "Frontend development",
            "Authentication and authorization",
            "Appointment scheduling logic",
            "Billing module",
            "Testing and deployment",
          ],
        },
        {
          heading: "Scheduling & pencil bookings (GCash)",
          paragraphs: [
            "Scheduling accounts for procedure length and blocks overlapping bookings. Patients often pay later via GCash, so a pencil booking holds the slot until reception verifies payment — then the booking becomes confirmed. Waiting lists keep demand when the preferred time is full.",
          ],
          bullets: [
            "Duration-aware appointment windows + overlap validation on the backend",
            "Pencil booking = provisional hold until payment is checked",
            "Receptionist queue for GCash proofs, outstanding bills, and follow-ups",
            "Waiting list when the calendar is full",
          ],
        },
        {
          heading: "Patient experience",
          paragraphs: [
            "Patients register, book visits, and review clinic hours without needing staff in Messenger. The portal shows upcoming visits, balances, notifications, and policies for pencil bookings and GCash.",
          ],
          figures: [barnabasFigures.landing, barnabasFigures.patient],
        },
        {
          heading: "Staff dashboards",
          paragraphs: [
            "Receptionists run the live schedule, waiting list, and payment checks. Dentists see today's schedule and records. Admins monitor clinic metrics, revenue, and staff accounts.",
          ],
          figures: [
            barnabasFigures.receptionist,
            barnabasFigures.dentist,
            barnabasFigures.admin,
          ],
        },
        {
          heading: "Results",
          paragraphs: [
            "Staff and patients manage appointments, records, and billing in one place instead of paper and Messenger. The software mirrors the clinic’s real process — then makes it searchable, role-aware, and harder to double-book.",
          ],
        },
      ],
      takeaways: [
        "Real clinic rules (time ranges, provisional payment, roles) drove the design.",
        "Four dashboards beat one bloated admin screen.",
        "Backend validation is what makes the booking UI trustworthy.",
      ],
    },
  },
  {
    slug: "cbc-system-study",
    title: "CBC Church Management — System Study",
    excerpt:
      "Staff portal for Cainta Baptist Church: login, role-based dashboards, members and families, events, attendance, and notices.",
    image: "/blog/cbc-cover.png",
    publishedAt: "2026-06-28",
    readTimeMinutes: 7,
    kind: "case-study",
    url: "/blog/cbc-system-study",
    content: {
      intro:
        "CBC Church Management System is a staff portal I built as a client learning project. It helps church staff manage members, families, events, attendance, and notices with login and role-based access—deployed with Neon, Render, and Vercel.",
      stack: ["React", "Django REST", "PostgreSQL", "Neon", "Render", "Vercel"],
      interviewPitch:
        "I built a church staff portal for Cainta Baptist Church. Staff sign in, work from role-aware dashboards, and manage members, families, events, attendance, and notices instead of scattering that work across chat and spreadsheets. Stack is React, Django REST, and PostgreSQL on Neon, with the API on Render and the frontend on Vercel.",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Church records lived across informal channels. Staff needed a single place to sign in, see the right screens for their role, and update members, families, events, and notices without losing track of attendance.",
          ],
        },
        {
          heading: "Sign-in & access",
          paragraphs: [
            "Authorized staff enter credentials on a dedicated portal. JWT login and role-aware screens keep volunteers and admins on the tools they need.",
          ],
          figures: [cbcFigures.login],
        },
        {
          heading: "Dashboards by role",
          paragraphs: [
            "Admins get an operations overview and account tools. Volunteers see a scoped dashboard for day-to-day church workflow.",
          ],
          figures: [cbcFigures.admin, cbcFigures.volunteer],
        },
        {
          heading: "Accounts & records",
          paragraphs: [
            "Staff accounts and church data sit behind the same portal—CRUD workflows for members, families, events, attendance, and notices.",
          ],
          figures: [cbcFigures.accounts, cbcFigures.preview],
        },
        {
          heading: "Results",
          paragraphs: [
            "Staff can sign in, work from the right dashboard, and keep church records in one system instead of chat threads and ad-hoc files.",
          ],
        },
      ],
      takeaways: [
        "Role-based screens matter as much as CRUD forms.",
        "A clear login experience sets trust for staff tools.",
        "Neon + Render + Vercel is a practical path for student client work.",
      ],
    },
  },
  {
    slug: "cainta-church-website-study",
    title: "Cainta Baptist Church Website — Case Study",
    excerpt:
      "Visitor-first church site: service times, directions, giving, and contact—built so first-time guests know what to do next.",
    image: "/blog/church-cover-v2.png",
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
