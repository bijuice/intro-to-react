import axios from "axios"
import { useState } from "react"

export default function CreatePost({ posts, setPosts }) {
  const [content, setContent] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmit, setIsSubmit] = useState(false)

  async function submitPost() {
    if (!content) {
      setMessage("Post content cannot be empty.")
      return
    }

    setIsSubmit(true)
    await axios
      .post("/api/create-post", {
        content: content,
      })
      .then((res) => {
        setMessage(res.data.message)

        const newPost = res.data.response

        setPosts([...posts, newPost])
      })
      .catch((err) => {
        setMessage(err.message)
      })

    setIsSubmit(false)
    setMessage("")
  }

  return (
    <form
      className="rounded-lg shadow-md px-5 py-5 w-[500px]  border-[1px] border-gray-200 flex flex-col gap-5 "
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      <h1 className="text-xl font-semibold text-gray-500">
        What{"'"}s on your mind?
      </h1>

      <textarea
        className="w-full border-slate-300 border-[1px]  rounded-md "
        rows={5}
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
        }}
      ></textarea>

      <p className="self-center text-sm">{message}</p>

      <button
        className="bg-slate-300 py-2 rounded-md text-gray-600"
        disabled={isSubmit}
        onClick={submitPost}
      >
        {isSubmit ? "Loading..." : "Post"}
      </button>
    </form>
  )
}
