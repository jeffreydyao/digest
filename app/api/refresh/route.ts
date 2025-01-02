/**
 * Invalidates the cached RSC + HTML payload for the '/' route for the
 * current production deployment in Vercel's full route cache, triggering
 * ISR again on the next page visit.
 */
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export function GET() {
  revalidatePath("/"); // Bust cache!
  return Response.json({
    success: true,
    timestamp: new Date(),
  });
}
