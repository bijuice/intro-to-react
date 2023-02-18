#How to get this running

1. Clone repo
2. `cd intro-to-react`
3. Run `npm install` in a terminal/cmd within the project directory


# Lesson 2

In this lesson we covered:

- Tailwind: what it is and how to use it.
- Practicing creating and using components.
- Used the example Next.js API endpoint to fetch data from the server.
- Consumed the endpoint using asynchronous functions and Axios.
- Used the useEffect hook to fetch data during the initial loading of the app.


## Tailwind

https://tailwindcss.com/docs/installation

Tailwind is a utility-first CSS framework. It gives us access to utility classes (such as p-2) that we can use directly in our HTML elements.
The biggest advantage of Tailwind is that it allows you to quickly write CSS without having to type a lot of the boilerplate that comes with CSS.
For example, with plain CSS we would style an element like this:

```
<style>
    .example-container {
        padding-left: 0.5rem;
        display: flex;
        flex-direction: column;
        background-color: red;
        opacity: 90%
    }
</style>

<div className="example-container">
    Super interesting content
</div>
```

In comparison, with Tailwind we could do this:

```
<div className="pl-2 flex flex-col bg-red-500 opacity-90"> 
    Super interesting content
</div>
```

We can also extend the functionality of Tailwind if we don't like the built-in classes by enclosing the new values in [].
For example, if we want the height of an element to be defined in pixels we can write h-[100px].

When working with Tailwind I would suggest using the official VSCode extension found here:
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss


## Next.js API endpoints

Being a fullstack framework, Next gives us access to some serverside features not present in React.
One of these features is an API. This API allows us to perform communication between the client and the server.

You can find Next API routes in the /pages/api directory. All files we place in this directory will be considered
API endpoints and only run serverside (as opposed to the other pages which run on the browser). The names 
of the route will determine how the endpoint is called e.g. /api/hello.js can be called using the router /api/hello
We will go into more details on how to name and structure files and how they relate to routes. 

You can read more about the structure of Next API routes in the /pages/api/hello.js directory.


## Asynchronous functions, Axios and the useEffect hook

Read about this in detail in the /pages/index.js file



