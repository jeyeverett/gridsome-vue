---
slug: "connecting-nodejs-to-frontend"
date: "2022-01-10"
title: "Connecting a Node.js Web API to a React.js Frontend"
author:
  name: "jeysen-freedman"
  bio: "Full Stack Web Developer"
  image: ../../media/jeysen-freedman.jpg
tags:
  [
    "nodejs",
    "npm",
    "javascript",
    "reactjs",
    "backend",
    "web server",
    "middleware",
    "api",
    "expressjs",
    "coding",
  ]
summary: ""
pillar: "full-stack-nodejs"
pillarContent:
  image: ./media/nodejs_logo.png
  pillarTitle: "Building a Full Stack Node.js Application | The Step-by-Step JavaScript Developer's Guide"
  text: "Welcome to the only guide you'll need to build full stack JavaScript applications.  This ongoing series is here to help supercharge your JavaScript development journey.  Each article in the series covers the relevant topics you need to build awesome web apps.  Join me in investigating topics like backend and frontend development, cloud deployment, UI/UX, and more.  Learn everything you need to excel as a JavaScript developer.  We'll cover every detail of web development, from web servers and HTTP, to frontend frameworks and beyond.  Its 2022 and you need the most up to date information you can get.  Everything I share with you comes from my own <em>current</em> experience.  So what are you waiting for?  Let's get started."
image:
  pathLarge: ./media/connecting-nodejs-to-client_large.jpg
  pathSmall: ./media/connecting-nodejs-to-client_small.jpg
  alt: "Laptop with JavaScript code"
  caption: 'Photo by <a href="https://unsplash.com/@blakeconnally?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><i>Blake Connally</i></a> on <a href="https://unsplash.com/s/photos/javascript?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><i>Unsplash</i></a>'
---

> This is part three of **"Building a Full Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide"**. [Find the full series here](/blog/full-stack-nodejs).

## Introduction

In the previous article you learned how to use the core **path**, **fs**, and **http** _Node.js_ modules used in building a web server. You set up some _express_ middleware to serve static assets, built your first server endpoint, and installed the Nodemon and Morgan development dependencies.

