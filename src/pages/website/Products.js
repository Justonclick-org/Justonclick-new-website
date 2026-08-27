import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  Activity,
  AlarmClock,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CalendarCheck,
  ClipboardList,
  Cpu,
  ExternalLink,
  FileSpreadsheet,
  Gauge,
  HelpCircle,
  Image as ImageIcon,
  Layers,
  Lock,
  Plug,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Truck,
  UserCircle,
  Users,
  Wallet,
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Products.css";
import "./Pages.css";

const delay = (i) => ({ transitionDelay: `${Math.min(i, 6) * 90}ms` });

const HRMS = {
  id: "hrms",
  tone: "blue",
  section: "5.2",
  name: "Justonclick HRMS & Payroll",
  tagline: "One platform for people, attendance, and pay.",
  summary:
    "Automate hiring, attendance, leave, payroll, and compliance in a single, secure platform your HR team will actually enjoy using.",
  url: "https://hrms.justonclick.in/login",
  cta: "Open HRMS App",
  modules: [
    {
      icon: CalendarCheck,
      title: "Attendance & Leave",
      text: "Biometric, geo, and app-based attendance with configurable leave policies and approval workflows.",
    },
    {
      icon: Wallet,
      title: "Payroll & Compliance",
      text: "Accurate, automated payroll runs with statutory compliance (PF, ESI, TDS) built into every cycle.",
    },
    {
      icon: ClipboardList,
      title: "Onboarding & Offboarding",
      text: "Digital documentation, asset tracking, and structured checklists from day one to exit.",
    },
    {
      icon: UserCircle,
      title: "Employee Self-Service",
      text: "A dedicated portal for payslips, leave requests, reimbursements, and personal records.",
    },
    {
      icon: Target,
      title: "Performance Management",
      text: "Goal tracking, review cycles, and feedback loops that keep teams aligned and accountable.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      text: "Real-time dashboards on headcount, attrition, payroll cost, and compliance status.",
    },
  ],
  roles: [
    "Employee (self-service)",
    "Manager (approvals, team view)",
    "HR Admin (full configuration & compliance)",
    "Finance (payroll & cost reporting)",
  ],
  integrations: [
    "Biometric & geo-attendance devices",
    "Statutory compliance rule engines (PF, ESI, TDS)",
  ],
  benefits: [
    "Cuts payroll processing time from days to hours",
    "Reduces statutory compliance risk with built-in rule engines",
    "Gives every employee a modern self-service experience",
    "Centralizes HR data instead of scattering it across spreadsheets",
  ],
  bestFor: [
    "Growing SMEs running payroll on spreadsheets",
    "Multi-location teams that need consistent HR policy",
    "HR teams that need audit-ready compliance records",
  ],
  security:
    "Role-based access control, encrypted storage of employee PII, and audit logging on payroll and compliance actions.",
  faqs: [
    {
      q: "Can this scale to multiple office locations?",
      a: "Yes, attendance and leave policies can be configured per location while payroll and compliance stay centralized.",
    },
    {
      q: "Is there a mobile app for employees?",
      a: "Employee self-service is accessible via the web portal; a dedicated mobile app is on the product roadmap (Section 5.5).",
    },
  ],
};

