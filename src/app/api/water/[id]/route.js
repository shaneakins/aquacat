import connectMongoDB from "../../../../lib/mongodb";
import Water from "../../../../models/water";

import { NextResponse } from "next/server";

// api/water/65511233dee8268b653bd463
export async function PUT(request, { params }) {
  const { id } = params;
  const { date, info } = await request.json();
  await connectMongoDB();
  await Water.findByIdAndUpdate(id, { date, info });
  return NextResponse.json({ message: "Entry updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const water = await Water.findOne({ _id: id });
  return NextResponse.json({ water }, { status: 200 });
}
