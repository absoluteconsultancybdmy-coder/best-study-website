import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const footerLinks = [
  { href: "/courses", label: "কোর্স" },
  { href: "/teacher", label: "শিক্ষক" },
  { href: "/legal/terms", label: "শর্তাবলি" },
  { href: "/legal/privacy", label: "গোপনীয়তা" },
  { href: "/legal/refund", label: "রিফান্ড নীতি" },
] as const;

export function SiteFooter() {
  return (
    <footer className="brand-site-footer bg-best-ink text-best-border">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="footer-brand-lockup no-underline">
              <span className="footer-brand-logo">
                <Image
                  src="/images/brand/best-study-logo.png"
                  alt="BEST TUTORIAL HOME logo"
                  fill
                  sizes="76px"
                  className="object-contain"
                />
              </span>
              <span>
                <strong>বেস্ট টিউটোরিয়াল হোম</strong>
                <small lang="en">English subject-only learning</small>
              </span>
            </Link>
            <p className="mt-4 max-w-sm leading-[1.75] text-best-border">
              বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar, Writing, Reading,
              Vocabulary ও Board English শেখার প্ল্যাটফর্ম।
            </p>
          </div>

          <nav aria-label="ফুটার নেভিগেশন">
            <h2 className="text-base font-semibold text-best-cream">প্রয়োজনীয় লিংক</h2>
            <ul className="mt-3 grid gap-1">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tap-target inline-flex items-center text-best-border no-underline hover:text-best-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-semibold text-best-cream">যোগাযোগ</h2>
            <ul className="mt-3 grid gap-1">
              <li>
                <a href="#" className="tap-target content-placeholder inline-flex text-best-border">
                  [ফোন নম্বর] PLACEHOLDER
                </a>
              </li>
              <li>
                <a href="#" className="tap-target content-placeholder inline-flex text-best-border">
                  [ইমেইল] PLACEHOLDER
                </a>
              </li>
            </ul>
            <p className="mt-5 text-sm leading-[1.75] text-best-border">
              ভবিষ্যৎ পেমেন্ট সহায়তা (এখনও সক্রিয় নয়): bKash · Nagad · Visa
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
