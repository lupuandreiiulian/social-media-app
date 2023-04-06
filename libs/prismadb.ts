import { PrismaClient } from "@prisma/client"

// Define a separate object to hold the global prisma property
const globalPrisma: { prisma?: PrismaClient } = {}

const client = globalPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = client

export default client
