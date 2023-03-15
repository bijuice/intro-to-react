import prismaInstance from "@/utilities/prismaInstance"
import axios from "axios"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed." })
    return
  }

  const post = req.body

  const { user } = await getServerSession(req, res, authOptions)

  if (!user) {
    res.status(401).json({ message: "You must be signed in to post" })
  }

  try {
    const response = await prismaInstance.post.create({
      data: {
        content: post.content,
        imageUrl: user.image,
        userId: user.id,
      },
    })

    res
      .status(200)
      .json({ message: "Successfully created post", response: response })
  } catch (err) {
    res.status(500).json({ message: "Failed to create post. " })
  }
}
