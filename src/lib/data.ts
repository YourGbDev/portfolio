export interface TechStackItem {
  name: string;
}

export interface TechSection {
  title: string;
  items: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  url: string;
  href: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  href: string;
  code?: string;
  tag?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  isCurrent?: boolean;
  description?: string;
  yearNode?: string;
}

export interface RecommendationItem {
  id?: string;
  quote: string;
  author: string;
  title?: string;
  role?: string;
  organization?: string;
  relationship?: string;
  profileUrl?: string;
  status?: "pending" | "approved" | "rejected";
  createdAt?: string;
}

export type ProjectStatus =
  | "live"
  | "active"
  | "wip"
  | "upcoming"
  | "concept"
  | "school-project"
  | "archived"
  | "planned";

export interface TechnicalDecision {
  title: string;
  description: string;
}

export interface ProjectLearning {
  title: string;
  description: string;
}

export interface CurrentBuild {
  title: string;
  description: string;
  projectSlug?: string;
  href?: string;
  status?: "building" | "improving" | "experimenting";
  updatedAt?: string;
  technologies?: string[];
}

export interface FullProjectItem {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  color?: string;
  role?: string;
  client?: string;
  tags: string[];
  overview: string;
  fullDescription?: string;
  designScreens?: string[];
  gallery?: string[];
  techStack: string[];
  features?: string[];
  status?: ProjectStatus;
  technicalDecisions?: TechnicalDecision[];
  learnings?: ProjectLearning[];
  highlights?: string[];
  buildNotes?: string;
  lessons?: string;
  live?: string;
  github?: string;
  featured?: boolean;
  infrastructure?: string[];
  deployment?: string;
  monitoring?: string;
}

export const projectStatusConfig: Record<
  ProjectStatus,
  { label: string; dotClass: string; badgeClass: string }
> = {
  live: {
    label: "LIVE",
    dotClass: "bg-emerald-500",
    badgeClass: "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  active: {
    label: "ACTIVE",
    dotClass: "bg-cyan-500",
    badgeClass: "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  wip: {
    label: "IN PROGRESS",
    dotClass: "bg-amber-500",
    badgeClass: "text-amber-500 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  upcoming: {
    label: "UPCOMING",
    dotClass: "bg-violet-500 dark:bg-violet-400",
    badgeClass: "text-violet-500 dark:text-violet-300 bg-violet-500/10 border-violet-500/20",
  },
  concept: {
    label: "CONCEPT",
    dotClass: "bg-sky-500 dark:bg-sky-400",
    badgeClass: "text-sky-500 dark:text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  "school-project": {
    label: "SCHOOL PROJECT",
    dotClass: "bg-indigo-500 dark:bg-indigo-400",
    badgeClass: "text-indigo-500 dark:text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  },
  planned: {
    label: "PLANNED",
    dotClass: "bg-violet-500 dark:bg-violet-400",
    badgeClass: "text-violet-500 dark:text-violet-300 bg-violet-500/10 border-violet-500/20",
  },
  archived: {
    label: "ARCHIVED",
    dotClass: "bg-zinc-500",
    badgeClass: "text-zinc-500 dark:text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
  },
};

// Retired/Preserved projects — not listed publicly but data preserved
export const retiredProjects: FullProjectItem[] = [
  {
    slug: "opsdesk",
    title: "OpsDesk",
    category: "Operations Management Platform",
    year: "2026",
    image: "/projects/opsdesk.png",
    color: "bg-[#1a1410]",
    role: "Full-Stack Developer",
    client: "Planned Project",
    tags: ["Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker", "WebSockets"],
    overview:
      "An operations management platform in the planning stage — a Next.js + TypeScript frontend, a Java/Spring Boot backend, PostgreSQL persistence, WebSockets for live updates, and Docker Compose for development.",
    fullDescription:
      "OpsDesk is a planned operations management platform, currently an architecture and product concept rather than an implementation. The intended design pairs a Next.js + TypeScript frontend with a Java/Spring Boot REST API, uses PostgreSQL for relational persistence, and adds WebSocket channels for live status updates. Development environments are defined with Docker Compose so the full stack runs identically on any machine. The stack described here is target architecture for the upcoming build, not completed code.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "WebSockets",
    ],
    features: [
      "Live operations dashboards updated over WebSockets",
      "Ticket / task tracking with status transitions",
      "Role-based access for operators and admins",
      "PostgreSQL persistence with structured migrations",
      "Docker Compose development environment",
      "REST API documented for future clients",
    ],
    technicalDecisions: [
      {
        title: "Why Java / Spring Boot for the backend?",
        description:
          "Spring Boot provides a typed, structured REST layer with first-class WebSocket support, which suits a platform expected to grow in complexity and team size.",
      },
      {
        title: "Why Docker Compose for development?",
        description:
          "Containerizing the backend, database, and frontend removes environment drift and makes provisioning a new machine a single command.",
      },
    ],
    learnings: [
      {
        title: "Plan the real-time event model before the UI",
        description:
          "Deciding which state changes emit WebSocket events up front prevents bolting live updates onto an architecture that was not built for them.",
      },
      {
        title: "Treat migrations as the database contract",
        description:
          "Versioned schema migrations keep the PostgreSQL layer reviewable and reversible as the domain model evolves.",
      },
    ],
    status: "upcoming",
    featured: true,
  },
  {
    slug: "freelanceflow",
    title: "FreelanceFlow",
    category: "Freelance Management Platform",
    year: "2026",
    image: "/projects/freelanceflow.png",
    color: "bg-[#1c1023]",
    role: "Full-Stack Developer",
    client: "Personal Project",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Prisma"],
    overview:
      "A concept for a freelance admin platform that models clients, projects, invoices, and payments — designed with Next.js, TypeScript, Prisma, and PostgreSQL, with Redis for caching and lightweight background jobs.",
    fullDescription:
      "FreelanceFlow is a planned platform for the administrative side of freelance work: tracking clients, projects, invoices, and payments in one place. The design centers on modeling those relationships cleanly — Prisma defines a typed PostgreSQL schema for clients, projects, invoices, and payments, and Redis handles response caching plus lightweight background jobs such as invoice reminders. Concept phase only; not yet implemented.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Prisma"],
    features: [
      "Client and contact records with project history",
      "Project tracking with status and deliverables",
      "Invoice creation and payment status tracking",
      "Dashboard summaries for earnings and outstanding invoices",
      "Redis-backed caching and background reminder jobs",
    ],
    technicalDecisions: [
      {
        title: "Why Prisma over handwritten SQL?",
        description:
          "Prisma provides type-safe queries and versioned migrations, keeping the schema reviewable and the application code free of string-built SQL.",
      },
      {
        title: "Why Redis beyond caching?",
        description:
          "Redis doubles as a simple queue for background jobs such as invoice reminders, avoiding a heavier job worker until the platform needs one.",
      },
    ],
    learnings: [
      {
        title: "Invoicing is a state machine",
        description:
          "Modeling the invoice lifecycle (draft → sent → paid / overdue) as explicit statuses prevents messy ad-hoc update logic.",
      },
      {
        title: "Money needs one canonical representation",
        description:
          "Storing amounts as integers with a defined currency avoids rounding surprises across invoices and dashboards.",
      },
    ],
    status: "concept",
    featured: false,
  },
];

