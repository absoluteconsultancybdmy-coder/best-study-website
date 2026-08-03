import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const navigation = [
  { href: "/courses", label: "কোর্স" },
  { href: "/teacher", label: "শিক্ষক" },
  { href: "/legal/terms", label: "শর্তাবলি" },
] as const;

export function SiteHeader() {
  return (
    <header className="story-site-header sticky top-0 z-20 border-b border-best-border bg-best-cream">
      <Container className="py-1.5 sm:py-2">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <Link href="/" className="brand-header-link tap-target no-underline">
            <span className="brand-header-logo">
              <Image
                src="/images/brand/best-study-logo.png"
                alt=""
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden text-lg font-bold text-best-green sm:inline">বেস্ট স্টাডি</span>
            <span className="sr-only">বেস্ট স্টাডি হোম</span>
          </Link>

          <nav aria-label="প্রধান নেভিগেশন" className="order-3 w-full md:order-none md:w-auto">
            <ul className="flex flex-wrap items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tap-target inline-flex items-center px-3 font-medium text-best-body no-underline hover:text-best-green-hover"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions flex shrink-0 items-center gap-2 pr-1">
            <a
              href="#"
              className="header-contact-chip tap-target content-placeholder hidden items-center lg:inline-flex"
            >
              [ফোন নম্বর] PLACEHOLDER
            </a>
            <Link
              href="/#lead"
              className="button-primary tap-target inline-flex items-center justify-center px-3 py-2 text-center text-sm font-semibold no-underline sm:px-4 sm:text-base"
            >
              <span className="sm:hidden">ফ্রি ক্লাস</span>
              <span className="hidden sm:inline">English ফ্রি ক্লাস বুক করো</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
