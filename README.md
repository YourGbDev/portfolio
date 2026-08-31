# Gilbert Bulado — Personal Portfolio

A minimalist, high-craft developer portfolio and engineering showcase designed with an editorial, dark-first aesthetic, micro-animations, and live interactive data integrations.

**GitHub Profile:** [@YourGbDev](https://github.com/YourGbDev)

---

## ⚡ Highlights & Key Features

- **Editorial & CAD Design System**: 760px measured reading column, high-contrast typography, and tactile CAD project cards with corner reticles and grayscale-to-color hover states.
- **Interactive Avatar**: Multi-frame image sequence scrubbing with smooth frame caching.
- **Live GitHub Contributions Calendar**: Real-time server-side scraper and normalizer pulling live commit matrix data from [@YourGbDev](https://github.com/YourGbDev) with custom theme-aware heat levels.
- **AI Portfolio Assistant**: Integrated interactive chatbot powered by Google Gemini (`gemini-2.5-flash`) providing project details, tech stack info, and contact routing.
- **Seamless Theming**: 3-way theme provider supporting Dark, Light, and System modes with CSS custom property design tokens.
- **Floating Navigation Dock**: Glassmorphic bottom navigation dock with liquid active indicators and quick section jumping.
- **PWA & Offline Ready**: Service worker caching and offline fallback support.

---

## 🛠️ Tech Stack

- **Core & Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling & Tokens**: Vanilla Tailwind CSS, CSS Custom Properties Design Tokens
- **Motion & Interaction**: Framer Motion, GSAP
- **Icons & Visuals**: Simple Icons (`react-icons/si`), VS Code Icons (`react-icons/vsc`), Lucide React
- **AI Integration**: Google Gemini API (`@google/generative-ai` REST endpoint)
- **Tooling & Package Management**: pnpm, ESLint, PostCSS

---

## 🚀 Featured Projects

1. **[POS System](/#)** (2026) — Point-of-sale system with a React 19 + TypeScript frontend, a PHP REST API, and MariaDB covering product catalog, cart/checkout, receipts, and sales history.
2. **Scholaris** (2026, In Progress) — Flutter + Supabase scholarship-matching platform that ranks opportunities against each student's eligibility profile.
3. **EcoWatch** (2026) — Environmental monitoring web app built with PHP, MySQL, and Tailwind CSS for logging observations and reports.
4. **PH Local Data API** (2026, Concept) — Public REST API for Philippine local data with Node.js/Express, PostgreSQL, and Redis.

### ☁️ Cloud/DevOps Roadmap (PLANNED)

Learning-build projects planned as a sequence — Build → Automate → Deploy → Observe → Secure. These are roadmap goals, not completed deployments.

1. **InfraForge** (PLANNED) — Production-style Infrastructure as Code on AWS with Terraform, Docker, and IAM (VPC, ECS/EC2, RDS PostgreSQL, S3, ALB, CloudWatch).
2. **DeployFlow** (PLANNED) — Automated CI/CD delivery pipeline (Git, GitHub Actions, Docker, ECR/ECS, Terraform, Bash/Python, OIDC).
3. **CloudMind** (PLANNED) — AI-powered Cloud Log Analyzer & Remediation Suggestion Engine on AWS Bedrock with FastAPI/Node.js, PostgreSQL, S3, and JWT.
4. **SignalOps** (PLANNED) — Observability, reliability, and automated incident response (CloudWatch, SNS, Lambda, EventBridge, chaos engineering).
5. **CloudShield** (PLANNED) — Zero-trust AWS security layer (IAM, KMS, Secrets Manager, CloudTrail, Config, GuardDuty, VPC Endpoints).

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20+
- pnpm (or npm / yarn / bun)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd GilbertPortfolio

# Install dependencies using pnpm
pnpm install
```

### Environment Configuration

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
# Optional: GITHUB_TOKEN=your_github_personal_access_token
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm run build
pnpm start
```

---

## 📄 License

Created and maintained by [Gilbert Bulado](https://github.com/YourGbDev). All rights reserved.
