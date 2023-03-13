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

  console.log(post)

  const session = await getServerSession(req, res, authOptions)

  console.log(session)

  //   prismaInstance.posts.create({
  //     data: {},
  //   })

  res.status(200).json("ok")
}
