import { useState } from "react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="flex justify-between px-10 py-7 bg-slate-300">
      <h1 className="text-purple-500 text-2xl font-bold">Banter</h1>

      <div className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/protected/about">About</Link>

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

        {session ? (
          <div className="rounded-full h-10 w-10 overflow-hidden">
            <img src={session.user.image} />
          </div>
        ) : null}
      </div>
    </nav>
  )
}
