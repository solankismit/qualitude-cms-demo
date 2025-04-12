import {
  mediaHandlerConfig,
  createMediaHandler as createPagesMediaHandler,
} from "next-tinacms-cloudinary/dist/handlers";
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";
import { isAuthorized } from "@tinacms/auth";
import { v2 as cloudinary } from "cloudinary";
import { writeFile } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";

// Configure Cloudinary directly for fallback
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

export const config = mediaHandlerConfig;

// Create the Pages Router handler
const pagesHandler = createPagesMediaHandler({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
  authorized: async (req) => {
    try {
      if (process.env.NODE_ENV === "development") {
        return true;
      }
      const user = await isAuthorized(req);
      console.log("user", user);
      return (user && user.verified) || false;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});

// Helper function to convert NextRequest to a Node.js readable stream
async function requestToStream(request: NextRequest): Promise<Readable> {
  const arrayBuffer = await request.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null); // Signal the end of the stream
  return stream;
}

// Adapter function to convert App Router requests to Pages Router format
async function handleRequest(
  request: NextRequest,
  { params }: { params: { media: string[] } }
) {
  return new Promise<NextResponse>(async (resolve) => {
    try {
      // Extract query parameters from the URL
      const url = new URL(request.url);
      const searchParams = url.searchParams;
      const directory = searchParams.get("directory") || "";

      // For POST requests (file uploads), we need special handling
      if (request.method === "POST") {
        try {
          // Get the file from the request
          const formData = await request.formData();
          const file = formData.get("file") as File;

          if (!file) {
            return resolve(
              NextResponse.json({ error: "No file provided" }, { status: 400 })
            );
          }

          // Convert the file to a buffer
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          // Create a temporary file
          const tempFilePath = join(
            tmpdir(),
            `upload-${Date.now()}-${file.name}`
          );
          await writeFile(tempFilePath, buffer);

          // Upload to Cloudinary
          const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              {
                folder: directory,
                resource_type: "auto",
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              }
            );

            // Create a readable stream from the buffer
            const fileStream = new Readable();
            fileStream.push(buffer);
            fileStream.push(null);
            fileStream.pipe(uploadStream);
          });

          return resolve(NextResponse.json(result));
        } catch (error) {
          console.error("Error uploading to Cloudinary:", error);
          return resolve(
            NextResponse.json(
              {
                error: "Failed to upload to Cloudinary",
                details: error instanceof Error ? error.message : String(error),
              },
              { status: 500 }
            )
          );
        }
      }

      // For other requests, use the TinaCMS handler
      // Create a compatible request stream from the NextRequest body
      const bodyStream = await requestToStream(request);

      // Create a compatible request object for the Pages Router handler
      const req: any = {
        method: request.method,
        headers: Object.fromEntries(request.headers),
        query: {
          media: params.media,
          directory,
          clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
        },
        // Add Stream-like properties that multer expects
        pipe: function (destination: any) {
          return bodyStream.pipe(destination);
        },
        on: bodyStream.on.bind(bodyStream),
        once: bodyStream.once.bind(bodyStream),
        emit: bodyStream.emit.bind(bodyStream),
        pause: bodyStream.pause.bind(bodyStream),
        resume: bodyStream.resume.bind(bodyStream),
        unpipe: bodyStream.unpipe?.bind(bodyStream) || (() => req),
      };

      // Create a compatible response object for the Pages Router handler
      const res: any = {
        status: function (statusCode: number) {
          this.statusCode = statusCode;
          return this;
        },
        json: function (data: any) {
          resolve(NextResponse.json(data, { status: this.statusCode }));
        },
        send: function (data: any) {
          resolve(NextResponse.json(data, { status: this.statusCode }));
        },
        end: function () {
          resolve(NextResponse.json({}, { status: this.statusCode || 200 }));
        },
        setHeader: function () {
          return this;
        },
      };

      // Call the Pages Router handler
      pagesHandler(req, res);
    } catch (error) {
      console.error("Error in handleRequest:", error);
      resolve(
        NextResponse.json(
          {
            error: "Internal server error",
            details: error instanceof Error ? error.message : String(error),
          },
          { status: 500 }
        )
      );
    }
  });
}

// Define the route handlers with proper Next.js App Router configuration
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(
  request: NextRequest,
  context: { params: { media: string[] } }
) {
  return handleRequest(request, context);
}

export async function POST(
  request: NextRequest,
  context: { params: { media: string[] } }
) {
  return handleRequest(request, context);
}

export async function PUT(
  request: NextRequest,
  context: { params: { media: string[] } }
) {
  return handleRequest(request, context);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { media: string[] } }
) {
  return handleRequest(request, context);
}

export async function PATCH(
  request: NextRequest,
  context: { params: { media: string[] } }
) {
  return handleRequest(request, context);
}
