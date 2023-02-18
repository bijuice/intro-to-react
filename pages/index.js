import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [name, setName] = useState("")

  const [counter, setCounter] = useState(0)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function toggleAuthenticated () {

        setIsAuthenticated(!isAuthenticated)
    }


  async function fetchName () {

    await axios.get('/api/hello').then(res => {
      const data = res.data
      console.log(data);
      setName(data.name)

    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
      fetchName()
  }, [])

  return (
    <>
      <Navbar />


      <button onClick={() => {
        setCounter(counter + 1)
      }}>Increment</button>

      <button onClick={toggleAuthenticated}>
        {
            isAuthenticated === true ? "Sign Out" : "Sign In"
        }
      </button>

      <div className="h-[100vh] flex flex-col gap-10 justify-center items-center pt-20">
        <Card imageUrl="/cat.jpg" profileName={name} content="I really love KamiLimu although some people say it's a cult :/" />
        <Card imageUrl="/cat.jpg" profileName={name} content="I really love KamiLimu although some people say it's a cult :/" />
        <Card imageUrl="/cat.jpg" profileName={name} content="I really love KamiLimu although some people say it's a cult :/" />
        <Card imageUrl="/cat.jpg" profileName={name} content="I really love KamiLimu although some people say it's a cult :/" />
      </div>
      <Footer />
    </>
  )
}


