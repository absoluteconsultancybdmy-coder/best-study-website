import { NextResponse } from "next/server";

function phoneForSupabase(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("880")) return `+${digits}`;
  if (digits.startsWith("01")) return `+88${digits}`;
  return phone.trim();
}

export async function POST(request: Request) {
  const { phone, token } = await request.json();
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!phone || !token) return NextResponse.json({ error: "Phone and OTP are required." }, { status: 400 });
  if (!url || !key) return NextResponse.json({ access_token: "demo-session", demo: true });

  const res = await fetch(`${url}/auth/v1/verify`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ phone: phoneForSupabase(phone), token, type: "sms" }),
  });

  if (!res.ok) return NextResponse.json(await res.json(), { status: res.status });
  return NextResponse.json(await res.json());
}
