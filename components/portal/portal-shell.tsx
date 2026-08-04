"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

const NAV_ITEMS = [
  { href: "/app", label: "portal.nav.dashboard" },
  { href: "/app/courses", label: "portal.nav.courses" },
  { href: "/app/live", label: "portal.nav.live" },
  { href: "/app/exams", label: "portal.nav.exams" },
  { href: "/app/homework", label: "portal.nav.homework" },
  { href: "/app/progress", label: "portal.nav.progress" },
  { href: "/app/doubts", label: "portal.nav.doubts" },
  { href: "/app/payments", label: "portal.nav.payments" },
  { href: "/app/settings", label: "portal.nav.settings" },
] as const;

import type { DictionaryKey } from "@/lib/i18n/dictionary";

interface PortalShellProps {
  title: string;
  children: React.ReactNode;
}

export function PortalShell({ title, children }: PortalShellProps) {
  const { t } = useLanguage();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "60vh" }}>
      {/* Sidebar */}
      <nav
        aria-label="Portal navigation"
        style={{
          borderRight: "1px solid var(--color-best-border)",
          background: "var(--color-best-paper)",
          padding: "1.5rem 0",
        }}
      >
        <ul style={{ display: "grid", gap: ".25rem" }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="tap-target block px-5 py-2 text-sm font-medium text-best-body no-underline hover:bg-best-cream hover:text-best-green"
              >
                {t(item.label as DictionaryKey)}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: "1rem", borderTop: "1px solid var(--color-best-border)", paddingTop: ".5rem" }}>
            <button
              type="button"
              className="tap-target block w-full px-5 py-2 text-left text-sm font-medium text-best-muted hover:text-best-ink"
              onClick={() => {
                localStorage.removeItem("best-study-session");
                window.location.href = "/";
              }}
            >
              {t("layout.header.logout")}
            </button>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <main style={{ padding: "2rem" }}>
        <h1 className="text-xl font-bold text-best-ink">{title}</h1>
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}

export function PortalAuthGate() {
  const { t } = useLanguage();
  return (
    <div className="py-24 text-center">
      <p className="text-best-body">{t("portal.auth.required")}</p>
      <Link
        href="/login"
        className="button-primary tap-target mt-6 inline-flex items-center justify-center px-8 py-3 font-semibold no-underline"
      >
        {t("portal.auth.login")}
      </Link>
    </div>
  );
}