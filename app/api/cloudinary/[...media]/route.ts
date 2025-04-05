import {
  mediaHandlerConfig,
  createMediaHandler as createPagesMediaHandler,
} from "next-tinacms-cloudinary/dist/handlers";
import { NextRequest, NextResponse } from "next/server";

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
      // For production, implement your authorization logic
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});

// Adapter function to convert App Router requests to Pages Router format
async function handleRequest(
  request: NextRequest,
  { params }: { params: { media: string[] } }
) {
  return new Promise<NextResponse>((resolve) => {
    // Extract query parameters from the URL
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const directory = searchParams.get("directory") || "";

    // Create a compatible request object for the Pages Router handler
    const req: any = {
      method: request.method,
      headers: Object.fromEntries(request.headers),
      query: {
        media: params.media,
        directory,
      },
      body: request.body,
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
  });
}

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
