import { createHash } from "node:crypto";

export function clientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function hashIp(ip: string): string {
  return createHash("sha256").update(`${process.env.IP_HASH_SALT ?? ""}${ip}`).digest("hex");
}
