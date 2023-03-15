import { PrismaClient } from "@prisma/client"

let prismaInstance

if (process.env.NODE_ENV === "production") {
  prismaInstance = new PrismaClient()
} else {
  if (!global.prismaInstance) {
    prismaInstance = new PrismaClient()
  }

  prismaInstance = global.prismaInstance
}

export default prismaInstance
