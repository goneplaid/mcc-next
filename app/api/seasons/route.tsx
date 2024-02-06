import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // Hard-coded for now, update with real data later on
  const seasons = Array.from(Array(13).keys()).map((season) => {
    const seasonIdx = season + 1;
    return {
      id: seasonIdx,
      name: `Season ${seasonIdx}`,
    };
  });

  return NextResponse.json(seasons);
}
