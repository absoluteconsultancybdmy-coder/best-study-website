import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const valId = form.get("val_id")?.toString();
  const tranId = form.get("tran_id")?.toString();
  const storeId = process.env.SSLCZ_STORE_ID;
  const storePassword = process.env.SSLCZ_STORE_PASSWORD;

  if (!valId || !storeId || !storePassword) {
    return NextResponse.json({ status: "received", verified: false });
  }

  const sandbox = process.env.SSLCZ_SANDBOX !== "false";
  const origin = sandbox ? "https://sandbox.sslcommerz.com" : "https://securepay.sslcommerz.com";
  const url = `${origin}/validator/api/validationserverAPI.php?${new URLSearchParams({
    val_id: valId,
    store_id: storeId,
    store_passwd: storePassword,
    format: "json",
  })}`;
  const validation = await fetch(url).then((res) => res.json());
  const verified = validation.status === "VALID" && validation.risk_level !== "1";

  if (verified && tranId) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
    await supabase
      .from("enrollments")
      .update({ status: "active", enrolled_at: new Date().toISOString() })
      .eq("tran_id", tranId);
  }

  return NextResponse.json({ status: validation.status, tran_id: tranId, verified });
}
