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

/**
 * Two posts only:
 * 1) Full Barnabas system study (all clinic detail lives here)
 * 2) Portfolio build note (this site)
 * Avoid a third Barnabas note — that was redundant.
 */
export const learningPosts: LearningPost[] = [
  {
    slug: "barnabas-system-study",
    title: "Barnabas Dental Clinic — Full System Study",
    excerpt:
      "One case study for the whole clinic system: problem, roles, scheduling, GCash pencil bookings, and the four dashboards.",
    image: barnabasFigures.landing.src,
    publishedAt: "2026-06-20",
    readTimeMinutes: 10,
    kind: "case-study",
    url: "/blog/barnabas-system-study",
    content: {
      intro:
        "Barnabas Dental Clinic Management System is my capstone: a full-stack web app that replaced paper records and Facebook Messenger booking with online scheduling, digital patient records, billing, and role-based dashboards for patients, receptionists, dentists, and administrators.",
      stack: ["React", "Node.js", "Express", "MySQL"],
      interviewPitch:
        "For my capstone I built a clinic management system for Barnabas Dental Clinic. Before, they used paper and Facebook Messenger for appointments and billing, so schedules conflicted and records were hard to find. I built a full-stack web app with React, Node, Express, and MySQL — online booking, patient records, billing, and four dashboards: patient, receptionist, dentist, and admin. The hardest part was scheduling: appointments need procedure length, can’t overlap, and we used pencil bookings until GCash is verified by the receptionist. Now staff and patients can manage bookings and billing in one system instead of chat. What I’d improve next is tighter payment automation and clearer audit logs — but the domain rules around time and payment were the real learning.",
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
    slug: "portfolio-with-nextjs",
    title: "Building This Portfolio with Next.js",
    excerpt:
      "How I set up this site with Next.js, TypeScript, and Tailwind — and what I’d change next time.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=360&fit=crop&crop=center&auto=format",
    publishedAt: "2026-07-01",
    readTimeMinutes: 5,
    kind: "note",
    url: "/blog/portfolio-with-nextjs",
    content: {
      intro:
        "I wanted a portfolio that felt finished — clear sections, mobile-safe layout, and a real contact path — not just a template with my name swapped in.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
      sections: [
        {
          heading: "Stack choices",
          paragraphs: [
            "Next.js (App Router), TypeScript, and Tailwind keep the site easy to ship and update. Copy and links live in config/constants so I can change content without hunting through JSX.",
          ],
          bullets: [
            "App Router for pages, metadata, and API routes",
            "TypeScript for safer refactors",
            "Tailwind tokens for the dark theme",
            "Three.js only as atmosphere — not the main message",
          ],
        },
        {
          heading: "What I focused on",
          paragraphs: [
            "Hero first: who I am and clear CTAs. Selected work teases Barnabas. The full system study lives in Build journal so Work stays clean and Notes hold the deep write-up.",
          ],
        },
        {
          heading: "What I’d do differently",
          paragraphs: [
            "Link the live demo or repo earlier. One strong case study page is enough — no need for multiple overlapping Barnabas posts.",
          ],
        },
      ],
      takeaways: [
        "Separate content from UI components.",
        "Ship contact + one deep project story.",
        "Teaser on Work, full study in the journal — not both as long pages.",
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
