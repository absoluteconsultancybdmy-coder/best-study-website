"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";
import { hasSupabase, supabase } from "@/lib/supabase";

export function OtpPageContent() {
  const { t } = useLanguage();
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const inputStyle: React.CSSProperties = {
    border: "1px solid var(--color-best-border)",
    borderRadius: ".65rem",
    padding: ".75rem 1rem",
    background: "var(--color-best-cream)",
    color: "var(--color-best-body)",
    fontSize: "1.5rem",
    textAlign: "center",
    width: "100%",
  };

  async function verifyOtp(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    const phone = sessionStorage.getItem("best-study-phone") ?? "";
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, token }),
    });
    setBusy(false);
    if (!res.ok) return setStatus("OTP মিলছে না। আবার চেষ্টা করুন।");
    const data = await res.json();
    if (hasSupabase && data.access_token && data.refresh_token) {
      await supabase.auth.setSession({ access_token: data.access_token, refresh_token: data.refresh_token });
    } else {
      localStorage.setItem("best-study-session", data.access_token ?? "demo-session");
    }
    window.location.href = "/app";
  }

  return (
    <section className="belief-story-section py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-sm">
          <div style={{ border: "1px solid var(--color-best-border)", borderRadius: "1.5rem", background: "var(--color-best-paper)", padding: "2.5rem 2rem" }}>
            <h1 className="text-2xl font-bold text-best-ink">{t("auth.otp.title")}</h1>
            <p className="mt-2 leading-[1.75] text-best-body">{t("auth.otp.lead")}</p>
            <p className="mt-3 text-sm text-best-muted">{status || "Demo mode accepts any 6 digits when Supabase env vars are missing."}</p>

            <form className="mt-6" style={{ display: "grid", gap: "1rem" }} onSubmit={verifyOtp}>
              <label style={{ display: "grid", gap: ".35rem" }}>
                <span className="text-sm font-semibold text-best-ink">{t("auth.otp.label")}</span>
                <input type="text" inputMode="numeric" maxLength={6} placeholder="------" required value={token} onChange={(e) => setToken(e.target.value.replace(/\D/g, ""))} style={inputStyle} />
              </label>
              <button type="submit" disabled={busy} className="button-primary tap-target w-full px-6 py-3 font-semibold disabled:opacity-50">
                {busy ? "Checking..." : t("auth.otp.submit")}
              </button>
              <button type="button" className="tap-target w-full px-6 py-3 font-semibold" style={{ border: "1px solid var(--color-best-border)", borderRadius: ".75rem", background: "transparent", color: "var(--color-best-body)" }} onClick={() => window.location.href = "/login"}>
                {t("auth.otp.resend")}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
