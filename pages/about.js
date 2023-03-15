import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useSession } from "next-auth/react"

export default function About() {
  return (
    <>
      <Navbar />

      <main className="h-screen">
        Banter is a social media web application for KamiLimu students
      </main>

      <Footer />
    </>
  )
}
