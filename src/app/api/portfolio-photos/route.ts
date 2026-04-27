import { NextResponse } from "next/server";
import { getPortfolioPhotos } from "@/lib/cloudinary";

const PORTFOLIO_FOLDER = process.env.CLOUDINARY_PORTFOLIO_FOLDER ?? "portfolio";

export async function GET() {
  try {
    const photos = await getPortfolioPhotos(PORTFOLIO_FOLDER);
    return NextResponse.json({ photos }, { headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=86400" } });
  } catch (error) {
    console.error("Failed to fetch portfolio photos from Cloudinary", error);
    return NextResponse.json({ photos: [], error: "Failed to fetch photos." }, { status: 500 });
  }
}
