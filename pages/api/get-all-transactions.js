import prismaInstance from "@/utilities/prismaInstance"

export default async function handler(req, res) {
  const posts = await prismaInstance.post.findMany()

  res.status(200).json(posts)
}
