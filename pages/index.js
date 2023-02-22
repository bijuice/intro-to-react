import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16 flex flex-col items-center">
        <Card
          imageUrl="/cat.jpg"
          profileName="Abdul"
          content="I really love KamiLimu although some people say it's a cult :/"
        />
      </main>
      <Footer />
    </>
  )
}
