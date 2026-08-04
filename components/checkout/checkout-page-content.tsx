"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { useLanguage } from "@/lib/i18n/language-context";

interface CheckoutPageContentProps {
  courseSlug: string;
}

const inputStyle: React.CSSProperties = {
  border: "1px solid var(--color-best-border)",
  borderRadius: ".65rem",
  padding: ".75rem 1rem",
  background: "var(--color-best-cream)",
  color: "var(--color-best-body)",
  fontSize: "1rem",
  width: "100%",
};

const CLASS_OPTIONS = ["3","4","5","6","7","8","9","10","SSC","HSC"];
const CLASS_LABELS = ["ক্লাস ৩","ক্লাস ৪","ক্লাস ৫","ক্লাস ৬","ক্লাস ৭","ক্লাস ৮","ক্লাস ৯","ক্লাস ১০","SSC","HSC"];

export function CheckoutPageContent({ courseSlug }: CheckoutPageContentProps) {
  const { t } = useLanguage();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function pay(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/payments/sslcz/initiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseSlug,
        name: form.get("name"),
        phone: form.get("phone"),
        className: form.get("className"),
      }),
    });
    setBusy(false);
    const data = await res.json();
    if (!res.ok || !data.gatewayUrl) return setError("Payment শুরু করা যায়নি। আবার চেষ্টা করুন।");
    window.location.href = data.gatewayUrl;
  }

  return (
    <section className="belief-story-section py-16 sm:py-24">
      <Container>
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ border: "1px solid var(--color-best-border)", borderRadius: "1.25rem", background: "var(--color-best-paper)", padding: "1.75rem" }}>
            <span className="story-kicker" lang="en">Course</span>
            <h2 className="mt-3 text-xl font-bold text-best-ink">{t("checkout.course")}</h2>
            <p className="mt-2 text-best-muted">BEST English course · slug: {courseSlug}</p>
            <p className="mt-6 text-sm text-best-muted">SSLCommerz checkout is connected. Local demo redirects to success until store credentials are set.</p>
          </div>

          <div style={{ border: "1px solid var(--color-best-border)", borderRadius: "1.25rem", background: "var(--color-best-paper)", padding: "1.75rem" }}>
            <h2 className="text-xl font-bold text-best-ink">{t("checkout.title")}</h2>
            <p className="mt-2 text-sm text-best-body">{t("checkout.lead")}</p>

            <form className="mt-6" style={{ display: "grid", gap: "1rem" }} onSubmit={pay}>
              <label style={{ display: "grid", gap: ".35rem" }}>
                <span className="text-sm font-semibold text-best-ink">{t("checkout.name")}</span>
                <input name="name" type="text" placeholder="পুরো নাম" required style={inputStyle} />
              </label>
              <label style={{ display: "grid", gap: ".35rem" }}>
                <span className="text-sm font-semibold text-best-ink">{t("checkout.phone")}</span>
                <input name="phone" type="tel" placeholder="01XXXXXXXXX" required style={inputStyle} />
              </label>
              <label style={{ display: "grid", gap: ".35rem" }}>
                <span className="text-sm font-semibold text-best-ink">{t("checkout.class")}</span>
                <select name="className" required style={inputStyle}>
                  <option value="">ক্লাস বেছে নাও</option>
                  {CLASS_OPTIONS.map((val, i) => <option key={val} value={val}>{CLASS_LABELS[i]}</option>)}
                </select>
              </label>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={busy} className="button-primary tap-target w-full px-6 py-3 font-semibold disabled:opacity-50">
                {busy ? "Opening payment..." : t("checkout.submit")}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
