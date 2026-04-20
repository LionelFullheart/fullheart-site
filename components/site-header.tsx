import Link from "next/link";

type SiteHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function SiteHeader({
  ctaHref = "/software#intake",
  ctaLabel = "Start Your Project",
}: SiteHeaderProps) {
  return (
    <div className="topbar">
      <div className="brand-cluster">
        <Link className="brand" href="/">
          <div className="brand-mark">FH</div>
          <div className="brand-copy">
            <strong>FullHeart Limited LLC</strong>
            <span>Software, publishing, and direct digital offers</span>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/software">Software</Link>
          <Link href="/products">Products</Link>
        </nav>
      </div>

      <Link className="topbar-link" href={ctaHref}>
        {ctaLabel}
      </Link>
    </div>
  );
}
