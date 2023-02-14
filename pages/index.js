//React hooks must be imported to be used in a particular file
import { useState } from "react"



//React functional components are Javascript functions that return JSX (HTML) elements
export default function Home() {


  /*
  The useState hook is used to create and modify state.
  The useState hook is a function that returns two values: the state variable "counter" and the setState function "setCounter"
  State variables and functions are defined within an array i.e [counter, setCounter].
  They can have any names; however, the first value will always be the state variable and the second is the setState function.
  */
  const [counter, setCounter] = useState(0)


  function handleClick() {
    //we use set state functions to modify the state of the React app
    //This allows React to dynamically re-render the HTML elements to show new data.
    setCounter(counter +1)
  }

  return (
    <>
      {/* Javascript variables can be used directly within JSX when enclosed in {} characters */}
      <p>The button was pressed: {counter} times</p>


      {/* All JSX elements have access to events similar to plain JavaScript events. For example this button uses an onClick events.
      We can either use callback functions in events or we can pass functions directly.
      Be sure to pass the function rather than call it: 
      Correct: onClick={handleClick} 
      Wrong: onClick={handleClick()} */}
      <button
      onClick={handleClick}>Press Me</button>

      {/* Data can be passed to components like so */}
      <HelloWorld name="Abdul" />
      <HelloWorld name="Bob" />
    </>
  )
}


//We can define reusable components like this.
function HelloWorld (props) {
  return <div>
    <h1>Hello world</h1>
    {/* We can access data passed to the component using the props object */}
    <p>My name is: {props.name}</p>
  </div>
}