const TRADING = {
  id: "trading",
  tone: "orange",
  section: "5.3",
  name: "Justonclick Trading Algo",
  tagline: "Build, backtest, and run trading strategies with confidence.",
  summary:
    "A systematic trading platform for designing strategies, testing them against historical data, and executing them automatically with built-in risk controls.",
  url: "https://trading.justonclick.in/",
  cta: "Open Trading App",
  modules: [
    {
      icon: Layers,
      title: "Strategy Builder",
      text: "Compose rule-based strategies visually or with code, without wiring up market data plumbing yourself.",
    },
    {
      icon: Activity,
      title: "Backtesting Engine",
      text: "Validate strategies against historical market data before risking a single rupee.",
    },
    {
      icon: AlarmClock,
      title: "Real-Time Execution",
      text: "Automated order placement with low-latency signal-to-execution paths.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management",
      text: "Position sizing, stop-loss automation, and exposure limits enforced at the platform level.",
    },
    {
      icon: Plug,
      title: "Broker & Exchange Integrations",
      text: "Connect to supported brokers and data feeds through a unified integration layer.",
    },
    {
      icon: Gauge,
      title: "Performance Analytics",
      text: "Track drawdown, win rate, and strategy-level performance from one dashboard.",
    },
  ],
  roles: [
    "Individual Trader (strategy build & execution)",
    "Quant/Analyst (backtesting & performance review)",
    "Admin (risk limits & broker configuration)",
  ],
  integrations: ["Supported broker APIs", "Market data feed providers"],
  benefits: [
    "Removes manual execution errors from systematic trading",
    "Lets you validate an idea before committing capital",
    "Keeps risk rules enforced even when you're not watching the screen",
    "Brings every strategy's performance into one view",
  ],
  bestFor: [
    "Retail traders moving from manual to systematic trading",
    "Quant enthusiasts who want to test ideas rigorously",
    "Small prop desks that need a shared execution platform",
  ],
  security:
    "Encrypted credential storage for broker connections, platform-enforced risk limits, and activity logging on every executed trade.",
  faqs: [
    {
      q: "Which brokers are supported?",
      a: "Supported broker and exchange integrations are listed in-app and expanded over time; contact us to confirm support for a specific broker.",
    },
    {
      q: "Can I run multiple strategies at once?",
      a: "Yes, the platform is designed to run and monitor multiple strategies concurrently, each with its own risk limits.",
    },
  ],
  disclaimer:
    "Algorithmic trading involves substantial risk of loss and is not suitable for every investor. Backtested or historical performance is not indicative of future results. Justonclick Trading Algo is a technology platform and does not provide investment advice.",
};

const ROADMAP = [
  {
    icon: Smartphone,
    title: "Employee Mobile App",
    text: "A dedicated mobile companion to Justonclick HRMS & Payroll for attendance, leave, and payslips on the go.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Management System",
    text: "A standalone vendor and purchase-order management product, extending the Procurement Solutions service line into a packaged product.",
  },
  {
    icon: Cpu,
    title: "ERP",
    text: "A modular enterprise resource planning product, extending the ERP & CRM Development service line into a packaged product.",
  },
  {
    icon: Users,
    title: "CRM",
    text: "A customer relationship management product built for sales and account teams that need pipeline and relationship tracking without enterprise CRM overhead.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    text: "Stock, warehouse, and order visibility software for businesses currently tracking inventory manually or across spreadsheets.",
  },
  {
    icon: Truck,
    title: "Vendor Portal",
    text: "A self-service portal for vendors to submit quotes, track purchase orders, and manage their own profile, complementing Procurement Solutions.",
  },
  {
    icon: Building2,
    title: "Construction Management Platform",
    text: "Project, procurement, and workforce tracking built for the construction industry.",
  },
];

function DemoForm({ product }) {
  return (
    <div className="jocproducts-form joc-reveal joc-rv-blur">
      <span className="joc-bubble" />
      <h4 className="jocproducts-heading" style={{ fontSize: "1.15rem" }}>
        Request a demo
      </h4>
      <Row className="g-3">
        {[
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Work Email", type: "email" },
          { id: "company", label: "Company", type: "text" },
          { id: "phone", label: "Phone", type: "tel" },
        ].map((f) => (
          <Col md={6} key={f.id}>
            <label htmlFor={`${product}-${f.id}`}>{f.label}</label>
            <input id={`${product}-${f.id}`} name={f.id} type={f.type} />
          </Col>
        ))}
        <Col md={6}>
          <label htmlFor={`${product}-interest`}>Product of Interest</label>
          <select id={`${product}-interest`} name="interest" defaultValue={product}>
            <option value="hrms">Justonclick HRMS & Payroll</option>
            <option value="trading">Justonclick Trading Algo</option>
          </select>
        </Col>
        <Col md={6}>
          <label htmlFor={`${product}-size`}>Company Size</label>
          <select id={`${product}-size`} name="size" defaultValue="">
            <option value="">Select</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>
        </Col>
        <Col xs={12}>
          <label htmlFor={`${product}-message`}>Message</label>
          <textarea id={`${product}-message`} name="message" rows={4} />
        </Col>
      </Row>
      <p className="jocproducts-form-note mb-0">
        Submissions route to the sales contact listed on the Contact page. Form handling is not
        wired up on this static build yet.
      </p>
    </div>
  );
}

