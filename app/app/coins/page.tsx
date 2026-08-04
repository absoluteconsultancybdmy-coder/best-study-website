"use client";

import Link from "next/link";
import { PortalShell, PortalAuthGate } from "@/components/portal/portal-shell";
import { useEffect, useState } from "react";

const HOW_TO_EARN = [
  { label: "ফ্রি ক্লাস সম্পন্ন করো", coins: "+10", active: false },
  { label: "প্রতিটি Quiz পাস করো", coins: "+5", active: false },
  { label: "টানা ৭ দিন লগইন করো", coins: "+25", active: false },
  { label: "কোর্স সম্পন্ন করো", coins: "+100", active: false },
  { label: "বন্ধুকে রেফার করো", coins: "+50", active: false },
] as const;

export default function CoinsPage() {
  const [session, setSession] = useState<string | null>(null);
  useEffect(() => { setSession(localStorage.getItem("best-study-session")); }, []);

  if (session === null) return null;
  if (!session) return <PortalAuthGate />;

  return (
    <PortalShell title="কয়েন">
      <div style={{ maxWidth: 560 }}>
        {/* Balance card */}
        <div
          style={{
            background: "linear-gradient(135deg, #006A4E 0%, #00563F 100%)",
            borderRadius: 16,
            padding: "2rem",
            color: "#FAF9F7",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "0.5rem" }}>তোমার কয়েন ব্যালান্স</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="#FDBA3B" />
              <text x="20" y="27" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1A1917" fontFamily="sans-serif">C</text>
            </svg>
            <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>0</span>
            <span style={{ opacity: 0.7 }}>Coins</span>
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.8rem", opacity: 0.6 }}>
            Coin দিয়ে কোর্স কিনতে বা অন্য সুবিধা নিতে পারবে।
          </p>
        </div>

        {/* Buy coins — coming soon */}
        <div
          style={{
            border: "1px dashed rgba(0,106,78,0.3)",
            borderRadius: 12,
            padding: "1.25rem",
            marginBottom: "2rem",
            background: "rgba(0,106,78,0.03)",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>Coin কিনুন</p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-best-muted)" }}>
            শীঘ্রই আসছে — bKash ও Nagad দিয়ে সরাসরি Coin কিনতে পারবে।
          </p>
        </div>

        {/* How to earn */}
        <h2 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          কীভাবে Coin আয় করবে?
        </h2>
        <ul style={{ display: "grid", gap: "0.5rem", listStyle: "none", padding: 0 }}>
          {HOW_TO_EARN.map((item) => (
            <li
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                background: "var(--color-best-paper)",
                borderRadius: 8,
                border: "1px solid var(--color-best-border)",
                opacity: item.active ? 1 : 0.6,
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>{item.label}</span>
              <span
                style={{
                  background: "#FDBA3B",
                  color: "#1A1917",
                  borderRadius: 999,
                  padding: "2px 10px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                {item.coins}
              </span>
            </li>
          ))}
        </ul>

        <p style={{ marginTop: "1.25rem", fontSize: "0.75rem", color: "var(--color-best-muted)" }}>
          Achievement সিস্টেম শীঘ্রই সক্রিয় হবে।{" "}
          <Link href="/contact" className="text-best-green no-underline hover:underline">
            প্রশ্ন থাকলে যোগাযোগ করো।
          </Link>
        </p>
      </div>
    </PortalShell>
  );
}