// Single Source of Truth: All Featured & Side Projects
export const fullProjects: FullProjectItem[] = [
  {
    slug: "pos-system",
    title: "POS System",
    category: "Point-of-Sale System",
    year: "2026",
    image: "/images/pos.jpg",
    color: "bg-[#0f172a]",
    role: "Full-Stack Developer",
    client: "Personal Project",
    tags: ["React 19", "TypeScript", "PHP", "REST API", "MariaDB"],
    overview:
      "A browser-based point-of-sale application for day-to-day retail transactions. A React 19 + TypeScript client handles the catalog, cart, checkout, and receipts, while a PHP REST API owns pricing, order creation, and inventory logic over MariaDB.",
    fullDescription:
      "A browser-based POS for daily retail transactions. The React 19 + TypeScript client renders the product catalog, cart, checkout flow, and receipts, while the PHP REST API owns the money-sensitive business rules — pricing, stock deduction, and order totals — so they cannot be bypassed from the client. Order confirmation and inventory deduction run in the same MariaDB transaction, keeping stock levels consistent with every completed sale, and sales records are stored as structured rows that support daily and historical reporting.",
    techStack: [
      "React 19",
      "TypeScript",
      "PHP",
      "REST API",
      "MariaDB",
      "Tailwind CSS",
    ],
    features: [
      "Catalog browsing with live search and category filters",
      "Cart with quantity management and a full checkout flow",
      "Order confirmation that deducts stock in the same transaction",
      "Receipt generation after every completed sale",
      "Sales history and daily reporting views",
      "Responsive layout for counter and handheld screens",
    ],
    technicalDecisions: [
      {
        title: "Why a PHP REST API backed by MariaDB?",
        description:
          "Keeping pricing, stock deduction, and order totals in a server-side API means money-sensitive rules live where they can be audited and cannot be tampered with from the client. PHP + MariaDB also deploy on standard shared hosting without heavy infrastructure.",
      },
      {
        title: "Why React 19 + TypeScript on the frontend?",
        description:
          "TypeScript gives the cart, product, and order models predictable types across components, while React's component model keeps the catalog, cart, and checkout flows modular and reusable.",
      },
    ],
    learnings: [
      {
        title: "Define the API contract before either side",
        description:
          "Agreeing on the order and inventory endpoints up front let the client and server be built and tested independently, and storing currency amounts as integers avoided floating-point rounding in totals.",
      },
      {
        title: "Orders and inventory are one atomic operation",
        description:
          "Order confirmation and stock deduction run in a single database transaction, so a failure on either side can never leave inventory levels out of sync with recorded sales.",
      },
    ],
    status: "live",
    github: "https://github.com/YourGbDev/pos-system",
    featured: true,
  },
  {
    slug: "scholaris",
    title: "Scholaris",
    category: "Scholarship-Matching Platform",
    year: "2026",
    image: "/projects/scholaris.png",
    color: "bg-[#0A1128]",
    role: "Full-Stack Developer",
    client: "Personal Project",
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    overview:
      "A scholarship-matching platform in active development — currently an early Flutter/Dart implementation foundation with the initial application structure in place. Eligibility matching, scholarship data, and the Supabase/PostgreSQL backend are planned next, not yet implemented.",
    fullDescription:
      "Scholaris (in progress — currently an early Flutter/Dart implementation foundation, not yet released) tackles a real problem: students usually scan dozens of scholarship postings by hand with no way to tell which ones they are actually eligible for. What exists today is the project foundation: a Flutter/Dart codebase with the initial application structure in active development. The planned direction is to model each opportunity with structured eligibility rules and compare them against a student's profile — course, year level, and background — using a transparent scoring layer so the most relevant matches surface first, with Supabase (PostgreSQL) handling authentication and data. Those capabilities are designed and planned, but not yet implemented.",
    techStack: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    features: [
      "Flutter/Dart project foundation — in active development (current)",
      "Initial application structure — in active development (current)",
      "Supabase/PostgreSQL integration (planned)",
      "Authentication (planned)",
      "Scholarship data model and catalog (planned)",
      "Eligibility/profile matching and match scoring (planned)",
      "Bookmark and save opportunities for later (planned)",
      "Administrator publishing workflow for new scholarships (planned)",
      "Android, iOS, and web from a single Flutter codebase (planned)",
    ],
    technicalDecisions: [
      {
        title: "Why Flutter with a single Dart codebase?",
        description:
          "Students search for scholarships mostly from phones, so the plan is to ship Android, iOS, and web from one Dart codebase to maximize reach while keeping the UI consistent. The Flutter/Dart foundation is what is being built now.",
      },
      {
        title: "Why Supabase with Row-Level Security? (planned)",
        description:
          "The planned backend pairs Supabase (PostgreSQL) with Row-Level Security to segment students and administrators at the database layer, and real-time subscriptions would keep the opportunity list fresh without custom push infrastructure. This is design intent for the upcoming backend work, not yet implemented.",
      },
    ],
    learnings: [
      {
        title: "Structured eligibility beats free-text matching",
        description:
          "Planned design principle for the matching engine: typed criteria (course, year level, location, financial status) should make ranking deterministic and explainable, where fuzzy text comparison is neither. This shapes the upcoming matching work.",
      },
      {
        title: "Explicit scoring is easier to tune",
        description:
          "Planned design principle for the scoring layer: a transparent weighted score should make it straightforward to adjust which criteria matter most without rewriting the matching engine.",
      },
    ],
    status: "wip",
    github: "https://github.com/YourGbDev/scholaris",
    featured: true,
  },
  {
    slug: "ecowatch",
    title: "EcoWatch",
    category: "Environmental Monitoring Platform",
    year: "2026",
    image: "/images/ecowatch.jpg",
    color: "bg-[#052e1c]",
    role: "Full-Stack Developer",
    client: "Personal Project",
    tags: ["PHP", "MySQL", "Tailwind CSS"],
    overview:
      "A lightweight environmental monitoring app for logging observations and incident reports from the field, built with server-rendered PHP, MySQL, and Tailwind CSS.",
    fullDescription:
      "EcoWatch is a lightweight platform for logging environmental observations and incident reports from the field. Server-rendered PHP and MySQL keep it deployable on minimal hosting, and every entry is stored with location and timestamp metadata so submissions can be reviewed and filtered on a dashboard. Tailwind CSS keeps the interface responsive and usable on the phones people carry into the field.",
    techStack: ["PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Log observations with location and timestamp",
      "Submit structured incident / observation reports",
      "Dashboard for reviewing and filtering submissions",
      "Search and filter by date, location, and category",
      "Mobile-first layout built for use in the field",
      "Review queue with a simple role-based view",
    ],
    technicalDecisions: [
      {
        title: "Why server-rendered PHP + MySQL?",
        description:
          "The platform is deliberately lightweight: server-rendered PHP deploys on standard hosting, and a normalized MySQL schema keeps reports queryable as the dataset grows without adding frontend infrastructure.",
      },
      {
        title: "Why Tailwind CSS for the interface?",
        description:
          "Tailwind keeps the phone-first, field-friendly UI consistent and fast to iterate on without a heavier frontend build toolchain.",
      },
    ],
    learnings: [
      {
        title: "Index the columns you actually filter on",
        description:
          "Adding indexes on date and location as reports accumulated kept dashboard queries fast without application changes.",
      },
      {
        title: "Field forms need tolerant validation",
        description:
          "Reports entered from a phone need forgiving input handling, clear required-field errors, and sensible defaults for location and timestamp.",
      },
    ],
    status: "live",
    github: "https://github.com/YourGbDev/EcoWatch",
    featured: true,
  },
  {
    slug: "ph-local-data-api",
    title: "PH Local Data API",
    category: "Public Data API",
    year: "2026",
    image: "/projects/ph-local-data-api.png",
    color: "bg-[#0b1f3a]",
    role: "API Developer",
    client: "Personal Project",
    tags: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Redis"],
    overview:
      "A concept for a public REST API that normalizes Philippine local-government data — regions, provinces, cities, municipalities, and barangays — into one queryable endpoint, designed with Node.js/Express and PostgreSQL with Redis caching.",
    fullDescription:
      "A planned public API that turns scattered Philippine local-government datasets into one consistent, queryable endpoint. The core engineering problem is normalization: cleaning and reconciling the source datasets into a hierarchical schema — regions → provinces → cities/municipalities → barangays — served through versioned REST endpoints from a Node.js/Express service, with Redis caching the stable, read-heavy reference data. A Next.js documentation site adds an interactive explorer for testing queries in the browser. Concept phase only; not yet deployed.",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      "Versioned REST endpoints for Philippine local data",
      "Hierarchical geography: regions → provinces → cities/municipalities → barangays",
      "Filtering and lookup by code, name, or parent region",
      "Redis response caching for read-heavy reference data",
      "Interactive API explorer and documentation site",
    ],
    technicalDecisions: [
      {
        title: "Why a normalized geographic schema?",
        description:
          "Modeling the Philippine hierarchy as parent-child records with stable codes keeps queries flexible and makes the API straightforward to extend as more datasets are added.",
      },
      {
        title: "Why Redis caching on top of PostgreSQL?",
        description:
          "Reference data such as municipality lists is read far more often than it changes, so caching responses in Redis cuts database load with little added complexity.",
      },
    ],
    learnings: [
      {
        title: "Public API design starts with the data model",
        description:
          "Cleaning and reconciling inconsistent source datasets into one schema is the hardest and most valuable part of the design work.",
      },
      {
        title: "Even static data needs cache invalidation",
        description:
          "A short TTL plus an explicit revalidation endpoint prevents corrected records from lingering stale after the underlying dataset is fixed.",
      },
    ],
    status: "concept",
    featured: false,
  },
  {
    slug: "inforforge",
    title: "InfraForge",
    category: "Cloud Infrastructure Engineering",
    year: "2026",
    image: "/projects/inforforge.png",
    color: "bg-[#0f1b2d]",
    role: "Cloud Infrastructure Engineer",
    client: "Planned Project",
    tags: ["AWS", "Terraform", "Docker", "IAM"],
    overview:
      "Planned — a production-style Infrastructure as Code build on AWS. The goal is to define a multi-AZ network and container stack with Terraform: VPC, ECS/EC2, RDS PostgreSQL, S3, ALB, and CloudWatch, secured with least-privilege IAM. Not yet built.",
    fullDescription:
      "InfraForge is the first planned Cloud/DevOps learning build: a production-style Infrastructure as Code project on AWS. The target architecture defines a private, multi-AZ network — VPC with public and private subnets, an ALB, ECS/EC2 compute, an isolated RDS PostgreSQL database, S3 for object storage, and CloudWatch for logs and metrics — all provisioned and versioned with Terraform and containerized with Docker. IAM policies are designed around least privilege so no resource is reachable or configurable beyond what the architecture needs. The scope is the first step in a roadmap — Build to Automate to Deploy to Observe to Secure — so its network, database, and container patterns can be reused by the later projects. This is a planned roadmap build: no AWS infrastructure, Terraform state, or deployment exists yet.",
    techStack: [
      "AWS",
      "Terraform",
      "Docker",
      "IAM",
      "VPC",
      "ECS/EC2",
      "RDS PostgreSQL",
      "S3",
      "ALB",
      "CloudWatch",
    ],
    features: [
      "Versioned Terraform configuration for the full environment (planned)",
      "Multi-AZ VPC with public/private subnet isolation (planned)",
      "ALB routing to ECS/EC2 compute (planned)",
      "Private RDS PostgreSQL with no public exposure (planned)",
      "S3 buckets for object storage and state/artifacts (planned)",
      "Least-privilege IAM roles and policies (planned)",
      "CloudWatch logging and metrics collection (planned)",
      "Docker containerization of application components (planned)",
    ],
    technicalDecisions: [
      {
        title: "Why Terraform for this project? (planned)",
        description:
          "Declarative, versioned Infrastructure as Code makes the whole environment reproducible and reviewable as a single artifact — the intended foundation for the later DeployFlow automation.",
      },
      {
        title: "Why a private, multi-AZ network? (planned)",
        description:
          "Putting the database in a private subnet and routing traffic only through an ALB models how real production systems isolate sensitive data, which is the honest learning goal of this build.",
      },
    ],
    status: "planned",
    featured: false,
  },
  {
    slug: "deployflow",
    title: "DeployFlow",
    category: "CI/CD & DevOps Engineering",
    year: "2026",
    image: "/projects/deployflow.png",
    color: "bg-[#0a1e22]",
    role: "DevOps Engineer",
    client: "Planned Project",
    tags: ["Git", "GitHub Actions", "Docker", "Terraform"],
    overview:
      "Planned — an automated CI/CD delivery pipeline that deploys containerized applications to the InfraForge infrastructure. GitHub Actions, Docker, ECR/ECS, Terraform, Bash/Python, and OIDC-powered cloud access. Not yet built.",
    fullDescription:
      "DeployFlow is the second planned Cloud/DevOps learning build: an automated CI/CD delivery pipeline that ships containerized applications to cloud infrastructure. The intended design uses GitHub Actions for CI/CD, builds and pushes images to AWS ECR, and rolls them out to ECS, with Terraform managing the deployment infrastructure and OIDC replacing long-lived cloud credentials with short-lived identity federation. Bash and Python scripts handle build, test, and release steps, with health gates gating promotion and documented rollback strategies if a release misbehaves. As a DevSecOps-minded pipeline, secrets are injected at deploy time and never baked into images. This extends InfraForge by automating delivery of what the infrastructure runs. This is a planned roadmap build: no pipeline, Docker image, or cloud deployment exists yet.",
    techStack: [
      "Git",
      "GitHub Actions",
      "Docker",
      "AWS ECR",
      "AWS ECS",
      "Terraform",
      "Bash",
      "Python",
      "OIDC",
    ],
    features: [
      "GitHub Actions workflow for build, test, and deploy (planned)",
      "Container image builds pushed to AWS ECR (planned)",
      "Deployment to ECS on the InfraForge infrastructure (planned)",
      "OIDC-based cloud access without long-lived keys (planned)",
      "Health gates between environment promotions (planned)",
      "Documented rollback and redeploy strategy (planned)",
      "Secrets injected at deploy time (planned)",
    ],
    technicalDecisions: [
      {
        title: "Why OIDC instead of access keys? (planned)",
        description:
          "Federating GitHub Actions with AWS through OIDC keeps cloud credentials short-lived and scoped, which is the security-minded approach this pipeline is meant to practice.",
      },
      {
        title: "Why health gates before promotion? (planned)",
        description:
          "Requiring the deployed application to pass health checks before promotion is the intended safety mechanism for catching broken releases before they reach the next environment.",
      },
    ],
    status: "planned",
    featured: false,
  },
  {
    slug: "cloudmind",
    title: "CloudMind",
    category: "Cloud Application Engineering + AI",
    year: "2026",
    image: "/projects/cloudmind.png",
    color: "bg-[#14102b]",
    role: "Cloud Application Engineer",
    client: "Planned Project",
    tags: ["AWS Bedrock", "FastAPI", "Node.js", "PostgreSQL"],
    overview:
      "Planned — an AI-powered Cloud Log Analyzer and Remediation Suggestion Engine: a cloud-native service architecture built on managed AWS AI and data services, with FastAPI/Node.js backends and a secure JWT API layer. Not yet built.",
    fullDescription:
      "CloudMind is the third planned Cloud/DevOps learning build: an AI-powered Cloud Log Analyzer and Remediation Suggestion Engine that reads application logs and suggests remediation steps. The intended architecture is cloud-native: a FastAPI and/or Node.js backend exposing REST APIs, AWS Bedrock as the managed AI service for analysis, PostgreSQL for persistence, and S3 for log/object storage, containerized with Docker and served behind an ALB. Access is secured with JWT authentication and IAM-based service-to-service access so the API layer, AI service, and database only ever talk to each other with scoped permissions. It deliberately reuses the infrastructure from InfraForge and the delivery automation from DeployFlow, making it the first project that exercises all three layers together. This is a planned roadmap build: no AI service, backend, or deployment exists yet.",
    techStack: [
      "AWS Bedrock",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "S3",
      "Docker",
      "JWT",
      "ALB",
      "CI/CD",
    ],
    features: [
      "REST API over FastAPI and/or Node.js (planned)",
      "AWS Bedrock-powered log analysis (planned)",
      "Remediation suggestion engine (planned)",
      "PostgreSQL storage for logs and suggestions (planned)",
      "S3 for log and object storage (planned)",
      "JWT-secured API access (planned)",
      "IAM-based service-to-service access (planned)",
      "Containerized deployment behind an ALB (planned)",
    ],
    technicalDecisions: [
      {
        title: "Why managed AI over running models myself? (planned)",
        description:
          "Using AWS Bedrock keeps the focus on architecture — API design, IAM-scoped access, and cloud-native deployment — rather than model hosting, which is the intended learning goal.",
      },
      {
        title: "Why a strict API + service boundary? (planned)",
        description:
          "Separating the REST layer, AI service, and database behind scoped IAM roles is how the build intends to keep sensitive log data and internal services from being exposed.",
      },
    ],
    status: "planned",
    featured: false,
  },
  {
    slug: "signalops",
    title: "SignalOps",
    category: "Observability / SRE / Cloud Operations",
    year: "2026",
    image: "/projects/signalops.png",
    color: "bg-[#082018]",
    role: "Cloud Operations Engineer",
    client: "Planned Project",
    tags: ["CloudWatch", "SNS", "Lambda", "EventBridge"],
    overview:
      "Planned — observability, reliability, and automated incident response for the systems built in the earlier roadmap projects. CloudWatch, SNS, Lambda, EventBridge, and chaos-engineering-based failure testing. Not yet built.",
    fullDescription:
      "SignalOps is the fourth planned Cloud/DevOps learning build: an observability and reliability layer that instruments the systems created by the earlier roadmap projects. The intended design centralizes logs, metrics, and alarms through AWS CloudWatch, routes alerts with SNS, and uses EventBridge-driven Lambda functions for automated remediation. It introduces SLI/SLO concepts to define measurable reliability targets, and chaos-engineering practices to deliberately inject failures so incident response can be practiced safely. The result is an operations discipline that answers: is the system healthy, and what happens when it is not? This is a planned roadmap build: no dashboards, alarms, or incident pipelines exist yet.",
    techStack: [
      "AWS CloudWatch",
      "Amazon SNS",
      "AWS Lambda",
      "Amazon EventBridge",
      "Chaos Engineering",
    ],
    features: [
      "Centralized logging and metrics via CloudWatch (planned)",
      "Alarm-based alerting routed through SNS (planned)",
      "EventBridge-driven Lambda remediation (planned)",
      "SLI/SLO definitions for the tracked systems (planned)",
      "Failure injection with chaos engineering (planned)",
      "Documented incident response runbooks (planned)",
    ],
    technicalDecisions: [
      {
        title: "Why CloudWatch + EventBridge + Lambda? (planned)",
        description:
          "A fully managed pipeline from metric to alarm to automated remediation is the intended way to learn observability without running monitoring infrastructure itself.",
      },
      {
        title: "Why SLIs/SLOs before dashboards? (planned)",
        description:
          "Defining what good looks like (availability, latency targets) first is what makes the alarms meaningful — the intended shift from collecting data to acting on it.",
      },
    ],
    status: "planned",
    featured: false,
  },
  {
    slug: "cloudshield",
    title: "CloudShield",
    category: "Cloud Security Engineering",
    year: "2026",
    image: "/projects/cloudshield.png",
    color: "bg-[#200a10]",
    role: "Cloud Security Engineer",
    client: "Planned Project",
    tags: ["AWS IAM", "KMS", "Secrets Manager", "CloudTrail"],
    overview:
      "Planned — a zero-trust AWS security layer governing the whole roadmap stack. Least-privilege IAM, KMS encryption, Secrets Manager, CloudTrail audit, Config, GuardDuty, and VPC Endpoints. Not yet built.",
    fullDescription:
      "CloudShield is the final planned Cloud/DevOps learning build: a zero-trust AWS cloud security layer that applies security governance across the infrastructure, deployment, application, and observability layers built in the earlier roadmap projects. The intended scope covers least-privilege IAM across every service, encryption at rest and in transit with KMS, secret storage via Secrets Manager, audit logging with CloudTrail, compliance baselines with Config, threat detection with GuardDuty, and private connectivity through VPC Endpoints so traffic never leaves the AWS network. It is the capstone of the roadmap — Build to Automate to Deploy to Observe to Secure — because it treats security as a cross-cutting governance layer rather than a single tool. This is a planned roadmap build: no security policies, encryption, or audit pipelines exist yet.",
    techStack: [
      "AWS IAM",
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty",
      "VPC Endpoints",
    ],
    features: [
      "Least-privilege IAM across all roadmap systems (planned)",
      "KMS encryption for data at rest and in transit (planned)",
      "Secrets centralized in Secrets Manager (planned)",
      "CloudTrail audit logging and monitoring (planned)",
      "AWS Config compliance baselines (planned)",
      "GuardDuty threat detection (planned)",
      "VPC Endpoints for private network access (planned)",
      "Zero-trust network segmentation (planned)",
    ],
    technicalDecisions: [
      {
        title: "Why zero trust as the guiding model? (planned)",
        description:
          "Default-deny identity, encryption, and network isolation is the intended standard for the capstone build — every access decision is explicit and auditable rather than trusted by location.",
      },
      {
        title: "Why a governance layer instead of one tool? (planned)",
        description:
          "Security spanning IAM, encryption, secrets, audit, and detection is meant to demonstrate that defense is systemic, applying to the infrastructure, delivery, application, and observability layers alike.",
      },
    ],
    status: "planned",
    featured: false,
  },
];

