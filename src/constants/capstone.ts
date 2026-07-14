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
  tagline: "Clinic web system",
  overview:
    "A web system for scheduling, patient records, billing, and clinic admin at Barnabas Dental Clinic — built to replace paper records and Messenger-based booking.",
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
  githubUrl: "",
  liveUrl: "",
  featuredImage: {
    src: "/projects/barnabas-dental-clinic/admin-dashboard.png",
    alt: "Barnabas Dental Clinic admin dashboard — appointments, billing, and clinic metrics",
  },
  screenshots: [
    {
      src: "/projects/barnabas-dental-clinic/landing.png",
      alt: "Barnabas Dental Clinic public landing page with online booking",
      label: "Public landing page",
      excerpt: "Online booking, registration, and clinic information.",
      detail:
        "Patients can register, sign in, book visits, and view clinic hours and contact details without staff assistance.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/patient-dashboard.png",
      alt: "Patient dashboard for appointments, billing, and clinic policies",
      label: "Patient portal",
      excerpt: "Appointments, billing, notifications, and clinic policies.",
      detail:
        "Patients track upcoming visits, balances, and notifications, and review policies for pencil bookings and GCash payments.",
      category: "patient",
    },
    {
      src: "/projects/barnabas-dental-clinic/receptionist-dashboard.png",
      alt: "Receptionist dashboard with scheduling and payment verification",
      label: "Receptionist dashboard",
      excerpt: "Scheduling, billing, and payment verification.",
      detail:
        "Receptionists manage appointments, waiting lists, GCash verification, outstanding bills, and pencil booking follow-ups.",
      category: "staff",
    },
    {
      src: "/projects/barnabas-dental-clinic/dentist-dashboard.png",
      alt: "Dentist dashboard with schedule and patient records",
      label: "Dentist dashboard",
      excerpt: "Daily schedule, records, and braces approvals.",
      detail:
        "Dentists access today's schedule, patient records, pending appointments, and braces approval workflows.",
      category: "staff",
    },
    {
      src: "/projects/barnabas-dental-clinic/admin-dashboard.png",
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
