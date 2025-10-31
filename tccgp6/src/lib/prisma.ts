import { PrismaClient } from "@/generated/prisma";

declare global {
	// @ts-ignore
	var __prisma?: PrismaClient;
}

// fallback para development usando Postgres em localhost.
// Substitua: postgres:password@127.0.0.1:5432/tccdb pelo seu usuário/senha/db se quiser.
const FALLBACK_DB_URL =
	"postgresql://postgres:password@127.0.0.1:5432/tccdb?schema=public";

const dbUrl = process.env.DATABASE_URL ?? FALLBACK_DB_URL;

const prisma =
	globalThis.__prisma ??
	new PrismaClient({
		datasources: {
			db: {
				url: dbUrl,
			},
		},
	});

if (process.env.NODE_ENV !== "production") {
	// @ts-ignore
	globalThis.__prisma = prisma;
}

export default prisma;