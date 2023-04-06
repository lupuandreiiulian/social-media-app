import { PrismaClient } from "@prisma/client"

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined
    }
  }
}

const client = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") global.prisma = client

export default client
