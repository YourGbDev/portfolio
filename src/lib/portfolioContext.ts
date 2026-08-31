import {
  fullProjects,
  techSections,
  experiences,
  certifications,
  currentBuild,
  getProjectBySlug,
  getProjectsUsingTech,
  getCanonicalTechName,
} from "./data";

export interface PortfolioPageContext {
  pathname: string;
  pageType:
    | "home"
    | "work"
    | "projects"
    | "project_detail"
    | "tech_stack"
    | "certifications"
    | "other";
  title: string;
  projectSlug?: string;
  selectedTech?: string;
}

export interface ValidatedLink {
  label: string;
  href: string;
  isExternal: boolean;
}

/**
 * Derives structured page context from current pathname and query params
 */
export function getPortfolioPageContext(
  pathname: string,
  searchParams?: { [key: string]: string | string[] | undefined } | URLSearchParams
): PortfolioPageContext {
  const normalizedPath = (pathname || "/").replace(/\/$/, "") || "/";

  // 1. Homepage
  if (normalizedPath === "/") {
    return {
      pathname: "/",
      pageType: "home",
      title: "Homepage / Overview",
    };
  }

  // 2. Work & Availability
  if (normalizedPath === "/work") {
    return {
      pathname: "/work",
      pageType: "work",
      title: "Work & Experience",
    };
  }

  // 3. Projects Index
  if (normalizedPath === "/projects") {
    return {
      pathname: "/projects",
      pageType: "projects",
      title: "Projects Index",
    };
  }

  // 4. Project Detail
  if (normalizedPath.startsWith("/projects/")) {
    const slug = normalizedPath.replace("/projects/", "").trim();
    const project = getProjectBySlug(slug);
    if (project) {
      return {
        pathname: normalizedPath,
        pageType: "project_detail",
        title: project.title,
        projectSlug: project.slug,
      };
    }
  }

  // 5. Tech Stack (with optional selected tech filter)
  if (normalizedPath === "/tech-stack") {
    let techParam: string | null = null;

    if (searchParams) {
      if (typeof (searchParams as URLSearchParams).get === "function") {
        techParam = (searchParams as URLSearchParams).get("tech");
      } else {
        const val = (searchParams as Record<string, string | string[] | undefined>)["tech"];
        techParam = Array.isArray(val) ? val[0] : val || null;
      }
    }

    const canonicalTech = techParam ? getCanonicalTechName(techParam) : null;

    return {
      pathname: "/tech-stack",
      pageType: "tech_stack",
      title: canonicalTech ? `Tech Stack (${canonicalTech})` : "Tech Stack",
      selectedTech: canonicalTech || undefined,
    };
  }

  // 6. Certifications
  if (normalizedPath === "/certifications") {
    return {
      pathname: "/certifications",
      pageType: "certifications",
      title: "Certifications",
    };
  }

  // Fallback
  return {
    pathname: normalizedPath,
    pageType: "other",
    title: "Portfolio",
  };
}

/**
 * Returns 2-3 contextual suggested questions for a given page context
 */
export function getSuggestedQuestions(context: PortfolioPageContext): string[] {
  switch (context.pageType) {
    case "home":
      return [
        "What projects has Gilbert built?",
        "What technologies does he use most?",
        "What kind of roles is he open to?",
      ];

    case "work":
      return [
        "What roles is Gilbert open to?",
        "What can he help build?",
        "How can I get in touch with Gilbert?",
      ];

    case "projects":
      return [
        "Which projects should I explore first?",
        "Which projects are full-stack?",
        "Which projects use Flutter?",
      ];

    case "project_detail":
      return [
        "How does this project work?",
        "Why was this tech stack chosen?",
        "What did Gilbert learn building it?",
      ];

    case "tech_stack":
      if (context.selectedTech) {
        return [
          `Where did Gilbert use ${context.selectedTech}?`,
          `Which projects use ${context.selectedTech}?`,
          "What stack was this paired with?",
        ];
      }
      return [
        "Which projects use Supabase?",
        "What backend technologies does Gilbert use?",
        "Which technologies appear in the most projects?",
      ];

    case "certifications":
      return [
        "What certifications does Gilbert have?",
        "What skills do these certifications cover?",
      ];

    default:
      return [
        "What projects has Gilbert built?",
        "What is his primary tech stack?",
        "How can I contact Gilbert?",
      ];
  }
}

