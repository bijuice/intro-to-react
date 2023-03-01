import prismaInstance from "@/services/prismaInstance"

export default async function handler(req, res) {
  const posts = await prismaInstance.posts.findMany()

  res.status(200).json(posts)
}
