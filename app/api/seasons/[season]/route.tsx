import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { season: number } }
) {
  if (params.season > 13)
    return NextResponse.json({ error: "Season doesn&apos; exist" });

  return NextResponse.json({
    id: params.season,
    name: `Season ${params.season}`,
  });
}
