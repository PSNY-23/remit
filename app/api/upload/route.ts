import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/avif",
]);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB limit

/**
 * POST /api/upload
 * Handles multipart/form-data upload of images to Vercel Blob.
 */
export async function POST(request: NextRequest) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      return NextResponse.json(
        {
          error:
            "Vercel Blob storage is not configured. Please set the BLOB_READ_WRITE_TOKEN environment variable in your Vercel project settings or .env file.",
        },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { error: "No image file provided in request." },
        { status: 400 }
      );
    }

    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json(
        {
          error: `Unsupported file type: ${file.type || "unknown"}. Only JPEG, PNG, WebP, GIF, SVG, and AVIF images are supported.`,
        },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: `File size (${(file.size / (1024 * 1024)).toFixed(1)}MB) exceeds the maximum limit of 10MB.`,
        },
        { status: 400 }
      );
    }

    // Clean and generate a unique pathname to prevent overwriting
    const originalName = file.name || "image.png";
    const extension = originalName.includes(".")
      ? originalName.slice(originalName.lastIndexOf("."))
      : ".png";
    const baseName = originalName
      .replace(/\.[^/.]+$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .slice(0, 50);

    const uniqueId = Math.random().toString(36).substring(2, 8);
    const pathname = `articles/${Date.now()}-${baseName}-${uniqueId}${extension}`;

    // Upload to Vercel Blob
    const blob = await put(pathname, file, {
      access: "public",
      token,
    });

    return NextResponse.json(
      {
        url: blob.url,
        pathname: blob.pathname,
        contentType: blob.contentType,
        filename: originalName,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Vercel Blob upload error:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to upload image to Vercel Blob storage.",
      },
      { status: 500 }
    );
  }
}
