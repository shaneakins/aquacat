import connectMongoDB from "../../../lib/mongodb";
import Water from "../../../models/water";

import { NextResponse } from "next/server";

// api/water
export async function POST(request) {
  const { date, info } = await request.json();
  await connectMongoDB();
  await Water.create({ date, info });
  return NextResponse.json({ message: "Entry added" }, { status: 201 });
}

// api/water
export async function GET() {
  await connectMongoDB();
  const waters = await Water.find();
  return NextResponse.json({ waters }, { status: 200 });
}

// api/water?id=65511233dee8268b653bd463
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Water.findByIdAndDelete(id);
  return NextResponse.json({ message: "Entry deleted" }, { status: 200 });
}
