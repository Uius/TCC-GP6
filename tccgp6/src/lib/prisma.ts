import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// Exporta uma única instância do PrismaClient, reutilizada entre recarregamentos em dev
export const prisma: PrismaClient =
  global.prisma ??
  new PrismaClient({
    // ...existing code...
  })

if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  global.prisma = prisma
}