export interface CloudDevOpsRoadmapStep {
  slug: string;
  stage: string;
  stageLabel: string;
  stageName: string;
  stageDescription: string;
}

// Conceptual roadmap progression: Build → Automate → Deploy → Observe → Secure
export const cloudDevOpsRoadmap: CloudDevOpsRoadmapStep[] = [
  {
    slug: "inforforge",
    stage: "01",
    stageLabel: "BUILD",
    stageName: "Build",
    stageDescription: "Production-style Infrastructure as Code on AWS with Terraform, Docker, and IAM.",
  },
  {
    slug: "deployflow",
    stage: "02",
    stageLabel: "AUTOMATE",
    stageName: "Automate",
    stageDescription: "Automated CI/CD delivery pipeline to cloud infrastructure.",
  },
  {
    slug: "cloudmind",
    stage: "03",
    stageLabel: "DEPLOY",
    stageName: "Deploy",
    stageDescription: "AI-powered cloud-native service architecture on managed AWS services.",
  },
  {
    slug: "signalops",
    stage: "04",
    stageLabel: "OBSERVE",
    stageName: "Observe",
    stageDescription: "Observability, reliability, and automated incident response.",
  },
  {
    slug: "cloudshield",
    stage: "05",
    stageLabel: "SECURE",
    stageName: "Secure",
    stageDescription: "Zero-trust AWS cloud security infrastructure and defense.",
  },
];

