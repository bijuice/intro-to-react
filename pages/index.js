import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Spinner from "@/components/Spinner"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [posts, setPosts] = useState([])

  const [error, setError] = useState("")

  const [isLoading, setIsLoading] = useState(true)

  async function getAllTransactions() {
    await axios
      .get("/api/get-all-transactions")
      .then((res) => {
        const data = res.data

        setPosts(data)
      })
      .catch((e) => {
        const data = e.response.data

        setError(data.message)
      })

    setIsLoading(false)
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16 flex flex-col gap-5 items-center">
        <p className="text-red-500">{error}</p>

        {isLoading ? <Spinner /> : null}
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              profileName={post.profileName}
              imageUrl={post.imageUrl}
              content={post.content}
            />
          )
        })}
      </main>
      <Footer />
    </>
  )
}
