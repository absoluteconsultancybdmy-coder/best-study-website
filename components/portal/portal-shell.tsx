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
  { href: "/app/coins", label: "portal.nav.coins" },
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
        <div style={{ margin: "0 0 0.75rem", padding: "0.75rem 1.25rem", borderBottom: "1px solid var(--color-best-border)" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-best-muted)", marginBottom: "0.3rem" }}>
            Coins
          </p>
          <Link href="/app/coins" style={{ display: "flex", alignItems: "center", gap: "0.4rem", textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="10" fill="#FDBA3B" />
              <text x="10" y="14" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1A1917" fontFamily="sans-serif">C</text>
            </svg>
            <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-best-ink)" }}>0</span>
            <span style={{ fontSize: "0.75rem", color: "var(--color-best-muted)" }}>Coins</span>
          </Link>
        </div>

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