/**
 * Validates a target URL/path against allowed portfolio routes and trusted external destinations
 */
export function validatePortfolioLink(href: string): { isValid: boolean; normalizedHref: string; isExternal: boolean } {
  if (!href) return { isValid: false, normalizedHref: "", isExternal: false };

  const trimmed = href.trim();

  // Prevent javascript: or data: injection
  if (/^(javascript:|data:|vbscript:)/i.test(trimmed)) {
    return { isValid: false, normalizedHref: "", isExternal: false };
  }

  // 1. Internal static routes
  if (["/", "/work", "/projects", "/tech-stack", "/certifications"].includes(trimmed)) {
    return { isValid: true, normalizedHref: trimmed, isExternal: false };
  }

  // 2. Project detail route: /projects/:slug
  if (trimmed.startsWith("/projects/")) {
    const slug = trimmed.replace("/projects/", "").split("?")[0].split("#")[0].trim();
    if (getProjectBySlug(slug)) {
      return { isValid: true, normalizedHref: `/projects/${slug}`, isExternal: false };
    }
  }

  // 3. Tech filter route: /tech-stack?tech=:tech
  if (trimmed.startsWith("/tech-stack?tech=")) {
    const query = trimmed.replace("/tech-stack?tech=", "").split("&")[0].trim();
    const canonical = getCanonicalTechName(decodeURIComponent(query));
    if (canonical) {
      return {
        isValid: true,
        normalizedHref: `/tech-stack?tech=${encodeURIComponent(canonical.toLowerCase())}`,
        isExternal: false,
      };
    }
  }

  // 4. Trusted external portfolio links
  const trustedPrefixes = [
    "https://github.com/YourGbDev",
  ];

  // Also allow verified live demo URLs from fullProjects
  const liveUrls = fullProjects.map((p) => p.live).filter(Boolean) as string[];

  for (const trusted of [...trustedPrefixes, ...liveUrls]) {
    if (trimmed === trusted || trimmed.startsWith(trusted + "/")) {
      return { isValid: true, normalizedHref: trimmed, isExternal: true };
    }
  }

  return { isValid: false, normalizedHref: "", isExternal: false };
}

/**
 * Extracts and validates markdown links `[label](href)` from text
 */
export function extractAndValidateLinks(text: string): ValidatedLink[] {
  if (!text) return [];

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const results: ValidatedLink[] = [];
  const seen = new Set<string>();

  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(text)) !== null) {
    const label = match[1].trim();
    const rawHref = match[2].trim();
    const { isValid, normalizedHref, isExternal } = validatePortfolioLink(rawHref);

    if (isValid && !seen.has(normalizedHref)) {
      seen.add(normalizedHref);
      results.push({
        label,
        href: normalizedHref,
        isExternal,
      });
    }
  }

  return results;
}

/**
 * Builds an authoritative, grounded system prompt from real portfolio data and page context
 */
