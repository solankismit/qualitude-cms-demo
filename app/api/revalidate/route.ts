import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

// Secret token for verification
const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN;

export async function POST(request: NextRequest) {
  try {
    // Verify the request has the correct token
    const token = request.headers.get("x-revalidate-token");

    // Skip token validation in development environment
    if (process.env.NODE_ENV !== "development") {
      if (!REVALIDATE_TOKEN || token !== REVALIDATE_TOKEN) {
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
      }
    }

    // Force cache clearing by using the '/' path with the force option
    revalidatePath("/", "layout");

    return NextResponse.json(
      {
        revalidated: true,
        message: "Site-wide revalidation triggered successfully",
        timestamp: Date.now(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during revalidation:", error);
    return NextResponse.json(
      {
        revalidated: false,
        message: "Error revalidating",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
