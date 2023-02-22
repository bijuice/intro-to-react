import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  /*
  Some of the actions we make in JavaScript take time to complete. For example, fetching data from a server.
  It would be unwise to freeze the whole application to wait for the result of this process as it would make
  the app stop working every time some data is being fetched.

  We can overcome this challenge by using asynchronous functions.
  Asynchronous (async) functions allow us to inform the app that a task should be done in the background while
  we complete other tasks in the main process. When this task is complete, the async function notifies
  the main process that the result can now be used. Using this method the main process is uninterrupted and
  the app will not freeze while fetching data.

  Asynchronous functions are denoted with the 'async' keyword before the function declaration.
  Within the async function we 'await' a result. The 'await' keyword allows us to wait for a result without 
  blocking the main process. 

  You can read more about async/await here: https://javascript.info/async-await
  */

  const [name, setName] = useState("")

  async function fetchName() {
    /*
    https://www.npmjs.com/package/axios

    We use Axios as a http handler. It allows us to make all sorts of requests
    For example, here we're using axios.get to make a GET request. 
    Similarly we can use axios.post to make a POST request. 

    We can use the result of the request using the .then() method which accepts a 
    callback function within it. The callback function within the .then() receives a
    response object. We can then process this response and use the data in our code.

    We can append a .catch() block to catch any errors that may have occurred.
    This includes includes any responses that are not in the 200 (OK) series status codes,
    as well as internal errors or connection issues. The catch method also accepts a callback
    function with the error object as a parameter in a similar way to the .then() method.
    */
    await axios
      .get("/api/hello")
      .then(
        //this is the .then() method
        (res) => {
          //this is a callback function within the .then() method.

          //the response object has lots of properties but here
          //we're only interested in the .data property which was sent by our endpoint.
          const data = res.data

          //during development we can log all sorts of things to see if we're getting the expected result
          console.log(res.data)

          //here we finally use the name property we get from the data from the response.
          //we set the state 'name' using the setName() function
          setName(data.name)
        }
      )
      .catch(
        //this is a .catch() method

        (err) => {
          //callback function within the .catch() method.

          //here we are just logging the error but in a real application we can
          //notify the user something has gone wrong.
          console.log(err)
        }
      )
  }

  /*
  https://reactjs.org/docs/hooks-effect.html

  The useEffect hook is another common React hook. 
  It lets us perform side effects within React components.
  Side effects are any actions outside of the usual React scope.
  Examples of side effects are fetching data from a server or interacting with local storage.

  The useEffect hook accepts two parameters: a callback function and a dependency array.

  The callback function performs an action. You can put any logic you want to run within 
  this function. Here we are using it to run fetchName() which requests data 
  from a server. 

  The dependency array is a bit tricky to understand but in essence it just notifies React
  when to run the actions defined in the callback function. An empty array [] will cause the
  useEffect hook to only run once. 

  Adding variables to the dependency array will cause react to watch the variable and run
  the code within the callback function every time the variable changes. For example,
  we have added isAuthenticated to the dependency array. This means that every time the isAuthenticated
  variable changes the callback function will run again.
  */

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    //this is the first parameter passed to the useEffect hook; a callback function.

    //here we call the fetchName function which fetches data from the server.
    fetchName()
  }, [isAuthenticated])

  return (
    <>
      <p>My name is {name}</p>
      <button
        className="p-2 border-2 flex-col gap-2 border-blue-300 rounded-lg"
        onClick={fetchName}
      >
        Get Name
      </button>
    </>
  )
}
