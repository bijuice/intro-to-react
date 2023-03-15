import axios from "axios"
import { useState } from "react"

export default function CreatePostForm({ posts, setPosts }) {
  const [content, setContent] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function submitPost() {
    setLoading(true)
    if (!content) {
      setMessage("A post must have content")
      return
    }

    await axios
      .post("/api/create-post", {
        content: content,
      })
      .then((res) => {
        setMessage("Successfully created post")

        const newPost = res.data.response

        setContent("")
        setPosts([...posts, newPost])
      })
      .catch((err) => {
        setMessage("Failed to create post")
      })

    setLoading(false)
  }

  return (
    <form
      className="rounded-lg shadow-md px-5 py-5 w-[500px]  border-[1px] border-gray-200 flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <h1>Whats on your mind?</h1>

      <textarea
        className="w-full border-[1px] border-gray-200 rounded-md"
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
        }}
      ></textarea>
      <p>{message}</p>

      <button className="bg-slate-300 py-1 rounded-md" onClick={submitPost}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  )
}
