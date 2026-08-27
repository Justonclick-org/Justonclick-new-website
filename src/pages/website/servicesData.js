import {
  Blocks,
  Bot,
  Boxes,
  Brain,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Globe,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  MonitorSmartphone,
  MoveRight,
  Palette,
  PlugZap,
  RefreshCw,
  Repeat,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  UserPlus,
  Users,
} from "lucide-react";

/** All 23 Justonclick service lines (Section 4). */
export const SERVICES = [
  {
    id: "custom-software-development",
    num: "4.1",
    group: "Build",
    icon: Code2,
    title: "Custom Software Development",
    overview:
      "Bespoke software built around your exact workflows, not a generic feature set forced into your business. We handle everything from requirements discovery to architecture, build, and long-term support.",
    benefits: [
      "Eliminates workarounds forced by off-the-shelf tools",
      "Software that scales with your business model, not against it",
      "Full ownership of source code and architecture",
      "A single team accountable from spec to production",
    ],
    process: ["Discovery & requirements", "Solution architecture", "Iterative build & QA", "Deployment & support"],
    tech: ["React/Next.js", "Node.js/NestJS", "Java/Spring Boot", ".NET", "Python", "PostgreSQL/MongoDB"],
    industries: ["Banking & Finance", "Manufacturing", "Logistics", "Healthcare"],
    deliverables: [
      "Requirements & architecture documentation",
      "Production-ready application",
      "Source code & deployment pipeline",
      "Knowledge transfer & support plan",
    ],
    faqs: [
      {
        q: "Do we own the source code?",
        a: "Yes, full IP ownership transfers to the client on delivery, per the engagement agreement.",
      },
      {
        q: "How long does a custom build take?",
        a: "It depends on scope; a typical MVP runs 8-14 weeks, communicated precisely after discovery.",
      },
    ],
    cta: "Start a Custom Build",
  },
  {
    id: "enterprise-software-development",
    num: "4.2",
    group: "Build",
    icon: Boxes,
    title: "Enterprise Software Development",
    overview:
      "Large-scale, multi-department systems built for organizations where reliability, integration depth, and long-term maintainability matter more than speed to a demo.",
    benefits: [
      "Built for scale and multi-team usage from day one",
      "Integrates cleanly with existing enterprise systems",
      "Governed by enterprise-grade security and access control",
      "Engineered for multi-year maintainability",
    ],
    process: [
      "Enterprise requirements & stakeholder mapping",
      "Architecture & integration design",
      "Phased delivery",
      "Change management & rollout support",
    ],
    tech: ["Java/Spring Boot", ".NET", "Node.js", "PostgreSQL/SQL Server", "Kubernetes", "OAuth/SSO/IAM"],
    industries: ["Banking & Finance", "Insurance", "Government", "Manufacturing"],
    deliverables: [
      "Enterprise architecture blueprint",
      "Phased rollout plan",
      "Integration layer with existing systems",
      "Training & change management materials",
    ],
    faqs: [
      {
        q: "How do you handle integration with our existing legacy systems?",
        a: "Through an integration-first architecture phase before any build work starts, mapping every existing system boundary.",
      },
      {
        q: "What about data migration?",
        a: "Migration is scoped and tested against a staging environment before any production cutover.",
      },
    ],
    cta: "Discuss an Enterprise Build",
  },
  {
    id: "web-application-development",
    num: "4.3",
    group: "Build",
    icon: Globe,
    title: "Web Application Development",
    overview:
      "Fast, accessible, SEO-ready web applications and platforms engineered for real usage patterns, not just demo polish.",
    benefits: [
      "Performance and accessibility built in, not retrofitted",
      "SEO-ready architecture from the first commit",
      "Responsive across every device and screen size",
      "A clean, documented codebase your team can maintain long-term",
    ],
    process: ["UX & information architecture", "Design system", "Build & QA", "Performance & SEO audit", "Launch"],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    industries: ["Retail", "Real Estate", "Hospitality", "Education"],
    deliverables: [
      "Responsive web application",
      "Documented component/design system",
      "Performance & accessibility audit report",
      "Launch support",
    ],
    faqs: [
      {
        q: "Will the site work well on mobile?",
        a: "Every build is responsive-first and tested across real device breakpoints, not just browser resizing.",
      },
      {
        q: "Do you handle SEO?",
        a: "Baseline technical SEO — semantic markup, performance, metadata — is included in every build.",
      },
    ],
    cta: "Start a Web Project",
  },
  {
    id: "mobile-app-development",
    num: "4.4",
    group: "Build",
    icon: Smartphone,
    title: "Mobile App Development",
    overview:
      "iOS and Android apps engineered to feel native, launch cleanly through app store review, and stay maintainable long after version one.",
    benefits: [
      "Native performance and feel on both platforms",
      "A single codebase option (React Native/Flutter) where it genuinely fits the product",
      "App store submission handled end-to-end",
      "A maintenance path defined before launch, not improvised after",
    ],
    process: [
      "Platform strategy (native vs. cross-platform)",
      "UX & prototyping",
      "Build & device testing",
      "Store submission",
      "Post-launch support",
    ],
    tech: ["React Native", "Flutter", "Swift/Kotlin (native)", "Node.js backend"],
    industries: ["Retail", "Healthcare", "Logistics", "Human Resources"],
    deliverables: [
      "Production-ready iOS/Android app",
      "App store listing & submission",
      "Source code and documentation",
      "Maintenance roadmap",
    ],
    faqs: [
      {
        q: "Native or cross-platform, which is right for us?",
        a: "We assess based on your performance needs, device features, and budget, rather than defaulting to one stack.",
      },
      {
        q: "Who owns the app store account?",
        a: "Client-owned developer accounts are used wherever possible, so the client retains full control.",
      },
    ],
    cta: "Discuss Your App",
  },
  {
    id: "saas-product-development",
    num: "4.5",
    group: "Build",
    icon: Blocks,
    title: "SaaS Product Development",
    overview:
      "Multi-tenant, subscription-ready software products architected for the operational realities of running a SaaS business, not just the first release.",
    benefits: [
      "Multi-tenancy and role-based access built in from the architecture stage",
      "Billing/subscription-ready foundations",
      "Observability and support tooling designed in from day one",
      "A roadmap structure that supports continuous iteration post-launch",
    ],
    process: [
      "Product & business model discovery",
      "Multi-tenant architecture design",
      "MVP build",
      "Iterative feature delivery",
    ],
    tech: ["Next.js", "Node.js/NestJS", "PostgreSQL", "Redis", "AWS/Azure", "Payment integrations"],
    industries: ["Human Resources", "Procurement", "Banking & Finance", "Logistics"],
    deliverables: ["Multi-tenant SaaS architecture", "MVP release", "Admin & billing tooling", "Iteration roadmap"],
    faqs: [
      {
        q: "Can you help us validate the idea before a full build?",
        a: "Yes, we typically recommend an MVP scope specifically designed to validate the riskiest assumption first.",
      },
      {
        q: "Do you support post-launch feature development?",
        a: "Yes, this is typically run as an ongoing dedicated-team engagement.",
      },
    ],
    cta: "Build Your SaaS Product",
  },
  {
    id: "ui-ux-design",
    num: "4.6",
    group: "Design",
    icon: Palette,
    title: "UI/UX Design",
    overview:
      "Interface design grounded in how real users actually behave, not just visual trends — wireframed, tested, and handed off as a build-ready system.",
    benefits: [
      "Designs based on user flows, not just aesthetics",
      "A reusable design system, not one-off screens",
      "Accessibility considered from the first wireframe",
      "A build-ready handoff that engineering can implement without guesswork",
    ],
    process: [
      "User research & flows",
      "Wireframes",
      "Visual design system",
      "Prototyping & usability testing",
      "Developer handoff",
    ],
    tech: ["Figma", "Design tokens", "WCAG accessibility guidelines"],
    industries: ["All industries served"],
    deliverables: [
      "User flow diagrams",
      "Wireframes & prototypes",
      "A documented design system",
      "Developer-ready handoff files",
    ],
    faqs: [
      {
        q: "Do you design and build, or just design?",
        a: "Both — design-only engagements are available where a client has their own engineering team.",
      },
      {
        q: "Do you test designs with real users?",
        a: "Usability testing is included wherever the engagement timeline and scope allow it.",
      },
    ],
    cta: "Start a Design Engagement",
  },
  {
    id: "api-development-integration",
    num: "4.7",
    group: "Build",
    icon: PlugZap,
    title: "API Development & Integration",
    overview:
      "Well-documented, secure APIs that connect your systems to each other and to the outside world without becoming a maintenance liability.",
    benefits: [
      "Clean, versioned API design that survives change",
      "Authentication and rate-limiting handled correctly from day one",
      "Full documentation so integrations don't depend on tribal knowledge",
      "Integration with third-party platforms handled end-to-end",
    ],
    process: [
      "API contract design",
      "Build & security hardening",
      "Documentation",
      "Integration testing",
      "Monitoring setup",
    ],
    tech: ["REST/GraphQL", "Node.js", "Java", "OAuth/JWT", "OpenAPI/Swagger"],
    industries: ["Banking & Finance", "Logistics", "Retail", "Procurement"],
    deliverables: [
      "API specification & documentation",
      "Secure, versioned API implementation",
      "Integration test suite",
      "Monitoring & alerting setup",
    ],
    faqs: [
      {
        q: "Do you provide API documentation?",
        a: "Every API ships with OpenAPI/Swagger documentation as a standard deliverable.",
      },
      {
        q: "Can you integrate with our existing third-party tools?",
        a: "Yes, integration work is scoped explicitly during discovery against your existing tool stack.",
      },
    ],
    cta: "Talk About an Integration",
  },
  {
    id: "cloud-solutions",
    num: "4.8",
    group: "Cloud & Ops",
    icon: CloudCog,
    title: "Cloud Solutions",
    overview:
      "Cloud architecture, setup, and migration designed for the infrastructure a business actually needs at its current and next stage of growth.",
    benefits: [
      "Right-sized infrastructure instead of over- or under-provisioning",
      "A documented, repeatable environment instead of manual configuration",
      "Cost visibility and optimization built into the setup",
      "A migration path that doesn't require a pause on the product roadmap",
    ],
    process: [
      "Infrastructure & cost assessment",
      "Architecture design",
      "Migration or setup",
      "Monitoring & optimization",
    ],
    tech: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    industries: ["All industries served"],
    deliverables: [
      "Cloud architecture documentation",
      "Migration or provisioning execution",
      "Monitoring & cost dashboards",
      "A runbook for ongoing operations",
    ],
    faqs: [
      {
        q: "Which cloud provider do you recommend?",
        a: "It depends on your existing stack, compliance needs, and team familiarity — we assess rather than default to one vendor.",
      },
      {
        q: "Can you migrate us without downtime?",
        a: "Zero or near-zero downtime migration is planned for wherever the target architecture supports it.",
      },
    ],
    cta: "Plan Your Cloud Setup",
  },
  {
    id: "devops-infrastructure-automation",
    num: "4.9",
    group: "Cloud & Ops",
    icon: GitBranch,
    title: "DevOps & Infrastructure Automation",
    overview:
      "CI/CD pipelines, infrastructure-as-code, and monitoring that turn deployment from a risky event into a routine one.",
    benefits: [
      "Deploys become repeatable and low-risk instead of manual and stressful",
      "Infrastructure defined as code, not tribal knowledge",
      "Monitoring and alerting catch issues before customers do",
      "Environment parity between staging and production",
    ],
    process: ["Current-state audit", "Pipeline & IaC design", "Implementation", "Monitoring & handover"],
    tech: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible"],
    industries: ["All industries served"],
    deliverables: [
      "CI/CD pipeline configuration",
      "Infrastructure-as-code repository",
      "Monitoring & alerting setup",
      "Documented runbooks",
    ],
    faqs: [
      {
        q: "Do we need Kubernetes for this?",
        a: "Only where your scale and deployment complexity actually justify it — we right-size the recommendation.",
      },
      {
        q: "Can you work with our existing DevOps team?",
        a: "Yes, this is commonly run as a staff augmentation or dedicated-team engagement alongside an existing team.",
      },
    ],
    cta: "Automate Your Infrastructure",
  },
  {
    id: "ai-machine-learning",
    num: "4.10",
    group: "Data & AI",
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    overview:
      "Practical AI and ML built around a specific business problem — not a proof-of-concept that never reaches production.",
    benefits: [
      "Solutions scoped around a measurable business outcome, not a technology demo",
      "Production-grade deployment, not a notebook that never ships",
      "A clear evaluation framework so results can be measured and trusted",
      "Guardrails and monitoring appropriate for AI systems specifically",
    ],
    process: [
      "Problem framing & data assessment",
      "Model/approach selection",
      "Build & evaluation",
      "Production deployment & monitoring",
    ],
    tech: ["Python", "OpenAI", "LangChain", "MCP", "Vector databases", "Classical ML", "NLP"],
    industries: ["Banking & Finance", "Retail", "Logistics", "Human Resources"],
    deliverables: [
      "Problem & data assessment report",
      "Working model or AI system",
      "Evaluation results against defined metrics",
      "Production deployment with monitoring",
    ],
    faqs: [
      {
        q: "Do you build custom models or use existing AI APIs?",
        a: "Both — we choose based on what actually solves the problem fastest and most reliably.",
      },
      {
        q: "How do you handle AI accuracy and reliability concerns?",
        a: "Every AI system ships with an evaluation framework and monitoring, not just a launch-day demo.",
      },
    ],
    cta: "Explore an AI Use Case",
  },
  {
    id: "data-engineering-analytics",
    num: "4.11",
    group: "Data & AI",
    icon: Database,
    title: "Data Engineering & Analytics",
    overview:
      "Data pipelines and analytics infrastructure that turn scattered operational data into something leadership can actually query and trust.",
    benefits: [
      "A single source of truth instead of conflicting spreadsheets",
      "Pipelines that run reliably on schedule, not manually triggered",
      "Dashboards built around the questions leadership actually asks",
      "A data architecture that scales as data volume grows",
    ],
    process: [
      "Data source & requirements audit",
      "Pipeline & warehouse design",
      "Build & validation",
      "Dashboarding & handover",
    ],
    tech: ["Python", "PostgreSQL", "Cloud data warehouses", "ETL/ELT tooling"],
    industries: ["Banking & Finance", "Retail", "Manufacturing", "Logistics"],
    deliverables: [
      "Data architecture documentation",
      "Production data pipelines",
      "Validated data warehouse/store",
      "Reporting dashboards",
    ],
    faqs: [
      {
        q: "Can you work with our existing BI tool?",
        a: "Yes, pipeline output is designed to feed whichever BI or dashboarding tool your team already uses.",
      },
      {
        q: "How do you ensure data quality?",
        a: "Validation checks are built into the pipeline itself, not left to manual spot-checking downstream.",
      },
    ],
    cta: "Talk About Your Data",
  },
  {
    id: "business-process-automation",
    num: "4.12",
    group: "Data & AI",
    icon: Repeat,
    title: "Business Process Automation",
    overview:
      "Automating the repetitive, error-prone manual workflows that quietly consume operational time every week.",
    benefits: [
      "Removes manual, repetitive work from your team's week",
      "Reduces the error rate that comes with manual data entry and reconciliation",
      "Gives visibility into a process that previously lived in someone's head",
      "Frees skilled staff for higher-value work",
    ],
    process: [
      "Process mapping & bottleneck identification",
      "Automation design",
      "Build & testing",
      "Rollout & monitoring",
    ],
    tech: ["Node.js/Python scripting", "Workflow engines", "API integrations", "RPA where appropriate"],
    industries: ["Human Resources", "Procurement", "Banking & Finance", "Logistics"],
    deliverables: [
      "Process map & automation opportunity assessment",
      "Automated workflow implementation",
      "Monitoring & exception-handling setup",
      "Documentation for the automated process",
    ],
    faqs: [
      {
        q: "What kinds of processes are good automation candidates?",
        a: "Any repetitive, rule-based process with a clear trigger and outcome — payroll runs and reconciliation are common examples.",
      },
      {
        q: "Will this replace staff?",
        a: "The goal is removing repetitive manual work, not roles — most engagements free staff for higher-value work.",
      },
    ],
    cta: "Find an Automation Opportunity",
  },
  {
    id: "erp-crm-development",
    num: "4.13",
    group: "Platforms",
    icon: LayoutDashboard,
    title: "ERP & CRM Development",
    overview:
      "Enterprise resource planning and customer relationship management systems built around your actual operating model, not a rigid template.",
    benefits: [
      "Modules that match how your business actually operates, not a generic template",
      "A single system of record instead of disconnected spreadsheets and tools",
      "Role-based access matched to your organizational structure",
      "A system built to be extended as the business grows",
    ],
    process: ["Business process discovery", "Module & data model design", "Phased build", "Rollout & training"],
    tech: ["Node.js/Java/.NET backend", "PostgreSQL/SQL Server", "React/Next.js front end"],
    industries: ["Manufacturing", "Construction", "Retail", "Procurement"],
    deliverables: [
      "Documented process & data model",
      "Production ERP/CRM system",
      "Role-based access configuration",
      "User training & rollout plan",
    ],
    faqs: [
      {
        q: "Can this replace multiple tools we currently use?",
        a: "That's usually the goal — consolidating fragmented spreadsheets and point tools into one system of record.",
      },
      {
        q: "Can it integrate with our accounting software?",
        a: "Yes, integration with existing accounting/finance tools is scoped during discovery.",
      },
    ],
    cta: "Discuss Your ERP/CRM Needs",
  },
  {
    id: "hrms-development",
    num: "4.14",
    group: "Platforms",
    icon: Users,
    title: "HRMS Development",
    overview:
      "HR, attendance, payroll, and compliance software — the same category of system Justonclick designs, builds, and operates for its own team.",
    benefits: [
      "A single system for attendance, payroll, and compliance instead of five loosely connected files",
      "Statutory compliance rules applied automatically, not chased down manually",
      "A self-service portal that reduces routine HR queries",
      "Built by a team that operates this exact category of system daily",
    ],
    process: [
      "HR process & compliance discovery",
      "System design",
      "Build & payroll validation",
      "Rollout & training",
    ],
    tech: ["Node.js", "PostgreSQL", "React/Next.js", "Biometric/attendance integrations"],
    industries: ["All industries served"],
    deliverables: [
      "HR & payroll system tailored to your policies",
      "Compliance rule configuration",
      "Employee self-service portal",
      "Rollout & training support",
    ],
    faqs: [
      {
        q: "Have you built this kind of system before?",
        a: "Yes — Justonclick HRMS & Payroll (Section 5) is our own in-house platform, built and operated using this exact expertise.",
      },
      {
        q: "Can it handle multi-location or multi-state compliance?",
        a: "Yes, this is scoped explicitly during discovery against your specific compliance requirements.",
      },
    ],
    cta: "Discuss an HRMS Build",
  },
  {
    id: "procurement-solutions",
    num: "4.15",
    group: "Platforms",
    icon: Bot,
    title: "Procurement Solutions",
    overview:
      "Vendor management, purchase order, and procurement workflow software that replaces email threads and spreadsheets with an auditable system.",
    benefits: [
      "A single, auditable trail for every purchase request and approval",
      "Vendor management and comparison in one place instead of scattered emails",
      "Approval workflows matched to your actual sign-off structure",
      "Reporting that answers spend questions in minutes, not days",
    ],
    process: [
      "Procurement workflow discovery",
      "System & vendor portal design",
      "Build & testing",
      "Rollout & training",
    ],
    tech: ["Node.js", "PostgreSQL", "React/Next.js"],
    industries: ["Manufacturing", "Construction", "Government", "Retail"],
    deliverables: [
      "Documented procurement workflow",
      "Purchase order & approval system",
      "Vendor portal",
      "Spend reporting & analytics",
    ],
    faqs: [
      {
        q: "Can vendors access the system directly?",
        a: "Yes, a dedicated vendor portal for quotes, POs, and status is a standard part of this offering.",
      },
      {
        q: "Can it integrate with our existing accounting system?",
        a: "Yes, integration is scoped during discovery against your specific finance stack.",
      },
    ],
    cta: "Discuss a Procurement System",
  },
  {
    id: "e-commerce-development",
    num: "4.16",
    group: "Platforms",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    overview:
      "Online stores and marketplace platforms engineered for conversion, performance, and the operational reality of running inventory and orders at scale.",
    benefits: [
      "Fast, conversion-focused storefront experience",
      "Inventory, order, and payment flows that hold up under real traffic",
      "Integration with existing payment gateways and logistics providers",
      "An admin experience your team can actually run day to day",
    ],
    process: [
      "Catalog & checkout flow design",
      "Storefront & admin build",
      "Payment & logistics integration",
      "Launch & performance testing",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe/Razorpay", "Headless commerce platforms"],
    industries: ["Retail", "Hospitality", "Manufacturing"],
    deliverables: [
      "Production e-commerce storefront",
      "Admin & inventory management system",
      "Payment & logistics integrations",
      "Launch support",
    ],
    faqs: [
      {
        q: "Can you build on an existing platform like Shopify, or fully custom?",
        a: "Both — the right choice depends on your catalog complexity and how much custom logic you need.",
      },
      {
        q: "Do you handle payment gateway integration?",
        a: "Yes, integration with your preferred payment provider is a standard deliverable.",
      },
    ],
    cta: "Start Your E-Commerce Build",
  },
  {
    id: "qa-software-testing",
    num: "4.17",
    group: "Quality",
    icon: ShieldCheck,
    title: "QA & Software Testing",
    overview: "Manual and automated testing built into the delivery process, not bolted on right before launch.",
    benefits: [
      "Bugs caught before they reach production, not after a customer reports them",
      "Automated regression coverage that scales with the codebase",
      "Performance and load testing before launch, not after an incident",
      "A documented test suite your team can maintain long-term",
    ],
    process: [
      "Test strategy & coverage planning",
      "Automated test suite build",
      "Manual & exploratory testing",
      "Performance/load testing",
      "Reporting",
    ],
    tech: ["Jest", "Cypress", "Selenium", "Playwright"],
    industries: ["All industries served"],
    deliverables: [
      "Test strategy documentation",
      "Automated test suite",
      "Test execution & bug reports",
      "Performance/load test results",
    ],
    faqs: [
      {
        q: "Do you test existing applications, or only new builds?",
        a: "Both — QA engagements are commonly run on existing systems that never had proper test coverage.",
      },
      {
        q: "Can this run as a standalone engagement?",
        a: "Yes, QA & testing is available as its own engagement, independent of a build project.",
      },
    ],
    cta: "Improve Your Test Coverage",
  },
  {
    id: "application-modernization",
    num: "4.18",
    group: "Modernize",
    icon: RefreshCw,
    title: "Application Modernization",
    overview:
      "Bringing outdated applications up to a maintainable, secure, and scalable standard without a disruptive full rebuild.",
    benefits: [
      "Reduced technical debt without pausing the product roadmap",
      "Improved performance and security on a codebase your team already knows",
      "A phased path instead of a risky big-bang rewrite",
      "Documentation that didn't exist before the engagement",
    ],
    process: [
      "Codebase & architecture audit",
      "Modernization roadmap",
      "Phased implementation",
      "Validation & handover",
    ],
    tech: ["Varies by existing stack", "Node.js", "React", "Cloud-native infrastructure"],
    industries: ["Banking & Finance", "Manufacturing", "Government", "Insurance"],
    deliverables: [
      "Technical audit report",
      "Modernization roadmap",
      "Phased implementation",
      "Updated documentation",
    ],
    faqs: [
      {
        q: "Do we have to rewrite everything at once?",
        a: "No — a phased approach is the default recommendation unless the existing system is genuinely unsalvageable.",
      },
      {
        q: "Can you modernize without downtime?",
        a: "Yes, phased modernization is specifically designed to avoid a disruptive cutover.",
      },
    ],
    cta: "Assess Your Application",
  },
  {
    id: "legacy-system-migration",
    num: "4.19",
    group: "Modernize",
    icon: MoveRight,
    title: "Legacy System Migration",
    overview:
      "Moving critical systems off outdated, unsupported, or high-risk platforms onto modern infrastructure without losing data or business continuity.",
    benefits: [
      "Removes dependency on unsupported or end-of-life platforms",
      "Reduces the operational risk of a system no one fully understands anymore",
      "Data integrity validated before any production cutover",
      "A rollback plan for every migration stage",
    ],
    process: [
      "Legacy system audit",
      "Migration architecture & data mapping",
      "Staged migration & validation",
      "Cutover & support",
    ],
    tech: ["Varies by source/target systems", "ETL tooling", "Cloud infrastructure"],
    industries: ["Banking & Finance", "Government", "Manufacturing", "Insurance"],
    deliverables: [
      "Migration plan & data mapping",
      "Staged migration execution",
      "Validation & reconciliation report",
      "Post-migration support",
    ],
    faqs: [
      {
        q: "What happens if something goes wrong during migration?",
        a: "Every migration stage has a defined rollback plan, tested before the production cutover.",
      },
      {
        q: "How do you handle data validation?",
        a: "Source and target data are reconciled and validated before the legacy system is retired.",
      },
    ],
    cta: "Plan Your Migration",
  },
  {
    id: "it-consulting",
    num: "4.20",
    group: "Advisory",
    icon: Lightbulb,
    title: "IT Consulting",
    overview:
      "Independent technical guidance on architecture, technology choices, and delivery approach — informed by a team that also builds and operates production software itself.",
    benefits: [
      "Recommendations grounded in hands-on delivery experience, not slideware",
      "Independent assessment before any commitment to a build",
      "A clear, prioritized roadmap rather than a generic audit",
      "Guidance that accounts for your team's actual capacity and constraints",
    ],
    process: [
      "Discovery & stakeholder interviews",
      "Technical assessment",
      "Roadmap & recommendations",
      "Optional implementation support",
    ],
    tech: ["Technology-agnostic assessment, grounded in the full stack in Section 9"],
    industries: ["All industries served"],
    deliverables: [
      "Technical assessment report",
      "Prioritized roadmap",
      "Architecture recommendations",
      "Optional implementation partnership",
    ],
    faqs: [
      {
        q: "Do you only recommend solutions you'd then build yourselves?",
        a: "No — recommendations are made independent of whether Justonclick delivers the implementation.",
      },
      {
        q: "How long does an assessment take?",
        a: "Typically 2-4 weeks depending on system complexity, agreed upfront.",
      },
    ],
    cta: "Book a Consulting Session",
  },
  {
    id: "managed-it-services",
    num: "4.21",
    group: "Advisory",
    icon: LifeBuoy,
    title: "Managed IT Services",
    overview:
      "Ongoing, SLA-backed operation and support for infrastructure and applications, so internal teams aren't carrying an on-call burden alone.",
    benefits: [
      "A defined SLA instead of best-effort support",
      "Proactive monitoring that catches issues before they become incidents",
      "A single accountable partner for infrastructure and application support",
      "Capacity to scale support up during high-risk periods",
    ],
    process: [
      "Onboarding & system audit",
      "SLA & monitoring setup",
      "Ongoing operation & support",
      "Regular review & reporting",
    ],
    tech: ["AWS/Azure/GCP", "Monitoring & alerting tooling"],
    industries: ["All industries served"],
    deliverables: [
      "SLA agreement & escalation process",
      "Monitoring & alerting setup",
      "Ongoing support & incident response",
      "Regular performance reporting",
    ],
    faqs: [
      {
        q: "What's covered under managed services?",
        a: "Scope is defined explicitly in the SLA — commonly infrastructure monitoring, incident response, and routine maintenance.",
      },
      {
        q: "Can you take over support for a system you didn't build?",
        a: "Yes, following an onboarding audit to document the existing system first.",
      },
    ],
    cta: "Discuss Managed Support",
  },
  {
    id: "staff-augmentation",
    num: "4.22",
    group: "Teams",
    icon: UserPlus,
    title: "Staff Augmentation",
    overview:
      "Individual engineers or designers who plug directly into your existing team and process, without the overhead of a full engagement.",
    benefits: [
      "Add specific skills or capacity without a lengthy hiring process",
      "Augmented staff work inside your existing tools and process, not a separate one",
      "Flexible scaling up or down as project needs change",
      "Direct access to the engineer, not a layer of account management",
    ],
    process: [
      "Skills & capacity gap assessment",
      "Candidate matching",
      "Onboarding into your process",
      "Ongoing performance check-ins",
    ],
    tech: ["Matched to your existing stack"],
    industries: ["All industries served"],
    deliverables: [
      "Matched engineer(s) onboarded to your team",
      "Regular check-ins on fit and performance",
      "Flexible scaling as needs change",
    ],
    faqs: [
      {
        q: "How quickly can an engineer start?",
        a: "Typically within 1-2 weeks of a confirmed scope, depending on skill match availability.",
      },
      {
        q: "Can augmented staff be converted to a dedicated team later?",
        a: "Yes, staff augmentation commonly scales into a dedicated team engagement as needs grow.",
      },
    ],
    cta: "Request Staff Augmentation",
  },
  {
    id: "dedicated-development-teams",
    num: "4.23",
    group: "Teams",
    icon: MonitorSmartphone,
    title: "Dedicated Development Teams",
    overview:
      "A cross-functional team embedded with you long-term, built around your product roadmap rather than a single fixed deliverable.",
    benefits: [
      "A stable team that builds deep product knowledge over time, not a rotating cast",
      "Scales up or down with your roadmap instead of being re-scoped project by project",
      "The same delivery discipline used on Justonclick's own products",
      "Direct communication with the team building your product",
    ],
    process: [
      "Roadmap & team composition planning",
      "Team assembly & onboarding",
      "Sprint-based delivery",
      "Ongoing roadmap alignment",
    ],
    tech: ["Matched to your product's stack"],
    industries: ["All industries served"],
    deliverables: [
      "A dedicated cross-functional team",
      "Sprint-based delivery cadence",
      "Regular roadmap and capacity reviews",
      "Direct access to the team",
    ],
    faqs: [
      {
        q: "How is this different from staff augmentation?",
        a: "A dedicated team owns outcomes against your roadmap; staff augmentation adds individuals into your existing process.",
      },
      {
        q: "What's the minimum engagement length?",
        a: "Dedicated team engagements are structured for long-term product work, typically a minimum of 3 months.",
      },
    ],
    cta: "Build a Dedicated Team",
  },
];

export const SERVICE_GROUPS = [
  "All",
  ...Array.from(new Set(SERVICES.map((s) => s.group))),
];