export const currentBuild: CurrentBuild = {
  title: "Scholaris",
  description:
    "Building the Flutter/Dart foundation for a scholarship-matching platform — initial app structure in active development, with eligibility matching and Supabase integration planned next.",
  projectSlug: "scholaris",
  status: "building",
  updatedAt: "Aug 2026",
  technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
};

export function normalizeTechName(name: string): string {
  if (!name) return "";
  const clean = name.trim().toLowerCase().replace(/[\s._-]+/g, "");
  if (clean === "next" || clean === "nextjs" || clean === "nextjs15" || clean === "next15") return "next.js";
  if (clean === "react" || clean === "react18" || clean === "react19" || clean === "reactjs") return "react";
  if (clean === "tailwind" || clean === "tailwindcss" || clean === "tailwindcss34" || clean === "tailwind40" || clean === "tailwindcss40") return "tailwind css";
  if (clean === "postgres" || clean === "postgresql") return "postgresql";
  if (clean === "node" || clean === "nodejs") return "node.js";
  if (clean === "express" || clean === "expressjs") return "express.js";
  if (clean === "springboot") return "spring boot";
  if (clean === "restapi" || clean === "restapis") return "rest api";
  if (clean === "websocket" || clean === "websockets") return "websockets";
  if (clean === "mariadb") return "mariadb";
  if (clean === "redis") return "redis";
  if (clean === "flutter") return "flutter";
  if (clean === "dart") return "dart";
  if (clean === "java") return "java";
  if (clean === "prisma") return "prisma";
  if (clean === "docker") return "docker";
  if (clean === "motion" || clean === "motion12" || clean === "framermotion") return "framer motion";
  if (clean === "dndkit" || clean === "@dndkit") return "@dnd-kit";
  if (clean === "tmdb" || clean === "tmdbapi") return "tmdb api";
  if (clean === "typescript" || clean === "ts") return "typescript";
  if (clean === "javascript" || clean === "js") return "javascript";
  return clean;
}

