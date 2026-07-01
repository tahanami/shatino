import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const customerId = searchParams.get("id");

    if (!customerId) {
      return NextResponse.json(
        { error: "customer id required" },
        { status: 400 }
      );
    }

    const jsonPath = path.join(
      process.cwd(),
      "data",
      "customers.json"
    );

    if (!fs.existsSync(jsonPath)) {
      return NextResponse.json({});
    }

    const raw = fs.readFileSync(jsonPath, "utf8");

    const db = JSON.parse(raw || "{}");

    return NextResponse.json(
      db[customerId] || {
        price: 0,
        photos: [],
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "server error" },
      { status: 500 }
    );
  }
}