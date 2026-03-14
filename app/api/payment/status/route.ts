import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");

  const { data } = await supabase
    .from("bookings")
    .select("status")
    .eq("reference", reference)
    .single();

  return NextResponse.json({
    status: data?.status || "pending",
  });
}