function ProductBlock({ p }) {
  const orange = p.tone === "orange";

  return (
    <section
      id={p.id}
      className={`jocproducts-section${orange ? " jocproducts-section-alt" : ""}`}
    >
      <Container>
        <div
          className={`jocproducts-banner jocproducts-banner-${p.tone} joc-reveal ${
            orange ? "joc-rv-right" : "joc-rv-left"
          }`}
        >
          <span className="jocproducts-banner-wave" />
          <span className="joc-bubble" />
          <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
          <span className="jocproducts-banner-tag">
            <Sparkles size={13} /> {p.section} · In production
          </span>
          <h2 className="mt-3">{p.name}</h2>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{p.tagline}</h3>
          <p className="mb-0">{p.summary}</p>
          <a className="jocproducts-applink" href={p.url} target="_blank" rel="noreferrer">
            {p.cta} <ExternalLink size={16} />
          </a>
        </div>

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">Modules</h3>
        <Row className="g-4">
          {p.modules.map((m, i) => (
            <Col md={6} xl={4} key={m.title}>
              <div
                className={`jocproducts-module joc-reveal ${
                  orange ? "joc-rv-flip jocproducts-module-orange" : "joc-rv-zoom"
                }`}
                style={delay(i)}
              >
                <span className={`joc-bubble${orange ? " joc-bubble-orange" : ""}`} />
                <span className="joc-bubble joc-bubble-bl" />
                <div className="jocproducts-module-icon">
                  <m.icon size={21} />
                </div>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </div>
            </Col>
          ))}
        </Row>

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">Screenshots</h3>
        <p className="jocproducts-note joc-reveal joc-rv-blur mt-0">
          <ImageIcon size={16} className="me-2" />
          [Placeholder — verify before publishing] Real product screenshots (dashboard, key workflow
          screens) will be added here. Illustrative mockups are currently used in place of real
          screenshots.
        </p>

        <Row className="g-4 mt-1">
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-left">
              <span className="joc-bubble" />
              <h4>
                <Users size={17} /> User Roles
              </h4>
              <ul className="jocproducts-list">
                {p.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-left" style={delay(1)}>
              <span className="joc-bubble joc-bubble-orange" />
              <h4>
                <Plug size={17} /> Integrations
              </h4>
              <ul className="jocproducts-list">
                {p.integrations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-right" style={delay(2)}>
              <span className="joc-bubble" />
              <h4>
                <Rocket size={17} /> Key Benefits
              </h4>
              <ul className="jocproducts-list">
                {p.benefits.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="jocproducts-panel joc-reveal joc-rv-right" style={delay(3)}>
              <span className="joc-bubble joc-bubble-orange" />
              <h4>
                <Target size={17} /> Best For
              </h4>
              <ul className="jocproducts-list">
                {p.bestFor.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mt-1">
          <Col lg={6}>
            <div className="jocproducts-panel joc-reveal joc-rv-skew h-100">
              <span className="joc-bubble" />
              <h4>
                <Lock size={17} /> Security
              </h4>
              <p className="jocproducts-sub mb-0">{p.security}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="jocproducts-panel joc-reveal joc-rv-skew h-100" style={delay(1)}>
              <span className="joc-bubble joc-bubble-orange" />
              <h4>
                <FileSpreadsheet size={17} /> Pricing
              </h4>
              <p className="jocproducts-sub mb-0">
                [Placeholder — verify before publishing] Pricing is not published for this product;
                engagement is by direct conversation. Pricing tiers will be added here only if a
                self-serve pricing model is introduced.
              </p>
            </div>
          </Col>
        </Row>

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">
          Frequently Asked Questions
        </h3>
        <Row className="g-3">
          {p.faqs.map((f, i) => (
            <Col lg={6} key={f.q}>
              <div className="jocproducts-faq joc-reveal joc-rv-tilt" style={delay(i)}>
                <span className="joc-bubble" />
                <strong>
                  <HelpCircle size={15} className="me-2" />Q: {f.q}
                </strong>
                <p>A: {f.a}</p>
              </div>
            </Col>
          ))}
        </Row>

        {p.disclaimer ? (
          <p className="jocproducts-disclaimer joc-reveal joc-rv-blur">
            <strong>Risk disclaimer:</strong> {p.disclaimer}
          </p>
        ) : null}

        <h3 className="jocproducts-subheading joc-reveal joc-rv-drop">Demo Request Form</h3>
        <DemoForm product={p.id} />
      </Container>
    </section>
  );
}

function Products() {
  useScrollReveal();

  return (
    <main className="jocproducts-wrap">
      {/* 5.1 Hero */}
      <section className="jocpage-hero">
        <span className="jocpage-hero-grid" />
        <Container>
          <div className="jocpage-hero-inner">
            <span className="jocpage-eyebrow joc-reveal joc-rv-drop">Our Products</span>
            <h1 className="jocpage-title joc-reveal joc-rv-blur" style={delay(1)}>
              <span>Software we build, run, and stand behind.</span>
            </h1>
            <p className="jocpage-text joc-reveal joc-rv-left" style={delay(2)}>
              Alongside our services work, Justonclick designs, builds, and personally operates its
              own production software. Below is full detail on everything we currently run — what
              each product does, who it's built for, and how to get started.
            </p>
            <div className="jocpage-actions joc-reveal joc-rv-zoom" style={delay(3)}>
              <Link to="/contact" className="jocpage-btn">
                Talk to Us About a Product <ArrowRight size={17} />
              </Link>
              <Link to="/" className="jocpage-btn-ghost">
                Back to home
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ProductBlock p={HRMS} />
      <ProductBlock p={TRADING} />

      {/* 5.4 More products coming soon */}
      <section className="jocproducts-section">
        <Container>
          <span className="jocproducts-eyebrow joc-reveal joc-rv-left">
            5.4 More Products Coming Soon
          </span>
          <h2 className="jocproducts-heading joc-reveal joc-rv-left" style={delay(1)}>
            New product categories under active evaluation
          </h2>
          <p className="jocproducts-sub joc-reveal joc-rv-left" style={delay(2)}>
            Justonclick is actively evaluating new product categories beyond these two flagship
            platforms. As new products launch, each is added to this page using the exact structure
            above — tagline, summary, live application link, modules, user roles, integrations,
            benefits, audience, security, and FAQs — so every product is documented consistently.
          </p>
        </Container>
      </section>

      {/* 5.5 Roadmap */}
      <section className="jocproducts-section jocproducts-section-alt">
        <Container>
          <span className="jocproducts-eyebrow joc-reveal joc-rv-spin">
            5.5 Product Roadmap (Planned, Not Yet Built)
          </span>
          <h2 className="jocproducts-heading joc-reveal joc-rv-spin" style={delay(1)}>
            A transparent roadmap, not shipping products
          </h2>
          <p className="jocproducts-sub joc-reveal joc-rv-spin" style={delay(2)}>
            The categories below are commonly requested extensions of the HRMS and procurement/ERP
            space we already work in through our services business. Each moves up to a full product
            section only once it is real and in production.
          </p>
          <Row className="g-4 mt-1">
            {ROADMAP.map((r, i) => (
              <Col md={6} xl={4} key={r.title}>
                <div className="jocproducts-road joc-reveal joc-rv-flip" style={delay(i)}>
                  <span className={`joc-bubble${i % 2 ? " joc-bubble-orange" : ""}`} />
                  <span className="jocproducts-road-chip">Planned</span>
                  <div className="jocproducts-module-icon">
                    <r.icon size={21} />
                  </div>
                  <h4>{r.title}</h4>
                  <p>{r.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* closing CTA */}
      <section className="jocproducts-section">
        <Container>
          <div className="jocproducts-cta joc-reveal joc-rv-zoom">
            <span className="joc-bubble" />
            <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
            <h2>Have a project in mind? Let's make it click.</h2>
            <p>
              Tell us what you're building — a product, a platform, or a team extension — and we'll
              get back to you within one business day.
            </p>
            <div className="jocproducts-cta-actions">
              <Link to="/contact" className="jocpage-btn">
                Schedule a Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="jocpage-btn-ghost">
                View Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Products;