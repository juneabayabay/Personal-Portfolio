export type CapstoneViewCategory = "patient" | "staff";

export interface CapstoneScreenshot {
  src: string;
  alt: string;
  label: string;
  excerpt: string;
  detail: string;
  category: CapstoneViewCategory;
}

export const capstoneProject = {
  slug: "barnabas-dental-clinic",
  title: "Barnabas Dental Clinic Management System",
  badge: "Capstone",
  tagline: "Capstone clinic system",
  overview:
    "Scheduling, patient records, billing, and role-based dashboards—my capstone built to replace paper charts and Messenger booking.",
  problem:
    "The clinic used paper records and Facebook Messenger for appointments, patient info, and billing. That made scheduling harder and records slower to find.",
  solution: [
    "Online appointment scheduling",
    "Digital patient records",
    "Billing and payment tracking",
    "Waiting list management",
    "Email notifications",
    "Role-based dashboards for patients, receptionists, dentists, and administrators",
  ],
  role: [
    "Database design",
    "Backend API development",
    "Frontend development",
    "Authentication and authorization",
    "Appointment scheduling logic",
    "Billing module",
    "Testing and deployment",
  ],
  challenges:
    "Scheduling had to account for procedure length, avoid overlapping bookings, and support pencil booking until payment is confirmed.",
  results:
    "Staff and patients can manage appointments, records, and billing in one place instead of paper and Messenger.",
  githubUrl: "https://github.com/juneabayabay/Barnabas-Rebuild",
  liveUrl: "https://barnabas-dental.vercel.app/",
  technologies: [
    "React",
    "Django",
    "PostgreSQL",
    "Aiven",
    "Render",
    "Vercel",
  ] as const,
  featuredImage: {
    src: "/projects/barnabas-dental-clinic/cover-ai.webp",
    alt: "Barnabas Dental Clinic — stylized project cover",
  },
  caseStudyUrl: "/blog/barnabas-system-study",
  screenshots: [
    {
      src: "/projects/barnabas-dental-clinic/landing.webp",
      alt: "Barnabas Dental public homepage with booking and patient login",
      label: "Public landing page",
      excerpt: "Booking and login without Messenger.",
      detail:
        "Visitors see clinic messaging and can book or sign in from the public site.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/patient-dashboard.webp",
      alt: "Patient portal showing appointments, balance, and clinic policy",
      label: "Patient portal",
      excerpt: "Appointments, billing, and payment policy.",
      detail:
        "Patients track visits and balances, and review pencil-booking / GCash rules.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/receptionist-dashboard.webp",
      alt: "Receptionist dashboard for scheduling and payment checks",
      label: "Receptionist dashboard",
      excerpt: "Schedule, waiting list, and GCash checks.",
      detail:
        "Reception manages appointments, waiting lists, and payment verification.",
      category: "staff",
    },
    {
      src: "/projects/barnabas-dental-clinic/dentist-dashboard.webp",
      alt: "Dentist dashboard with daily schedule and patient records",
      label: "Dentist dashboard",
      excerpt: "Daily schedule and clinical records.",
      detail:
        "Dentists open today’s schedule, records, and approval workflows.",
      category: "staff",
    },
    {
      src: "/projects/barnabas-dental-clinic/admin-dashboard.webp",
      alt: "Admin dashboard with clinic metrics and staff management",
      label: "Admin dashboard",
      excerpt: "Metrics, accounts, and revenue overview.",
      detail:
        "Admins monitor clinic stats and manage staff accounts and roles.",
      category: "staff",
    },
  ] satisfies CapstoneScreenshot[],
} as const;

export const capstoneViewGroups = [
  { id: "patient" as const, title: "Patient experience", description: "Public-facing booking and patient portal." },
  { id: "staff" as const, title: "Staff dashboards", description: "Role-based tools for daily clinic operations." },
] as const;
