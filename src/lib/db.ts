import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Null when DATABASE_URL is not set, so the site still runs without a database.
export const db: PrismaClient | null = process.env.DATABASE_URL
  ? (globalForPrisma.prisma ?? new PrismaClient())
  : null;

if (db && process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
