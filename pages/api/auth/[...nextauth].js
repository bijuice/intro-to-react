import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import prismaInstance from "@/utilities/prismaInstance"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userExists = await prismaInstance.user
          .findUnique({
            where: {
              id: user.id,
            },
          })
          .catch((e) => {
            console.log(e.message)
          })

        console.log("exisiting user: ", userExists)

        if (!userExists) {
          const newUser = await prismaInstance.user
            .create({
              data: {
                id: user.id,
                image: user.image,
              },
            })
            .catch((e) => {
              console.log(e.message)
            })

          console.log("new user: ", newUser)
        }
      }

      return token
    },
  },
}

export default NextAuth(authOptions)
