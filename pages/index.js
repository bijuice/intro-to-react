import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("/api/get-all-posts").then((res) => {
      const data = res.data

      setPosts(data)
    })
  }, [])

  return (
    <>
      <Navbar />

      <main className="min-h-screen mt-10 flex flex-col items-center gap-5">
        {posts.map((post) => {
          return (
            <Card
              profileName={post.profileName}
              content={post.content}
              imageUrl={post.imageUrl}
            />
          )
        })}
      </main>
      <Footer />
    </>
  )
}
