import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  ArrowRight,
  Award,
  Blocks,
  BrainCircuit,
  Boxes,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  MinusCircle,
  Monitor,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TestTube2,
  TrendingUp,
  Users,
} from "lucide-react";
import heroImage from "../../components/assets/home-hero.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useCardGlow } from "../../hooks/useCardGlow";
import "./Home.css";

const STATS = [
  "Years of Experience",
  "Projects Delivered",
  "Clients Served",
  "Countries Served",
  "Engineers",
  "Products Built",
  "Support Availability",
];

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Software Development",
    text: "Bespoke systems built around your exact workflows, not a generic feature set.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Right-sized cloud architecture, migration, and cost optimization.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning Solutions",
    text: "AI built around a measurable business outcome, deployed to production.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Native and cross-platform apps engineered to be maintained, not just launched.",
  },
  {
    icon: ServerCog,
    title: "DevOps & Infrastructure Automation",
    text: "CI/CD and infrastructure-as-code that make deployment routine, not risky.",
  },
  {
    icon: Users,
    title: "Dedicated Development Teams",
    text: "A cross-functional team embedded with you long-term, around your roadmap.",
  },
];

const OVERVIEW = [
  {
    icon: Target,
    title: "Our mission",
    text: "Close the gap between generic software and what a specific business actually needs to operate well.",
  },
  {
    icon: Boxes,
    title: "Services + products",
    text: "Delivery teams and in-house production products, run by the same engineering organization.",
    accent: true,
  },
  {
    icon: Blocks,
    title: "Built to operate",
    text: "Custom platforms, cloud migrations, AI-driven workflows, and dedicated engineering teams.",
    accent: true,
  },
  {
    icon: Gauge,
    title: "Long-term by design",
    text: "We stay accountable for the system once it is live, not only until sign-off.",
  },
];

const INDUSTRIES = [
  "Healthcare",
  "Banking & Finance",
  "Insurance",
  "Manufacturing",
  "Retail",
  "Logistics",
  "Transportation",
  "Construction",
  "Government",
  "Education",
  "Real Estate",
  "Human Resources",
  "Procurement",
  "Hospitality",
  "Travel",
  "Energy",
  "Telecommunications",
];

const TECHNOLOGIES = [
  { label: "Frontend", icon: Monitor },
  { label: "Backend", icon: ServerCog },
  { label: "Mobile", icon: Smartphone },
  { label: "Cloud", icon: Cloud },
  { label: "Databases", icon: Database },
  { label: "DevOps", icon: GitBranch },
  { label: "AI", icon: BrainCircuit },
  { label: "Security", icon: Lock },
  { label: "Testing", icon: TestTube2 },
];

const METHODOLOGY = [
  {
    num: "01",
    title: "Discover",
    text: "Requirements, stakeholders, and constraints, before any solution is proposed.",
  },
  {
    num: "02",
    title: "Design",
    text: "Architecture and experience design, signed off before build starts.",
  },
  {
    num: "03",
    title: "Build",
    text: "Sprint-based delivery in staged environments, with regular check-ins.",
  },
  {
    num: "04",
    title: "Test",
    text: "Automated and manual QA integrated into every sprint, not bolted on at the end.",
  },
  {
    num: "05",
    title: "Deploy",
    text: "CI/CD-driven, low-risk releases with a defined rollback plan.",
  },
  {
    num: "06",
    title: "Support",
    text: "Monitoring, maintenance, and an ongoing roadmap after launch.",
  },
];

const WHY_ROWS = [
  {
    icon: Rocket,
    dimension: "Ownership after launch",
    traditional: "Hands off the project and moves to the next client",
    joc: "Operates its own products in production; understands post-launch reality first-hand",
  },
  {
    icon: Users,
    dimension: "Team structure",
    traditional: "Layers of account managers between you and the engineers",
    joc: "Direct access to the engineers and architects doing the work",
  },
  {
    icon: Layers,
    dimension: "Delivery model",
    traditional: "Fixed template applied to every client regardless of fit",
    joc: "Fixed Scope, Dedicated Team, Staff Augmentation, Managed Services, or Time & Material — matched to the actual need",
  },
  {
    icon: ShieldCheck,
    dimension: "Security posture",
    traditional: "Bolted on at the end, before a compliance review",
    joc: "Built into architecture and process from day one",
  },
];

