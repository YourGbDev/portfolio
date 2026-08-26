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
4. **OpsDesk** (2026, Upcoming) — Operations management platform planned with Next.js + TypeScript, Java/Spring Boot, PostgreSQL, Docker, and WebSockets.
5. **PH Local Data API** (2026, Concept) — Public REST API for Philippine local data with Node.js/Express, PostgreSQL, and Redis.
6. **FreelanceFlow** (2026, Concept) — Freelance management platform concept using Next.js, TypeScript, PostgreSQL, Redis, and Prisma.

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
