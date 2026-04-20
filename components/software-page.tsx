import { IntakeForm } from "@/components/intake-form";
import { SiteHeader } from "@/components/site-header";

const offers = [
  {
    label: "Entry Offer",
    title: "Software Development",
    price: "$120",
    description:
      "Fast-turn websites, dashboards, portals, and small business software scoped for speed and clarity.",
  },
  {
    label: "Add-On Service",
    title: "Deployment Service",
    price: "$120",
    description:
      "Launch support for your finished build so your project goes live cleanly, quickly, and with less friction.",
  },
];

const buildExamples = [
  "Websites and landing pages",
  "Admin dashboards and internal tools",
  "Event and ticket sites",
  "Booking systems and inquiry pages",
  "Admin portals",
  "Small business software",
];

const steps = [
  {
    number: "01",
    title: "Send your idea",
    description:
      "Use the intake form to describe what you need built and how quickly you need it.",
  },
  {
    number: "02",
    title: "We review the scope",
    description:
      "We look at the request, confirm what is included, and make the path to launch clear.",
  },
  {
    number: "03",
    title: "Confirm and pay",
    description:
      "Once the scope is right, you approve the work and we move into production.",
  },
  {
    number: "04",
    title: "We build",
    description:
      "We execute the build with speed, clean delivery, and a focus on practical business use.",
  },
  {
    number: "05",
    title: "We deliver",
    description:
      "You receive the finished project and, if needed, deployment support to get it live.",
  },
];

export function SoftwarePage() {
  return (
    <main className="page-shell">
      <div className="noise" />

      <section className="hero">
        <div className="container">
          <div className="hero-panel">
            <SiteHeader />

            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Built for QR Conversion</span>
                <h1 className="headline-xl">Need software built or deployed?</h1>
                <p className="lead">
                  FullHeart Limited LLC delivers low-friction software builds for
                  businesses and creators. Scan, submit your request, get scoped,
                  and move fast.
                </p>

                <div className="hero-actions">
                  <a className="button" href="#intake">
                    Get a Quick Quote
                  </a>
                  <a className="button-secondary" href="#offers">
                    View Services
                  </a>
                </div>

                <div className="hero-badges">
                  <span className="badge">Mobile-first intake</span>
                  <span className="badge">Fast loading</span>
                  <span className="badge">Clear fixed-price offers</span>
                </div>
              </div>

              <aside className="hero-meta">
                <div className="info-card">
                  <span className="card-label">Conversion Snapshot</span>
                  <div className="metric-row">
                    <div className="metric">
                      <strong>$120</strong>
                      <span>Software Development</span>
                    </div>
                    <div className="metric">
                      <strong>$120</strong>
                      <span>Deployment Service</span>
                    </div>
                  </div>
                  <p className="mini-note">
                    Designed for people arriving from a flyer scan who need immediate
                    clarity, a fast quote path, and a direct way to submit.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="offers">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Service Offers</span>
            <h2 className="headline-lg">Two clean offers. One simple intake path.</h2>
            <p className="body-copy">
              Keep the first conversion easy. Visitors can choose a build, choose
              deployment, or request both in one submission.
            </p>
          </div>

          <div className="grid-two">
            {offers.map((offer) => (
              <article className="price-card" key={offer.title}>
                <span className="card-label">{offer.label}</span>
                <p className="card-price">{offer.price}</p>
                <h3 className="card-title">{offer.title}</h3>
                <p className="card-description">{offer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="builds">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What We Build</span>
            <h2 className="headline-lg">Practical software for business momentum.</h2>
            <p className="body-copy">
              The page stays focused on real outcomes people understand at a glance.
              No clutter, no corporate maze, just a clear picture of what can be built.
            </p>
          </div>

          <div className="grid-three">
            {buildExamples.map((item) => (
              <article className="build-card" key={item}>
                <span className="card-label">Build Example</span>
                <h3>{item}</h3>
                <ul>
                  <li>Scope-first delivery</li>
                  <li>Designed for fast launch</li>
                  <li>Ready for future expansion</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How It Works</span>
            <h2 className="headline-lg">A direct path from scan to shipped project.</h2>
            <p className="body-copy">
              The process is built to reduce hesitation and show that getting started
              is fast, structured, and easy to understand.
            </p>
          </div>

          <div className="grid-three">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section form-section" id="intake">
        <div className="container">
          <div className="form-layout">
            <IntakeForm />

            <div>
              <div className="contact-card">
                <span className="card-label">Direct Contact</span>
                <h3>Prefer direct outreach?</h3>
                <p>
                  If you want to skip the form, reach out directly and we will point
                  you to the fastest next step.
                </p>

                <div className="contact-list">
                  <div className="contact-item">
                    <span>Email</span>
                    <a href="mailto:admin@fullheartenterprises.com">
                      admin@fullheartenterprises.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <span>Best Fit</span>
                    <strong>Web builds, landing pages, dashboards, deployments</strong>
                  </div>
                  <div className="contact-item">
                    <span>Primary CTA</span>
                    <strong>Submit the intake form for a quick quote</strong>
                  </div>
                </div>
              </div>

              <div className="cta-panel">
                <span className="card-label">Fast Start</span>
                <h3 className="headline-md">Scan. Submit. Scope. Launch.</h3>
                <p className="body-copy">
                  This landing page is built to work as the bridge between your flyer
                  and your inbox. The goal is fewer steps, less friction, and faster
                  conversions on mobile.
                </p>
                <div className="cta-actions">
                  <a className="button" href="#intake">
                    Start Your Project
                  </a>
                  <a
                    className="button-secondary"
                    href="mailto:admin@fullheartenterprises.com"
                  >
                    Email FullHeart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
