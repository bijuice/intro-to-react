import { useState } from "react"

export default function Navbar() {

const [isAuthenticated, setIsAuthenticated] = useState(false)

    function toggleAuthenticated () {

        setIsAuthenticated(!isAuthenticated)
    }

  return (
    <nav className="flex justify-between px-10 py-7 bg-slate-300">
      <h1 className="text-purple-500 text-2xl font-bold">Banter</h1>

      <button onClick={toggleAuthenticated}>
        {
            isAuthenticated === true ? "Sign Out" : "Sign In"
        }
      </button>
    </nav>
  )
}
