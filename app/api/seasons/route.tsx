import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const seasons = await prisma.season.findMany({
    orderBy: [
      {
        seasonNumber: "asc",
      },
    ],
  });

  return NextResponse.json(seasons);
}
