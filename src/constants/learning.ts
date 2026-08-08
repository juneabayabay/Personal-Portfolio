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
  chapter: {
    src: "/projects/bible-app/chapter.webp",
    alt: "Chapter reading view with verse text and reading controls",
    caption: "Reading view — chapter text with calm controls.",
  },
  plans: {
    src: "/projects/bible-app/plans.webp",
    alt: "Guided Bible reading plans list",
    caption: "Plans — day-by-day tracks for steady reading.",
  },
  prayer: {
    src: "/projects/bible-app/prayer.webp",
    alt: "Prayer wall for sharing and viewing requests",
    caption: "Prayer wall — share requests and follow along.",
  },
} as const;

/**
 * Case studies hold real UI screenshots inside the article.
 * Project + blog cards use stylized AI covers as the frontpage tease.
 */
export const learningPosts: LearningPost[] = [
  {
    slug: "bible-app-study",
    title: "Bible App — Reading Experience Study",
    excerpt:
      "A calm public Bible reader: search, chapters, plans, devotionals, and prayer—shipped to learn Astro and real product flow.",
    image: "/blog/bible-cover-v3.webp",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-08",
    readTimeMinutes: 6,
    kind: "case-study",
    url: "/blog/bible-app-study",
    content: {
      intro:
        "Bible App is a personal learning project: a public web reader for Scripture with search, chapter reading, plans, devotionals, a prayer wall, and light progress tracking.",
      stack: [
        "Astro",
        "TypeScript",
        "Alpine.js",
        "Tailwind CSS",
        "Supabase",
        "Vercel",
      ],
      interviewPitch:
        "I built a Bible reading web app so people can search verses, open any chapter, follow a plan, read devotionals, and use a prayer wall—without a noisy dashboard. Astro + TypeScript + Alpine + Tailwind, Supabase where shared data is needed, deployed on Vercel. The hard part was keeping navigation calm while reading stayed distraction-free.",
      sections: [
        {
          heading: "Problem",
          paragraphs: [
            "I wanted one calm place to read Scripture on the web—find a verse, continue a chapter, then optionally go deeper—without dumping every feature on the first screen.",
          ],
        },
        {
          heading: "Approach",
          paragraphs: [
            "Lead with reading. Everything else (plans, devotionals, prayer, streak) stays available but secondary.",
          ],
          bullets: [
            "Home → today’s verse and clear next steps",
            "Book picker by testament, then a focused chapter view",
            "Plans, devotionals, and prayer as optional paths",
            "Astro for content routes; Alpine for light UI state",
          ],
        },
        {
          heading: "Product walkthrough",
          paragraphs: [
            "Home starts the visit. Chapter reading stays primary. Plans and prayer support deeper use without crowding the reader.",
          ],
          figures: [
            bibleFigures.home,
            bibleFigures.chapter,
            bibleFigures.plans,
            bibleFigures.prayer,
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "The app is live end-to-end. Next improvements: clearer prayer empty states and lighter first-time onboarding—without cluttering the reading view.",
          ],
        },
      ],
      takeaways: [
        "Many features still need one primary path: open Scripture and read.",
        "Astro fit a content-heavy reader; Alpine covered light interactivity.",
        "Ship a public URL early—real use shows what the UI still needs.",
      ],
    },
  },
  {
    slug: "barnabas-system-study",
    title: "Barnabas Dental Clinic — Full System Study",
    excerpt:
      "Capstone clinic system: online booking, pencil GCash holds, and role-based dashboards that replaced paper and Messenger workflows.",
    image: "/blog/barnabas-cover-ai.webp",
    publishedAt: "2026-06-20",
    updatedAt: "2026-08-08",
    readTimeMinutes: 8,
    kind: "case-study",
    url: "/blog/barnabas-system-study",
    content: {
      intro:
        "Barnabas Dental Clinic Management System is my capstone: a full-stack web app for scheduling, patient records, billing, and four role-based dashboards.",
      stack: ["React", "Django", "PostgreSQL", "Aiven", "Render", "Vercel"],
      interviewPitch:
        "For my capstone I built Barnabas Dental’s clinic system. Paper and Messenger caused double-booking and lost records. I shipped React + Django + PostgreSQL with online booking, digital records, billing, and dashboards for patient, reception, dentist, and admin. The hard part was domain rules—procedure duration, no overlaps, and pencil bookings until GCash is verified. That taught me to encode clinic process in the backend, not only the UI.",
      sections: [
        {
          heading: "Problem",
          paragraphs: [
            "Appointments, patient details, and billing lived on paper and in chat. Schedules conflicted, follow-ups got lost, and staff lacked one shared source of truth.",
          ],
        },
        {
          heading: "Approach",
          paragraphs: [
            "One platform for the full clinic loop. Each role only sees the tools it needs.",
          ],
          bullets: [
            "Public site with booking and login",
            "Duration-aware scheduling with overlap checks",
            "Pencil bookings until GCash is verified",
            "Waiting list, billing, notifications, digital records",
            "Dashboards: patient, receptionist, dentist, admin",
          ],
        },
        {
          heading: "Key challenge — scheduling & payment holds",
          paragraphs: [
            "Procedures vary in length, so the backend blocks overlapping slots. Patients often pay later via GCash: a pencil booking holds the time until reception confirms payment. Waiting lists capture demand when the calendar is full.",
          ],
        },
        {
          heading: "Product walkthrough",
          paragraphs: [
            "Patients book from the public site and manage visits in the portal. Staff run schedule, records, and oversight from role-specific dashboards.",
          ],
          figures: [
            barnabasFigures.landing,
            barnabasFigures.patient,
            barnabasFigures.receptionist,
            barnabasFigures.admin,
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "Bookings, records, and billing live in one system. The lasting lesson was modeling real clinic rules in software so the UI stays trustworthy.",
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
    image: "/blog/cbc-cover-ai.webp",
    publishedAt: "2026-06-28",
    updatedAt: "2026-08-08",
    readTimeMinutes: 6,
    kind: "case-study",
    url: "/blog/cbc-system-study",
    content: {
      intro:
        "CBC Church Management System is a staff portal I built as a client learning project—login, roles, and one place for church records.",
      stack: ["React", "Django REST", "PostgreSQL", "Neon", "Render", "Vercel"],
      interviewPitch:
        "I built a staff portal for Cainta Baptist Church so records weren’t scattered across chat and spreadsheets. Staff sign in with JWT auth, land on a dashboard matched to their role, and manage members, families, events, attendance, and notices. React, Django REST, PostgreSQL on Neon; API on Render; frontend on Vercel.",
      sections: [
        {
          heading: "Problem",
          paragraphs: [
            "Church data lived in informal channels. Staff needed a shared system with clear permissions—volunteers should not get admin access.",
          ],
        },
        {
          heading: "Approach",
          paragraphs: [
            "Authenticate first, then show only the screens each role needs.",
          ],
          bullets: [
            "JWT staff sign-in",
            "Roles: Admin, Pastor, Staff, Volunteer",
            "CRUD for members, families, events, attendance, notices",
            "Admin tools for staff accounts",
          ],
        },
        {
          heading: "Product walkthrough",
          paragraphs: [
            "Sign-in opens the portal. Admins see full operations and accounts; volunteers get a scoped home for records and attendance.",
          ],
          figures: [
            cbcFigures.login,
            cbcFigures.admin,
            cbcFigures.volunteer,
            cbcFigures.accounts,
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "Staff can sign in, work from the right dashboard, and keep church records in one place. Permissions design mattered as much as the forms.",
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
      "Visitor-first church site: service times, directions, giving, and contact—so first-time guests know what to do next.",
    image: "/blog/church-cover-v3.webp",
    publishedAt: "2026-07-05",
    updatedAt: "2026-08-08",
    readTimeMinutes: 4,
    kind: "case-study",
    url: "/blog/cainta-church-website-study",
    content: {
      intro:
        "The Cainta Baptist Church website is a public, visitor-focused site—Sunday times, location, giving, and contact without digging through menus.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      interviewPitch:
        "I built the public website for Cainta Baptist Church so first-time visitors can quickly see service times, location, giving, and contact. Clean Next.js site focused on guest clarity—not an admin tool.",
      sections: [
        {
          heading: "Problem",
          paragraphs: [
            "First-time guests needed obvious next steps: when to come, how to get there, how to give, and how to reach the church—without clutter.",
          ],
        },
        {
          heading: "Approach",
          paragraphs: [
            "Lead with atmosphere and practical CTAs. Keep visitor pages separate from staff tools like the CBC portal.",
          ],
          bullets: [
            "Clear Sunday and location actions",
            "Mobile-friendly layout",
            "Straightforward giving and contact paths",
          ],
        },
        {
          heading: "Product walkthrough",
          paragraphs: [
            "The homepage leads with welcome content and next steps so guests aren’t lost in secondary pages.",
          ],
          figures: [churchFigures.preview],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "Visitors get a clear path for Sunday, directions, giving, and contact. The site stays simple on purpose.",
          ],
        },
      ],
      takeaways: [
        "Public church sites succeed when the next action is obvious.",
        "Keep visitor pages separate from staff tools.",
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
