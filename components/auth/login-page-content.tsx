"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

const inputStyle: React.CSSProperties = {
  border: "1px solid var(--color-best-border)",
  borderRadius: ".65rem",
  padding: ".75rem 1rem",
  background: "var(--color-best-cream)",
  color: "var(--color-best-body)",
  fontSize: "1rem",
  width: "100%",
};

export function LoginPageContent() {
  const { t } = useLanguage();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function sendOtp(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    setBusy(false);
    if (!res.ok) return setStatus("OTP পাঠানো যায়নি। নম্বরটি আবার দেখুন।");
    sessionStorage.setItem("best-study-phone", phone);
    window.location.href = "/verify-otp";
  }

  return (
    <section className="belief-story-section py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-sm">
          <div style={{ border: "1px solid var(--color-best-border)", borderRadius: "1.5rem", background: "var(--color-best-paper)", padding: "2.5rem 2rem" }}>
            <h1 className="text-2xl font-bold text-best-ink">{t("auth.login.title")}</h1>
            <p className="mt-2 leading-[1.75] text-best-body">{t("auth.login.lead")}</p>
            <p className="mt-3 text-sm text-best-muted">{status || "OTP login is ready."}</p>

            <form className="mt-6" style={{ display: "grid", gap: "1rem" }} onSubmit={sendOtp}>
              <label style={{ display: "grid", gap: ".35rem" }}>
                <span className="text-sm font-semibold text-best-ink">{t("auth.login.phone")}</span>
                <input type="tel" placeholder="01XXXXXXXXX" required value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
              </label>
              <button type="submit" disabled={busy} className="button-primary tap-target w-full px-6 py-3 font-semibold disabled:opacity-50">
                {busy ? "Sending..." : t("auth.login.submit")}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-best-body">
              {t("auth.login.noAccount")}{" "}
              <Link href="/signup" className="font-semibold text-best-green no-underline hover:underline">
                {t("auth.login.signup")}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
