import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaClient } from "@prisma/client"
import prismaInstance from "@/services/prismaInstance"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        let dbUser = await prismaInstance.users
          .findUnique({
            where: {
              id: user.id,
            },
          })
          .catch((e) => {
            console.log(e.message)
          })

        console.log("user exists: ", dbUser)

        if (!dbUser) {
          const newUser = await prismaInstance.users
            .create({
              data: {
                id: user.id,
                image: user.image,
              },
            })
            .catch((e) => {
              console.log(e.message)
            })

          console.log("user created: ", newUser)
        }
      }

      return token
    },
  },
}

export default NextAuth(authOptions)
