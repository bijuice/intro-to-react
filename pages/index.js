import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  async function fetchName() {
    try {
      const response = await axios.get(`/api/Abdul`)
      console.log(response);

      const data = response.data

      setName(data.name)

    } catch (err) {

      console.log(err);
      setError(err.message)
    }
  }



  return <>

    <p>My name is {name}</p>
    <p className="text-red-500">{error}</p>
    <button
    className="p-2 border-2 border-blue-300 rounded-lg"
      onClick={fetchName}
    >Get Name</button>
  </>
}
