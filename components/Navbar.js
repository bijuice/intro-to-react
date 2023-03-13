import { useState } from "react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
  const { data: session, status } = useSession()

  console.log("session: ", session)
  console.log("status: ", status)

  return (
    <nav className="flex justify-between px-10 py-7 bg-slate-300">
      <h1 className="text-purple-500 text-2xl font-bold">Banter</h1>

      <div className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {session ? (
          <button
            onClick={() => {
              signOut()
            }}
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => {
              signIn()
            }}
          >
            Sign In
          </button>
        )}

        <div className="rounded-full overflow-hidden h-10 w-10">
          <img src={session?.user.image} className="object-cover" />
        </div>
      </div>
    </nav>
  )
}
