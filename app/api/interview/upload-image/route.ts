import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    // Validate mime type
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
    ];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Invalid file type. Only JPG, PNG, WEBP, GIF, and SVG are supported.",
        },
        { status: 400 }
      );
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json(
        {
          error:
            "BLOB_READ_WRITE_TOKEN is missing in your .env file. Please add your Vercel Blob Read-Write token to enable Vercel Storage locally.",
        },
        { status: 500 }
      );
    }

    // Generate safe unique filename
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const ext = path.extname(originalName) || ".png";
    const baseName = path.basename(originalName, ext);
    const uniqueFilename = `${baseName}-${Date.now()}${ext}`;

    // Upload directly to Vercel Blob Storage
    const blob = await put(`uploads/${uniqueFilename}`, file, {
      access: "public",
      contentType: file.type,
      token,
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: uniqueFilename,
    });
  } catch (error: any) {
    console.error("Vercel Blob upload failed:", error);
    return NextResponse.json(
      { error: error.message || "Failed to upload image to Vercel Blob Storage" },
      { status: 500 }
    );
  }
}
