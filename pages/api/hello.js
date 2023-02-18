// Read the official Next JS docs for api-routes: https://nextjs.org/docs/api-routes/introduction

/*
API routes export a default function called a handler.
These functions receive request (req) and response objects (res)

The req object has all details about the request including the request body. This is the data we receive from the client.
We'll look at how to utilize this data in future lessons.

The res object determines what we send back to the client.
By setting the status and passing a number to the function like so: res.status(200),
we notify the client whether the response has been successfull or not. 
You can read more about these status codes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
The .json() function allows us to send a JavaScript object with data that is converted to JSON format.
We use this to send useful data back to the client. 
*/
export default function handler(req, res) {
  res.status(200).json({
    name: "Abdul",
    age: 27,
    skills: "Fullstack"
  })
}