export function getProjectsUsingTech(tech: string): FullProjectItem[] {
  if (!tech) return [];
  const target = normalizeTechName(tech);
  return fullProjects.filter((p) => {
    const allTech = [...(p.techStack || []), ...(p.tags || [])];
    return allTech.some((t) => normalizeTechName(t) === target);
  });
}

export function getAllTechItems(): string[] {
  const set = new Set<string>();
  techSections.forEach((sec) => {
    sec.items.forEach((item) => set.add(item));
  });
  fullProjects.forEach((p) => {
    (p.techStack || []).forEach((t) => set.add(t));
    (p.tags || []).forEach((t) => set.add(t));
  });
  return Array.from(set);
}

export function getCanonicalTechName(query: string): string | null {
  if (!query) return null;
  const target = normalizeTechName(query);
  const all = getAllTechItems();
  const exact = all.find((item) => normalizeTechName(item) === target);
  return exact || null;
}

export function getProjectBySlug(slug: string): FullProjectItem | undefined {
  return fullProjects.find((p) => p.slug === slug);
}

// Dynamically derived summary projects list for backward compatibility
export const projects: ProjectItem[] = fullProjects
  .filter((p) => p.featured !== false)
  .map((p) => ({
    name: p.title,
    description: p.overview,
    url: (p.live || p.github || "").replace(/^https?:\/\//, ""),
    href: p.live || p.github || "#",
  }));

// Single Source of Truth: Tech Stack Categories
export const techSections: TechSection[] = [
  {
    title: "Cloud",
    items: ["AWS"],
  },
  {
    title: "DevOps",
    items: ["Linux", "Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Vercel"],
  },
  {
    title: "Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "PHP",
      "Java",
      "Spring Boot",
      "Prisma",
      "REST API",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MariaDB", "MySQL", "Supabase", "Redis"],
  },
  {
    title: "Animation & Design",
    items: ["Figma", "GSAP", "Framer Motion"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Postman"],
  },
];

export const certifications: CertificationItem[] = [];

export const experiences: ExperienceItem[] = [
  {
    role: "Cloud & DevOps Engineer in Progress",
    company: "Independent & Student Projects",
    year: "2026 – Present",
    yearNode: "PRESENT",
    isCurrent: true,
    description:
      "Building full-stack applications while actively learning AWS, Linux, Docker, CI/CD, and cloud infrastructure — working toward understanding how software is deployed, secured, automated, and operated end-to-end.",
  },
  {
    role: "Front-End Developer",
    company: "Independent & Student Projects",
    year: "2024 – 2025",
    yearNode: "2024",
    description:
      "Focused on building responsive interfaces and interactive web applications while developing experience with modern frontend technologies and component-based UI development.",
  },
  {
    role: "BS Information Technology",
    company: "Western Leyte College of Ormoc",
    year: "2024 – Present",
    yearNode: "2024",
    description:
      "Formal education that strengthened my technical and problem-solving foundation.",
  },
  {
    role: "Hello World! 👋",
    company: "Wrote my first line of code",
    year: "2022",
    yearNode: "2022",
    description:
      "Started learning programming and building software, beginning the transition from experimenting with code to developing complete projects.",
  },
];

export const recommendations: RecommendationItem[] = [];

export const galleryImages: string[] = [];

export const memberOf = [
  {
    name: "Western Leyte College of Ormoc — BS Information Technology",
    href: "#",
  },
];

export interface CapabilityGroup {
  id: string;
  items: string[];
}

export interface ProfileInfoData {
  currentFocus: {
    title: string;
    description: string;
    terminalLine: string;
  };
  whatIBuild: {
    title: string;
    groups: CapabilityGroup[];
  };
  howIWork: {
    title: string;
    principles: string[];
  };
  quickFacts: {
    label: string;
    value: string;
  }[];
}

export interface CloudJourneyStage {
  label: string;
  items: string[];
  status: "current" | "next" | "planned";
  note: string;
}

export interface SystemStatusItem {
  service: string;
  status: "LEARNING" | "ACTIVE" | "NEXT" | "PLANNED" | "BUILDING";
}

export const profileInfo: ProfileInfoData = {
  currentFocus: {
    title: "Current Focus",
    description:
      "Building applications while developing practical Cloud and DevOps skills across AWS, Linux, containers, automation, CI/CD, and cloud architecture.",
    terminalLine: "> build · deploy · automate · iterate",
  },
  whatIBuild: {
    title: "What I Build",
    groups: [
      {
        id: "01",
        items: ["Full-Stack Web Apps", "Responsive Interfaces"],
      },
      {
        id: "02",
        items: ["Mobile Apps (Flutter)", "REST APIs & Backends"],
      },
      {
        id: "03",
        items: ["Cloud & DevOps Foundations", "Deployment-Ready Systems"],
      },
    ],
  },
  howIWork: {
    title: "How I Work",
    principles: [
      "Clean architecture & modularity",
      "Systems-minded, infra-aware engineering",
      "Fast iteration & continuous learning",
    ],
  },
  quickFacts: [
    { label: "OPEN TO", value: "Internships · Junior Roles · Freelance" },
    { label: "WORK SETUP", value: "Remote-friendly · Hybrid" },
    { label: "PROJECT STYLE", value: "Full-stack apps + Cloud & DevOps" },
    { label: "CORE FOCUS", value: "Cloud & DevOps · Full-Stack Engineering" },
    { label: "INTERESTS", value: "AWS · Linux · CI/CD · EdTech · APIs" },
  ],
};

export const cloudJourney: CloudJourneyStage[] = [
  {
    label: "Foundation",
    items: ["AWS", "Linux", "Networking"],
    status: "current",
    note: "Hands-on fundamentals — exploring AWS services, the Linux CLI, and how networks connect systems.",
  },
  {
    label: "Infrastructure",
    items: ["AWS Compute", "IAM", "Storage", "Networking"],
    status: "current",
    note: "Learning how cloud resources are provisioned, secured, and connected.",
  },
  {
    label: "Automation",
    items: ["Docker", "CI/CD", "Infrastructure as Code"],
    status: "next",
    note: "Next up — repeatable builds, automated pipelines, and defining infrastructure as code.",
  },
  {
    label: "Advanced",
    items: ["Kubernetes", "Observability", "DevSecOps"],
    status: "planned",
    note: "Future learning goals — planned areas I aim to reach as I go deeper into cloud operations.",
  },
];

export const systemStatus: SystemStatusItem[] = [
  { service: "AWS", status: "LEARNING" },
  { service: "LINUX", status: "ACTIVE" },
  { service: "DOCKER", status: "NEXT" },
  { service: "TERRAFORM", status: "PLANNED" },
  { service: "CI/CD", status: "BUILDING" },
  { service: "KUBERNETES", status: "PLANNED" },
];
