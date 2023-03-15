import prismaInstance from "@/utilities/prismaInstance"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed!" })
    return
  }

  const body = req.body

  const session = await getServerSession(req, res, authOptions)

  console.log(session)

  const { user } = session

  if (!user) {
    res.status(401).json({ message: "You must be signed in to create a post!" })
  }

  try {
    const response = await prisma.post.create({
      data: {
        content: body.content,
        userId: user.id,
        imageUrl: user.image,
      },
    })

    res
      .status(200)
      .json({ message: "Successfully created post", response: response })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Failed to create post." })
  }
}
