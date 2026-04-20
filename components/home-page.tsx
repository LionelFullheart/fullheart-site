import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export function HomePage() {
  return (
    <main className="page-shell">
      <div className="noise" />

      <section className="hero">
        <div className="container">
          <div className="hero-panel hub-panel">
            <SiteHeader />

            <div className="hero-grid hub-grid">
              <div className="hero-copy">
                <span className="eyebrow">FullHeart Digital Storefront</span>
                <h1 className="headline-xl">Build software. Publish products. Sell directly.</h1>
                <p className="lead">
                  FullHeart Enterprises now routes visitors into two clear lanes:
                  software services and digital products. Explore the offer, buy the
                  book, or start a build from one central front door.
                </p>

                <div className="hero-actions">
                  <Link className="button" href="/software#intake">
                    Go to Software
                  </Link>
                  <Link className="button-secondary" href="/products">
                    View Products
                  </Link>
                </div>
              </div>

              <aside className="hub-meta">
                <article className="portal-card">
                  <span className="card-label">Software</span>
                  <h2 className="headline-md">Custom builds and deployment</h2>
                  <p className="card-description">
                    Intake funnel for websites, dashboards, business tools, launch support,
                    and quick quotes.
                  </p>
                  <Link className="button" href="/software#intake">
                    Start a Build
                  </Link>
                </article>

                <article className="portal-card">
                  <span className="card-label">Products</span>
                  <h2 className="headline-md">Books, PDFs, and digital editions</h2>
                  <p className="card-description">
                    A focused storefront for FullHeart Publishing with direct checkout
                    paths for Stripe and PayPal.
                  </p>
                  <Link className="button-secondary" href="/products">
                    Shop the Book
                  </Link>
                </article>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
