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
    src: "/projects/barnabas-dental-clinic/cover.webp",
    alt: "Barnabas Dental live homepage — care for your smile, made simple",
  },
  caseStudyUrl: "/blog/barnabas-system-study",
  screenshots: [
    {
      src: "/projects/barnabas-dental-clinic/landing.webp",
      alt: "Barnabas Dental live homepage with booking and patient login",
      label: "Public landing page",
      excerpt: "Live clinic site with booking and login CTAs.",
      detail:
        "Visitors see clinic care messaging, book online, or sign in — without relying on Messenger for basic info.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/services.webp",
      alt: "Barnabas Dental services section with preventive, restorative, and cosmetic care",
      label: "Services",
      excerpt: "Preventive, restorative, and cosmetic care listed clearly.",
      detail:
        "The public services section groups treatments so first-time visitors understand what the clinic offers.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/login.webp",
      alt: "Barnabas Dental Clinic patient sign-in screen",
      label: "Patient sign-in",
      excerpt: "Secure login into the patient portal.",
      detail:
        "Patients sign in with email and password to reach booking, appointments, and billing.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/patient-dashboard.webp",
      alt: "Patient dashboard for appointments, billing, and clinic policies",
      label: "Patient portal",
      excerpt: "Appointments, billing, notifications, and clinic policies.",
      detail:
        "Patients track upcoming visits, balances, and notifications, and review policies for pencil bookings and GCash payments.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/receptionist-dashboard.webp",
      alt: "Receptionist dashboard with scheduling and payment verification",
      label: "Receptionist dashboard",
      excerpt: "Scheduling, billing, and payment verification.",
      detail:
        "Receptionists manage appointments, waiting lists, GCash verification, outstanding bills, and pencil booking follow-ups.",
      category: "staff",
    },
    {
      src: "/projects/barnabas-dental-clinic/dentist-dashboard.webp",
      alt: "Dentist dashboard with schedule and patient records",
      label: "Dentist dashboard",
      excerpt: "Daily schedule, records, and braces approvals.",
      detail:
        "Dentists access today's schedule, patient records, pending appointments, and braces approval workflows.",
      category: "staff",
    },
    {
      src: "/projects/barnabas-dental-clinic/admin-dashboard.webp",
      alt: "Admin dashboard with clinic-wide metrics and management tools",
      label: "Admin dashboard",
      excerpt: "Clinic metrics, accounts, and revenue overview.",
      detail:
        "Administrators monitor live stats, revenue, patient growth, and manage staff accounts, roles, and permissions.",
      category: "staff",
    },
  ] satisfies CapstoneScreenshot[],
} as const;

export const capstoneViewGroups = [
  { id: "patient" as const, title: "Patient experience", description: "Public-facing booking and patient portal." },
  { id: "staff" as const, title: "Staff dashboards", description: "Role-based tools for daily clinic operations." },
] as const;