For a recap, including the code needed to continue with Part 3, see [Part 2 - _"Building a Node.js Web Server"_](/blog/full-stack-nodejs/building-a-nodejs-web-server/#express) starting from _Express_.

In this article we'll begin building a frontend user interface (UI) with React.js, style it with TailwindCSS, add some additional backend API endpoints, introduce error handling, manage the sending of JSON data between the frontend and backend, write and read to the file system, and more.

## Frontend user interface

In order to make use of our Node.js API, we need a way to interact with it. This interaction usually occurs between the backend API and a frontend UI. Since [React.js](https://reactjs.org/) is one of the most popular modern ways to build a frontend UI, we'll use it to get started talking to our Node.js API.

> The term **"frontend"** is another word for the **client-side** (browser) code used to present a UI to users and give them access to all the functionality the backend Node.js API provides.

> The frontend and backend communicate over HTTP.

> There are tools to interact with a backend API **without** building a frontend, such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/), but we'll look at those later in the series.

### React

React.js is a frontend JavaScript library used to build efficient interactive user interfaces. It's used with dynamic applications that want to constantly update the UI with different information.

Without a library like React you'd either have to refresh the entire web page to see the updated information, or write a lot of JavaScript to orchestrate the changes (a difficult task to do efficiently).

If you need a good example of how React is used, think of its inventor: **Facebook**. A typical Facebook page has a lot going on, with every interaction resulting in some type of update to the UI. Since web browsers have limited performance, it was an absolute must for Facebook to develop some type of technology to help them scale their applications and React was the result.

Alternatives to React include Vue.js, Angular, and Svelte.

Because our project is only intended for learning purposes we'll include React in our project via CDN. Keep in mind that this isn't the approach you'd take to build any serious type of React app.

We need the core React package along with the **react-dom** which is what allows React to work with the web browser.

> If you've heard of React Native, or Electron, they use their own versions of **react-dom** alongside the core React package to build products for Android/iOS and cross-platform desktop applications.

Since web browsers don't understand React, we use what's called a **transpiler** to convert React code into plain JavaScript. Transpilers are also called source-to-source compilers because they transform code written in one language, into code written in another language. In this case, even though React is built on JavaScript, it uses its own special syntax called JSX which needs to be transformed before the browser can understand it.

> You should know about transpilers are also used to transform ES6+ JavaScript into earlier JavaScript versions. Since older browsers may not support ES6+, if you want your JavaScript code to run on as many browsers as possible you need to transform it into a pre-ES6 version, usually ES5

The transpiler most used with JavaScript and React is called [Babel](https://babeljs.io/) and we can include it in our project via CDN as well.

#### Getting started with react

Include these CDN links in the head of the index.html page located in your public folder:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>Express</title>
  </head>
  <body>
    <h1>Express</h1>
    <div id="app"></div>
  </body>
</html>
<script type="text/babel">
  // All React code will be written here
</script>
```

As you can see, we don't need to do very much to get started with React. We'll write all the React code in the `script` tag at the bottom, and it'll be inserted into the HTML page within the `div` element with `id="app"`.

> Note that you need to specify `type="text/babel"` in the script tag.

Run your server with `npm start` and navigate to `http://localhost:3000/`. The web page should look like it did before, but check the _Console_ tab in the devtools for any errors.

You can check that React is included and operational by typing `React.version` into the devtools console.

```
> React.version
< '17.0.2'
```

#### Building a react component

A React app is _composed_ of **components**.

Think of a component as a function that returns a snippet of HTML.

```js
function example() {
  return <h1>This isn't so bad!</h1>;
}
```

The typical strategy for building applications with React is to reduce components to their smallest possible size. For example, it would be incorrect to use a single component to return the HTML for your entire web page.

Instead, you would logically group HTML into components, such as a button component, a navigation component composed of navigation _link_ components, etc.

This is easier to understand if you see it, so let's build a button component that triggers a browser _alert_.

Typically, a component named **App** acts as the parent or top-level container for a React app, so we'll create this component too and use it to render the Button component.

> React components are always capitalized.

```js
//These are called "functional components"
function Button() {
  return <button onClick={() => alert("You did it!")}>Click Me!</button>;
}

function App() {
  return (
    <main>
      <Button />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
```

Using [_arrow function syntax_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) we provide an anonymous function to the button's `onClick` handler. Clicking the button triggers the anonymous function and displays the browser alert.

> Most of the **event attributes** available on default HTML tags are available in React using the camel case syntax shown here.

We call the `render` method available on the `ReactDOM` object which takes the `<App />` component that holds our `<Button />` and inserts it into the HTML element retrieved by `document.getElementById("app")`.

With your server running, you should be able to visit `http://localhost:3000/` and see the button in action.

#### Adding state to react components

React components can do more than just return HTML. They can receive data from parent components or global state stores and they can hold state within themselves.

Since we're using functional components, we'll use the React **hook** called **useState** to hold state within the Button component. We'll also pass a string value down to the Button from its _App_ parent.

Components have access to a **props parameter** (short for _properties_) by default, which is an object that holds any data passed down to it.

You pass data to a child component using the HTML attribute syntax shown below, and enclosing any JavaScript in curly braces `{ }`. The data is then accessible under the attribute name .

> When you create a function, you specify names for the inputs it expects. These are called **parameters**.

> When you supply a value to a function, the supplied value is referred to as an **argument**.

Make these changes to your components:

```js
function Button(props) {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {props.text}&nbsp;{count}
    </button>
  );
}

function App() {
  const buttonText = "Count Up!";
  return (
    <main>
      <Button text={buttonText} />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
```

> You need to refresh your browser every time you make a change to the HTML to receive the updated code.

We've actually done quite a bit here.

First, we store our button text in a variable and pass it down to Button under the `text` attribute. We can then access it under the `props` object which we've added as a _parameter_ - `Button(props)` - now that we are expecting _props_. We display the button text in the HTML using the curly braces `{props.text}`.

We've also added state to the button with the **useState hook**. This built-in React hook is a function that returns a **tuple** (an array with two items). We can name these items whatever we want, but the first is always the value, and the second is a function which **sets** that value (which is why its usually prefixed with _"set"_).

The value we pass to _useState_ initializes the `count` value when the code is first run (when the page first loads).

We are using the `setCount` function to increment the `count` value by 1 every time we click the button and use the curly braces to display the count in the HTML.

Your button should now have the text `"Count Up!"` with a starting value of `0` next to it. Everytime you click the button you should see this value dynamically increase by 1.

> If you have any issues when working on frontend code, make sure you open the devtools and inspect the **Console** tab.

> You can also press `Ctrl + Shift + C` within the browser to enable the **element selector**. With this enabled, click an html element to see the corresponding code within the devtools' **Elements** tab.
