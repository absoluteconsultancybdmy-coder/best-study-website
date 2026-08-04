import { NextResponse } from "next/server";

const sandbox = process.env.SSLCZ_SANDBOX !== "false";
const sslczOrigin = sandbox ? "https://sandbox.sslcommerz.com" : "https://securepay.sslcommerz.com";

export async function POST(request: Request) {
  const order = await request.json();
  const storeId = process.env.SSLCZ_STORE_ID;
  const storePassword = process.env.SSLCZ_STORE_PASSWORD;
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const tranId = `BST-${Date.now()}`;

  if (!storeId || !storePassword) {
    return NextResponse.json({ gatewayUrl: `/checkout/success?tran_id=${tranId}&demo=1` });
  }

  const body = new URLSearchParams({
    store_id: storeId,
    store_passwd: storePassword,
    total_amount: process.env.COURSE_PRICE_BDT ?? "500",
    currency: "BDT",
    tran_id: tranId,
    success_url: `${origin}/checkout/success`,
    fail_url: `${origin}/checkout/failed`,
    cancel_url: `${origin}/checkout/failed`,
    ipn_url: `${origin}/api/payments/sslcz/ipn`,
    product_name: order.courseSlug ?? "BEST Tutorial Home Course",
    product_category: "Education",
    product_profile: "general",
    cus_name: order.name ?? "Student",
    cus_email: order.email ?? "student@example.com",
    cus_add1: "Naogaon",
    cus_city: "Naogaon",
    cus_country: "Bangladesh",
    cus_phone: order.phone ?? "01700000000",
    shipping_method: "NO",
  });

  const res = await fetch(`${sslczOrigin}/gwprocess/v4/api.php`, { method: "POST", body });
  const data = await res.json();
  if (!data.GatewayPageURL) return NextResponse.json(data, { status: 502 });
  return NextResponse.json({ gatewayUrl: data.GatewayPageURL, tranId });
}