const CASES = [
  {
    icon: Users,
    tag: "Product",
    title: "Justonclick HRMS & Payroll",
    text: "In-house HR & payroll platform, in daily production use.",
  },
  {
    icon: LineChart,
    tag: "Product",
    title: "Justonclick Trading Algo",
    text: "In-house systematic trading platform, in daily production use.",
    accent: true,
  },
  {
    icon: Monitor,
    tag: "Client Work",
    title: "Local Credit Solutions",
    text: "Custom website design and build for a financial and credit services client.",
  },
];

const OUTCOMES = [
  { text: "Payroll processing time cut from days to hours", src: "Justonclick HRMS & Payroll" },
  {
    text: "Manual execution errors removed from systematic trading",
    src: "Justonclick Trading Algo",
  },
  {
    text: "A live, production website replacing an absent or outdated web presence",
    src: "Local Credit Solutions",
  },
];

const POSTS = [
  { kind: "Payroll", title: "5 Signs Your Business Has Outgrown Spreadsheet Payroll" },
  { kind: "Trading", title: "What to Look for in an Algorithmic Trading Platform" },
  { kind: "Startups", title: "Web vs. Mobile First: Choosing the Right MVP for Your Startup" },
];

const CREDENTIALS = [
  { icon: ShieldCheck, label: "Certifications" },
  { icon: Cloud, label: "Cloud Partner Status" },
  { icon: Award, label: "Industry Awards" },
  { icon: Lock, label: "Compliance" },
];

/** stagger helper for scroll reveals */
const delay = (i) => ({ transitionDelay: `${Math.min(i, 6) * 90}ms` });

