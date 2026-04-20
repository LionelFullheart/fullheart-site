import { SiteHeader } from "@/components/site-header";

const stripeLink = process.env.NEXT_PUBLIC_STRIPE_BOOK_URL || "";
const paypalLink = process.env.NEXT_PUBLIC_PAYPAL_BOOK_URL || "";

function CheckoutButton({
  href,
  label,
  secondary = false,
}: {
  href: string;
  label: string;
  secondary?: boolean;
}) {
  if (!href) {
    return (
      <span className={secondary ? "button-secondary button-disabled" : "button button-disabled"}>
        {label}
      </span>
    );
  }

  return (
    <a
      className={secondary ? "button-secondary" : "button"}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

export function ProductsPage() {
  const checkoutReady = Boolean(stripeLink || paypalLink);

  return (
    <main className="page-shell">
      <div className="noise" />

      <section className="hero">
        <div className="container">
          <div className="hero-panel product-panel">
            <SiteHeader ctaHref="/products#book" ctaLabel="Buy the Book" />

            <div className="product-hero">
              <div className="product-hero-copy">
                <span className="eyebrow">FullHeart Publishing</span>
                <h1 className="headline-xl">Digital reading, direct checkout, one clean storefront.</h1>
                <p className="lead">
                  This page is ready to sell your book as a PDF and ebook edition with
                  Stripe and PayPal checkout once your live payment links are added.
                </p>

                <div className="hero-actions">
                  <a className="button" href="#book">
                    View Editions
                  </a>
                  <a className="button-secondary" href="mailto:admin@fullheartenterprises.com">
                    Contact Publishing
                  </a>
                </div>

                <div className="hero-badges">
                  <span className="badge">PDF ready</span>
                  <span className="badge">Ebook ready</span>
                  <span className="badge">Stripe + PayPal ready</span>
                </div>
              </div>

              <div className="publishing-brand-card">
                <div className="publishing-logo-frame">
                  <div className="publishing-logo-glow" />
                  <div className="publishing-logo-placeholder">
                    <span>FullHeart</span>
                    <strong>Publishing</strong>
                  </div>
                </div>
                <p className="mini-note">
                  The live page structure is in place. Once you resend the logo file in a
                  stable location, we can swap the placeholder mark for the final artwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="book">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Featured Product</span>
            <h2 className="headline-lg">Book storefront for PDF and ebook delivery.</h2>
            <p className="body-copy">
              The product section is structured so you can plug in the title, price,
              cover art, and checkout links without reworking the page later.
            </p>
          </div>

          <div className="book-card">
            <div className="book-cover">
              <div className="book-cover-inner">
                <span className="card-label">Book Cover</span>
                <h3 className="headline-md">Your Book Title</h3>
                <p className="card-description">
                  Add the final title, subtitle, and edition details next. This section
                  is already prepared for a flagship digital release.
                </p>
              </div>
            </div>

            <div className="book-copy">
              <span className="card-label">What Buyers Get</span>
              <h3 className="headline-md">Two digital formats, one direct purchase flow.</h3>
              <p className="body-copy">
                Sell a downloadable PDF, an ebook edition, or both as a bundled offer.
                Stripe and PayPal buttons can point to live checkout links as soon as you
                share the account details.
              </p>

              <div className="edition-grid">
                <article className="edition-card">
                  <span className="card-label">Edition One</span>
                  <h4>PDF Edition</h4>
                  <p>High-resolution download for desktop, tablet, and printing.</p>
                </article>
                <article className="edition-card">
                  <span className="card-label">Edition Two</span>
                  <h4>Ebook Edition</h4>
                  <p>Mobile-friendly digital format for direct reading on the go.</p>
                </article>
              </div>

              <div className="checkout-panel">
                <div>
                  <span className="card-label">Checkout</span>
                  <p className="mini-note">
                    {checkoutReady
                      ? "Payment links detected. Customers can use the buttons below."
                      : "Stripe and PayPal buttons are scaffolded, but they need your live checkout links or API keys before customers can pay."}
                  </p>
                </div>

                <div className="hero-actions">
                  <CheckoutButton href={stripeLink} label="Buy with Stripe" />
                  <CheckoutButton href={paypalLink} label="Buy with PayPal" secondary />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
