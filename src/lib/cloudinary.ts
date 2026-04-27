import { v2 as cloudinary } from "cloudinary";

function ensureCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Missing Cloudinary environment variables.");
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
}

export type CloudinaryPhoto = {
  publicId: string;
  url: string;
  width: number;
  height: number;
};

type CloudinarySearchResource = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
};

export async function getPortfolioPhotos(folder: string): Promise<CloudinaryPhoto[]> {
  ensureCloudinaryConfig();
  const expression = `resource_type:image AND folder="${folder}"`;
  const result = await cloudinary.search.expression(expression).sort_by("public_id", "asc").max_results(200).execute();
  const resources = (result.resources ?? []) as CloudinarySearchResource[];

  return resources.map((resource) => ({
    publicId: resource.public_id,
    url: resource.secure_url,
    width: resource.width,
    height: resource.height,
  }));
}
