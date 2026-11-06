import { db } from "./db";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

// Fallback used only when no database is configured (local dev).
const memory = new Map<string, number[]>();

export async function rateLimit(ipHash: string): Promise<boolean> {
  if (db) {
    try {
      const count = await db.inquiry.count({
        where: { ipHash, createdAt: { gte: new Date(Date.now() - WINDOW_MS) } },
      });
      return count < MAX_HITS;
    } catch (err) {
      console.error("[rate-limit] db check failed, using memory", err);
    }
  }
  const now = Date.now();
  const recent = (memory.get(ipHash) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    memory.set(ipHash, recent);
    return false;
  }
  recent.push(now);
  memory.set(ipHash, recent);
  return true;
}
