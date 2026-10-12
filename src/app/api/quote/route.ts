import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const data = await request.json();

  const required = ["name", "email", "message"];
  for (const field of required) {
    if (!data[field]) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 });
    }
  }

  const { error } = await supabase.from("quotes").insert({
    name: data.name,
    email: data.email,
    company: data.company,
    phone: data.phone,
    service: data.service,
    material: data.material,
    quantity: data.quantity,
    timeline: data.timeline,
    budget: data.budget,
    message: data.message,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}