function Home() {
  useScrollReveal();
  const glow = useCardGlow();

  return (
    <main>
      {/* 2.1 Hero */}
      <section className="jochome-hero">
        <span className="jochome-hero-grid" />
        <span className="jochome-hero-blob jochome-hero-blob-a" />
        <span className="jochome-hero-blob jochome-hero-blob-b" />
        <Container className="jochome-hero-inner">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="jochome-hero-badge joc-reveal">
                <i />
                Global IT Services & Digital Engineering
              </span>
              <h1 className="jochome-hero-title joc-reveal" style={delay(1)}>
                Engineering software that <span>runs your business</span>, not just launches it.
              </h1>
              <p className="jochome-hero-text joc-reveal" style={delay(2)}>
                We design, build, and operate custom software, cloud infrastructure, and AI-driven
                systems for organizations that need a long-term technology partner — not another
                agency handing off a project and moving on.
              </p>
              <div className="jochome-hero-actions joc-reveal" style={delay(3)}>
                <Link to="/contact" className="jochome-btn-primary">
                  Schedule Consultation <ArrowRight size={17} />
                </Link>
                <Link to="/services" className="jochome-btn-secondary">
                  Explore Services <ArrowRight size={17} />
                </Link>
                <Link to="/portfolio" className="jochome-btn-ghost">
                  View Portfolio <ArrowRight size={17} />
                </Link>
              </div>
              <div className="jochome-hero-trust joc-reveal" style={delay(4)}>
                <span>
                  <ShieldCheck size={16} /> Secure SDLC by default
                </span>
                <span>
                  <Sparkles size={16} /> Products we run ourselves
                </span>
                <span>
                  <ArrowRight size={16} /> Long-term delivery partner
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="jochome-hero-visual joc-reveal" style={delay(2)}>
                <span className="jochome-hero-chip jochome-hero-chip-a">
                  <Sparkles size={15} /> AI-driven systems
                </span>
                <span className="jochome-hero-chip jochome-hero-chip-b">
                  <ShieldCheck size={15} /> Secure by design
                </span>
                <img
                  src={heroImage}
                  alt="Isometric illustration of cloud infrastructure, dashboards, and connected software systems"
                  width={1200}
                  height={912}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2.2 Company Statistics */}
      <section className="jochome-stats">
        <Container>
          <div className="jochome-stats-card joc-reveal joc-rv-blur">
            <span className="joc-bubble" />
            <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
            <Row className="g-0">
              {STATS.map((label) => (
                <Col key={label} xs={6} md={4} xl={3} className="jochome-stat">
                  <div className="jochome-stat-value">—</div>
                  <div className="jochome-stat-label">{label}</div>
                  <span className="jochome-stat-note">Verify before publishing</span>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* 2.3 Trusted By */}
      <section className="jochome-trust">
        <Container>
          <div className="joc-reveal">
            <p className="jochome-trust-label mb-0">Trusted by</p>
            <div className="jochome-trust-strip">
              <span className="jochome-trust-item">Local Credit Solutions</span>
              <span className="jochome-trust-item jochome-trust-empty">
                Client & partner logos added only with explicit permission
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2.4 Company Overview */}
      <section className="jochome-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <span className="jochome-eyebrow joc-reveal">Company Overview</span>
              <h2 className="jochome-heading joc-reveal" style={delay(1)}>
                A partner for what happens after launch
              </h2>
              <p className="jochome-sub joc-reveal" style={delay(2)}>
                Justonclick is a technology company that designs, builds, and operates software for
                organizations that need more than a project delivered on time. We combine two things
                most firms offer separately: hands-on software services delivery, and our own
                production software products that we design, ship, and run ourselves.
              </p>
              <p className="jochome-sub joc-reveal" style={delay(3)}>
                That combination means every engagement is led by engineers who have felt the
                consequences of their own architectural decisions in daily production use, not just
                in a handover document.
              </p>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {OVERVIEW.map((item, i) => (
                  <Col md={6} key={item.title}>
                    <div
                      {...glow}
                      className={`jochome-card joc-reveal joc-rv-zoom${item.accent ? " jochome-card-accent" : ""}`}
                      style={delay(i)}
                    >
                      <span className={`joc-bubble${item.accent ? " joc-bubble-orange" : ""}`} />
                      <div className="jochome-card-icon">
                        <item.icon size={22} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2.5 Why Choose Us */}
      <section className="jochome-section jochome-section-alt">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Why Choose Us</span>
            <h2 className="jochome-heading">Four differences you feel in production</h2>
            <p className="jochome-sub">
              How a traditional software vendor typically operates, and how we work instead.
            </p>
          </div>
          <Row className="g-4 mt-1">
            {WHY_ROWS.map((row, i) => (
              <Col key={row.dimension} md={6}>
                <div className="jochome-why joc-reveal joc-rv-tilt" style={delay(i)}>
                  <span className="joc-bubble" />
                  <div className="jochome-why-dimension">
                    <span>
                      <row.icon size={17} />
                    </span>
                    {row.dimension}
                  </div>
                  <div className="jochome-why-row jochome-why-old">
                    <MinusCircle size={16} />
                    <span>
                      <span className="jochome-why-tag">Traditional vendor</span>
                      {row.traditional}
                    </span>
                  </div>
                  <div className="jochome-why-row jochome-why-new">
                    <CheckCircle2 size={16} />
                    <span>
                      <span className="jochome-why-tag">Justonclick</span>
                      {row.joc}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 2.6 Core Services */}
      <section className="jochome-section">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Core Services</span>
            <h2 className="jochome-heading">A featured subset of our 23-service catalog</h2>
          </div>
          <Row className="g-4 mt-1">
            {SERVICES.map((s, i) => (
              <Col key={s.title} md={6} xl={4}>
                <Link
                  {...glow}
                  to="/services"
                  className={`jochome-card joc-reveal joc-rv-flip${i % 2 ? " jochome-card-accent" : ""}`}
                  style={delay(i)}
                >
                  <span className={`joc-bubble${i % 2 ? " joc-bubble-orange" : ""}`} />
                  <span className="joc-bubble joc-bubble-bl" />
                  <span className="jochome-card-index">{String(i + 1).padStart(2, "0")}</span>
                  <div className="jochome-card-icon">
                    <s.icon size={22} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="jochome-card-more">
                    Explore service <ArrowRight size={15} />
                  </span>
                </Link>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5 joc-reveal">
            <Link to="/services" className="jochome-btn-secondary">
              View All 23 Services <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>

      {/* 2.7 Featured Products */}
      <section className="jochome-section jochome-section-alt">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Featured Products</span>
            <h2 className="jochome-heading">Software we run ourselves, every day</h2>
          </div>
          <Row className="g-4 mt-1">
            <Col lg={6}>
              <div className="jochome-product jochome-product-blue joc-reveal joc-rv-left">
                <span className="joc-bubble" />
                <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
                <span className="jochome-product-badge">
                  <Users size={13} /> In production
                </span>
                <h3>Justonclick HRMS & Payroll</h3>
                <p>HR, attendance, and payroll software we use ourselves.</p>
                <a
                  className="jochome-product-link"
                  href="https://hrms.justonclick.in/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit HRMS <ExternalLink size={15} />
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="jochome-product jochome-product-orange joc-reveal joc-rv-right"
                style={delay(1)}
              >
                <span className="joc-bubble joc-bubble-orange" />
                <span className="joc-bubble joc-bubble-bl" />
                <span className="jochome-product-badge">
                  <LineChart size={13} /> In production
                </span>
                <h3>Justonclick Trading Algo</h3>
                <p>Our own systematic trading platform.</p>
                <a
                  className="jochome-product-link"
                  href="https://trading.justonclick.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Trading Algo <ExternalLink size={15} />
                </a>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5 joc-reveal">
            <Link to="/products" className="jochome-btn-primary">
              View All Products <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>

      {/* 2.8 Industries */}
      <section className="jochome-section">
        <Container>
          <div className="joc-reveal">
            <span className="jochome-eyebrow">Industries We Serve</span>
            <h2 className="jochome-heading">Domain context, not just code</h2>
          </div>
          <div className="jochome-industries joc-reveal">
            {INDUSTRIES.map((industry) => (
              <Link key={industry} to="/services" className="jochome-industry">
                {industry}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 2.9 Technology Expertise */}
      <section className="jochome-section jochome-section-alt">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Technology Expertise</span>
            <h2 className="jochome-heading">Nine practice areas, one engineering standard</h2>
          </div>
          <Row className="g-3 mt-1">
            {TECHNOLOGIES.map((tech, i) => (
              <Col key={tech.label} xs={6} md={4} xl={3}>
                <Link
                  to="/technologies"
                  className="jochome-tech joc-reveal joc-rv-drop"
                  style={delay(i)}
                >
                  <span className="joc-bubble" />
                  <span className="jochome-tech-fill" />
                  <tech.icon size={19} />
                  <span>{tech.label}</span>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 2.10 Methodology */}
      <section className="jochome-section">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Delivery Lifecycle</span>
            <h2 className="jochome-heading">Development methodology & software delivery</h2>
          </div>
          <Row className="g-4 mt-1">
            {METHODOLOGY.map((step, i) => (
              <Col key={step.num} md={6} xl={4}>
                <div className="jochome-step joc-reveal joc-rv-skew" style={delay(i)}>
                  <span className="joc-bubble joc-bubble-orange" />
                  <div className="jochome-step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 2.11 Outcomes */}
      <section className="jochome-section jochome-section-alt">
        <Container>
          <div className="joc-reveal">
            <span className="jochome-eyebrow">Success Metrics</span>
            <h2 className="jochome-heading">Business outcomes from delivered work</h2>
          </div>
          <Row className="g-4">
            {OUTCOMES.map((o, i) => (
              <Col key={o.src} lg={4}>
                <div className="jochome-outcome joc-reveal joc-rv-left" style={delay(i)}>
                  <span className="joc-bubble" />
                  <TrendingUp size={22} />
                  {o.text}
                  <small>{o.src}</small>
                </div>
              </Col>
            ))}
          </Row>
          <p className="jochome-sub mt-4 joc-reveal">
            [Placeholder — verify before publishing] Aggregate metrics such as average delivery time
            and client retention rate will be added once the project sample is large enough to
            report honestly.
          </p>
        </Container>
      </section>

      {/* 2.12 Case Studies */}
      <section className="jochome-section">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Featured Case Studies</span>
            <h2 className="jochome-heading">Three systems in daily production use</h2>
          </div>
          <Row className="g-4 mt-1">
            {CASES.map((c, i) => (
              <Col key={c.title} md={6} xl={4}>
                <Link
                  {...glow}
                  to="/case-studies"
                  className={`jochome-card joc-reveal joc-rv-spin${c.accent ? " jochome-card-accent" : ""}`}
                  style={delay(i)}
                >
                  <span className={`joc-bubble${c.accent ? " joc-bubble-orange" : ""}`} />
                  <span className="joc-bubble joc-bubble-bl" />
                  <div className="jochome-card-icon">
                    <c.icon size={22} />
                  </div>
                  <span className="jochome-case-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <span className="jochome-card-more">
                    Read the case study <ArrowRight size={15} />
                  </span>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 2.13 Testimonial */}
      <section className="jochome-section jochome-section-alt">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="text-center jochome-center joc-reveal">
                <span className="jochome-eyebrow">Client Testimonials</span>
                <h2 className="jochome-heading">In our clients' words</h2>
              </div>
              <blockquote className="jochome-quote joc-reveal joc-rv-blur">
                <span className="joc-bubble joc-bubble-orange" />
                <div className="jochome-quote-stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={17} fill="currentColor" />
                  ))}
                </div>
                <p>
                  [Insert a 1-2 sentence quote describing the specific outcome, result, or
                  experience the client had working with Justonclick.]
                </p>
                <footer>
                  <strong>[Client Name], [Job Title]</strong>
                  [Company Name] — [Project / Service]
                </footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2.14 Awards & Certifications */}
      <section className="jochome-section">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Awards, Certifications & Partnerships</span>
            <h2 className="jochome-heading">Displayed only once formally granted</h2>
          </div>
          <Row className="g-3 mt-1">
            {CREDENTIALS.map((item, i) => (
              <Col key={item.label} sm={6} xl={3}>
                <div className="jochome-badge joc-reveal joc-rv-zoom" style={delay(i)}>
                  <span className="joc-bubble" />
                  <item.icon size={24} />
                  {item.label}
                  <small>Placeholder — verify before publishing</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 2.15 Blog */}
      <section className="jochome-section jochome-section-alt">
        <Container>
          <div className="text-center jochome-center joc-reveal">
            <span className="jochome-eyebrow">Latest Blogs & Insights</span>
            <h2 className="jochome-heading">Writing from the team doing the work</h2>
          </div>
          <Row className="g-4 mt-1">
            {POSTS.map((p, i) => (
              <Col key={p.title} md={6} xl={4}>
                <Link
                  {...glow}
                  to="/blog"
                  className="jochome-card joc-reveal joc-rv-right"
                  style={delay(i)}
                >
                  <span className="joc-bubble joc-bubble-orange" />
                  <span className="jochome-post-kind">{p.kind}</span>
                  <h3 className="mt-3">{p.title}</h3>
                  <span className="jochome-post-meta">Insight · Justonclick team</span>
                  <span className="jochome-card-more">
                    Read the post <ArrowRight size={15} />
                  </span>
                </Link>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5 joc-reveal">
            <Link to="/blog" className="jochome-btn-secondary">
              Visit the Blog <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>

      {/* 2.16 Closing CTA */}
      <section className="jochome-section">
        <Container>
          <div className="jochome-cta joc-reveal joc-rv-zoom">
            <span className="joc-bubble" />
            <span className="joc-bubble joc-bubble-bl joc-bubble-orange" />
            <h2>Have a project in mind? Let's make it click.</h2>
            <p>
              Tell us what you're building — a product, a platform, or a team extension — and we'll
              get back to you within one business day.
            </p>
            <div className="jochome-cta-actions">
              <Link to="/contact" className="jochome-btn-primary">
                Schedule a Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="jochome-btn-ghost">
                View Our Services <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;