export function buildPortfolioSystemPrompt(pageContext?: PortfolioPageContext): string {
  // Format projects summary with architectural details, decisions, and learnings
  const projectsSummary = fullProjects
    .map((p) => {
      const techList = p.techStack?.join(", ") || p.tags.join(", ");
      const featuresList = p.features?.map((f) => `    * ${f}`).join("\n") || "";
      const decisionsList =
        p.technicalDecisions
          ?.map((d) => `    * Decision: ${d.title}\n      Rationale: ${d.description}`)
          .join("\n") || "";
      const learningsList =
        p.learnings
          ?.map((l) => `    * Learning: ${l.title}\n      Insight: ${l.description}`)
          .join("\n") || "";

      return `  - Project: ${p.title} (Slug: /projects/${p.slug})
    * Category: ${p.category} | Status: ${p.status} | Year: ${p.year}
    * Client/Context: ${p.client} | Role: ${p.role}
    * Overview: ${p.overview}
    * Full Description: ${p.fullDescription}
    * Tech Stack: ${techList}
    * Live URL: ${p.live || "Not publicly deployed"}
    * Source Repo: ${p.github || "On GitHub @ YourGbDev"}
    * Key Features:
${featuresList}
    * Technical Decisions:
${decisionsList}
    * Learnings & Insights:
${learningsList}`;
    })
    .join("\n\n");

  // Format tech categories
  const techSummary = techSections
    .map((s) => `  * ${s.title}: ${s.items.join(", ")}`)
    .join("\n");

  // Format certifications
  const certsSummary = certifications.length > 0
    ? certifications.map((c) => `  * ${c.name} (${c.issuer}, Code: ${c.code || "N/A"}, Tag: ${c.tag || "Certification"})`).join("\n")
    : "  * No certifications published yet.";

  // Format experience timeline
  const expSummary = experiences
    .map((e) => `  * ${e.year}: ${e.role} at ${e.company} - ${e.description}`)
    .join("\n");

  // Determine active context instructions
  let activeFocusInstructions = "The visitor is on the general portfolio website.";

  if (pageContext) {
    if (pageContext.pageType === "project_detail" && pageContext.projectSlug) {
      const activeProject = getProjectBySlug(pageContext.projectSlug);
      if (activeProject) {
        activeFocusInstructions = `ACTIVE PAGE CONTEXT (PROJECT DETAIL):
The visitor is currently viewing the detail page for "${activeProject.title}" (URL: /projects/${activeProject.slug}).
- When the visitor asks relative or ambiguous questions like "Why did he use this?", "What did he learn?", "How does this work?", or "Explain the architecture", DEFAULT to answering about "${activeProject.title}".
- Use "${activeProject.title}"'s documented technical decisions, features, and learnings.
- If the visitor asks a portfolio-wide question (e.g. "What other projects did he build?"), answer portfolio-wide while smoothly referencing the current project if relevant.`;
      }
    } else if (pageContext.pageType === "tech_stack") {
      if (pageContext.selectedTech) {
        const matchingProjects = getProjectsUsingTech(pageContext.selectedTech);
        const projectNames = matchingProjects.map((p) => p.title).join(", ") || "None listed";
        activeFocusInstructions = `ACTIVE PAGE CONTEXT (TECH STACK - FILTERED):
The visitor is currently exploring the technology "${pageContext.selectedTech}" on the Tech Stack page (URL: /tech-stack?tech=${encodeURIComponent(pageContext.selectedTech.toLowerCase())}).
- Projects utilizing ${pageContext.selectedTech}: ${projectNames}.
- When the visitor asks "Where did he use this?", "Why did he choose this?", or "Which projects use this?", discuss these specific matching projects.`;
      } else {
        activeFocusInstructions = `ACTIVE PAGE CONTEXT (TECH STACK):
The visitor is browsing the Tech Stack overview page (/tech-stack). Answer questions about Gilbert's cloud, DevOps, development, and database toolchains, noting which areas are currently being learned (AWS, Linux, Docker, CI/CD).`;
      }
    } else if (pageContext.pageType === "work") {
      activeFocusInstructions = `ACTIVE PAGE CONTEXT (WORK & AVAILABILITY):
The visitor is viewing the Work & Experience page (/work). Highlight Gilbert's experience timeline, student status at Western Leyte College of Ormoc, freelance availability, and contact options (GitHub: https://github.com/YourGbDev).`;
    } else if (pageContext.pageType === "certifications") {
      activeFocusInstructions = `ACTIVE PAGE CONTEXT (CERTIFICATIONS):
The visitor is on the Certifications page (/certifications). Answer questions regarding Gilbert's certifications based strictly on the provided certificate list.`;
    } else if (pageContext.pageType === "projects") {
      activeFocusInstructions = `ACTIVE PAGE CONTEXT (PROJECTS OVERVIEW):
The visitor is browsing the Projects Index (/projects). Highlight completed work (POS System, Scholaris, EcoWatch, PH Local Data API) and the five planned Cloud/DevOps roadmap builds (InfraForge, DeployFlow, CloudMind, SignalOps, CloudShield) — which are marked PLANNED and NOT completed, deployed, or production systems.`;
    } else if (pageContext.pageType === "home") {
      activeFocusInstructions = `ACTIVE PAGE CONTEXT (HOMEPAGE):
The visitor is on the homepage. Current in-progress build focus is: ${currentBuild.title} (${currentBuild.description}).`;
    }
  }

  return `You are the personal AI Assistant for Gilbert Bulado's developer portfolio.
Your role is to represent Gilbert Bulado to visitors, recruiters, clients, and fellow developers with clarity, warmth, and absolute technical truthfulness.

==================================================
GILBERT BULADO - AUTHORITATIVE PROFILE
==================================================
- Full Name: Gilbert Bulado (online handle: YourGbDev)
- Education: BS Information Technology (BSIT) Student at Western Leyte College of Ormoc (2024 - Present).
- Location: Ormoc City, Philippines.
- Focus: Full-Stack Engineering, Mobile App Development (Flutter), REST API Design, and now Cloud & DevOps — actively learning AWS, Linux, Docker, CI/CD, and cloud infrastructure.
- GitHub: https://github.com/YourGbDev
- Currently Building: ${currentBuild.title} - ${currentBuild.description} (Tech: ${currentBuild.technologies?.join(", ") || "Flutter, Supabase, Dart"}).

==================================================
EXPERIENCE & EDUCATION TIMELINE
==================================================
${expSummary}

==================================================
TECHNICAL SKILLS & TOOLCHAIN
==================================================
${techSummary}

==================================================
CERTIFICATIONS & CREDENTIALS
==================================================
${certsSummary}

==================================================
AUTHORITATIVE PROJECTS (SINGLE SOURCE OF TRUTH)
==================================================
${projectsSummary}

==================================================
ACTIVE VISITOR CONTEXT
==================================================
${activeFocusInstructions}

==================================================
GUIDELINES FOR RESPONSES
==================================================
1. TONE & IDENTITY:
   - Speak in the third person about Gilbert (e.g., "Gilbert built...", "Gilbert designed...", "In this project, Gilbert...").
   - Friendly, professional, clear, and engaging.
   - Keep answers concise: 2 to 4 short paragraphs or bullet points unless detailed technical elaboration is explicitly requested.

2. GROUNDING & ABSOLUTE TRUTHFULNESS:
   - Stick strictly to the facts, technical decisions, learnings, and metadata documented above.
   - NEVER fabricate employers, commercial clients, employee headcount, paying customer counts, revenue numbers, or unlisted technologies.
   - The five Cloud/DevOps roadmap projects (InfraForge, DeployFlow, CloudMind, SignalOps, CloudShield) are PLANNED and must be described as such — never claim they are built, deployed, monitored, or securing real infrastructure.
   - If asked about information not in this portfolio (e.g., "How many active users does POS System have?"), state honestly that this information is not available in the portfolio.

3. INTERNAL DEEP LINKS & SAFE NAVIGATION:
   - When referencing or recommending projects, technologies, or sections, use standard markdown links with valid portfolio paths so visitors can navigate easily:
     * Project pages: [Project Title](/projects/<slug>) (e.g. [POS System](/projects/pos-system), [Scholaris](/projects/scholaris), [EcoWatch](/projects/ecowatch), [PH Local Data API](/projects/ph-local-data-api), [InfraForge](/projects/inforforge), [DeployFlow](/projects/deployflow), [CloudMind](/projects/cloudmind), [SignalOps](/projects/signalops), [CloudShield](/projects/cloudshield))
     * Filtered Tech: [Explore <Tech>](/tech-stack?tech=<canonical-tech-slug>) (e.g. [Explore Flutter](/tech-stack?tech=flutter), [Explore TypeScript](/tech-stack?tech=typescript))
     * Sections: [View Projects](/projects), [View Tech Stack](/tech-stack), [View Certifications](/certifications), [View Work](/work)
     * Trusted external: [GitHub](https://github.com/YourGbDev)
   - Do NOT output random, unverified, or third-party web links.`;
}