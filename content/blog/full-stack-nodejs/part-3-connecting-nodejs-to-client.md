---
slug: "building-a-frontend-user-interface"
date: "2022-01-10"
title: "Building a Frontend User Interface with React.js"
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
summary: "In Part 3 you'll learn about React.js functional components and how you can use them to build flexible user interfaces.  Next, you'll build and style FormContainer and FormInput components that'll be used to send data to a backend Node.js API."
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

<nav id="table-of-contents">
  <div>Table of Contents</div>
  <ul>
    <li><a href="#introduction">Introduction<a><li>
    <li><a href="#web-server-basics">Frontend user interface<a><li>
    <ul>
      <li><a href="#react">React<a><li>
      <ul>
        <li><a href="#getting-started-with-react">Getting started with React<a><li>
        <li><a href="#building-a-react-component">Building a React component<a><li>
        <li><a href="#adding-state-to-react-components">Adding state to React components<a><li>
      </ul>
    </ul>
      <li><a href="#building-a-react-form">Building a React form<a><li>
        <ul>
          <li><a href="#formcontainer-component">FormContainer Component<a><li>
          <li><a href="#forminput-component">FormInput Component<a><li>
          <li><a href="#testing-and-styling-the-form">Testing and Styling the Form<a><li>
        </ul>
      <li><a href="#wrap-up">Wrap Up<a><li>
    </ul>
</nav>

## Introduction

In the previous article you learned how to use the core **path**, **fs**, and **http** _Node.js_ modules. You set up some _express_ middleware to serve static assets, implemented a server endpoint, and installed the Nodemon and Morgan development dependencies.

For a recap, including the code needed to continue with Part 3, see [Part 2 - _"Building a Node.js Web Server"_](/blog/full-stack-nodejs/building-a-nodejs-web-server/#express) starting from _Express_.

This article will be focused on frontend development. We'll cover some React basics and then apply what we've learned to begin building our **full stack app**, starting with the user interface.

Specifically, we'll do the following:

- Introduce React functional components
- Build a frontend user interface (UI) with React.js
- Style it with TailwindCSS

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

Because our project is only intended for learning purposes we'll include React in our project via CDN. Keep in mind that this isn't the approach you'd take to build a production grade React app.

We'll include the core React package along with its web-specific counterpart, the **react-dom**.

> If you've heard of React Native, or Electron, they use their own versions of **react-dom** alongside the core React package to build products for Android/iOS and cross-platform desktop applications.

Since web browsers don't understand React, we use what's called a **transpiler** to convert React code into plain JavaScript. Transpilers are also called source-to-source compilers because they transform code written in one language, into code written in another language. In this case, even though React is built on JavaScript, it uses its own special syntax called JSX which needs to be transformed before the browser can understand it.

> You should know that transpilers are also used to transform ES6+ JavaScript into earlier JavaScript versions. Since older browsers may not support ES6+, if you want your JavaScript code to run on as many browsers as possible you need to transform it into a pre-ES6 version, usually ES5.

The transpiler most used with JavaScript and React is called [Babel](https://babeljs.io/) and we can include it in our project via CDN as well.

#### Getting started with react

Include the following CDN links in the head of the index.html page located in your public folder:

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

> If you have any issues when working on frontend code, make sure you open the devtools and inspect the **Console** tab.

> You can also press `Ctrl + Shift + C` within the browser to enable the **element selector**. With this enabled, click an html element to see the corresponding code within the devtools' **Elements** tab.

You can check that React is included and operational by typing `React.version` into the devtools console.

```
> React.version
< '17.0.2'
```

#### Building a React component

A React app is _composed_ of **components**.

Think of a component as a function that returns a snippet of HTML.

```js
function example() {
  return <h1>This isn't so bad!</h1>;
}
```

The typical strategy for building applications with React is to reduce components to their smallest possible size. For example, it wouldn't be good practice to return the HTML for your entire web page inside a single component.

Instead, HTML should be logically grouped into components, such as a button component, a navigation component composed of navigation _link_ components, etc.

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

#### Adding state to React components

React components can do more than just return HTML. They can receive data from parent components or global state stores and they can hold state within themselves.

Since we're using functional components, we'll use the React **hook** called **useState** to hold state within the Button component. We'll also pass a string value down to the Button from its _App_ parent.

Components have access to a **props parameter** (short for _properties_) by default, which is an object that holds any data passed down to it.

You pass data to a child component using the HTML attribute syntax shown below, and enclosing any JavaScript in curly braces `{ }`. The data is then accessible under the attribute name .

> When you create a function, you specify names for the inputs it expects - called **parameters**.

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

First, we store our button text in a variable and pass it down to Button under the `text` attribute. We can then access it under the `props` object which we've added as a _parameter_ - `Button(props)` - now that we're expecting _props_. We display the button text in the HTML using the curly braces `{props.text}`.

We've also added state to the button with the **useState hook**. This built-in React hook is a function that returns a **tuple** (an array with two items). We can name these items whatever we want, but the first is always the value, and the second is a function which **sets** that value (which is why its usually prefixed with _"set"_).

The value we pass to _useState_ initializes the `count` value when the code is first run (when the page first loads).

We use the `setCount` function to increment the `count` value by 1 every time we click the button and use the curly braces to display the count in the HTML.

Your button should now have the text `"Count Up!"` with a starting value of `0` next to it. Everytime you click the button you should see this value dynamically increase by 1.

## Building a React form

Now that we've got a feel for the React basics, let's build an app that uses all the features we've looked at up till now.

We'll build an **idea notebook application** that you can use to store and retrieve ideas/notes.

We'll use React to collect and send notes to our backend Node.js API as well as retrieve and display existing notes.

First, let's figure out what data we want to include with each note.

I think a good place to start is to include the **date**, **title** and **content**.

We can use a flexible single component called `FormInput` to handle the title and content.

Instead of having a user select the date, we'll just calculate it on the server whenever a note is submitted.

Since we know we'll be sending the data from each `FormInput` to our backend API, we'll want to keep track of the state in the parent component that's common to the inputs.

To accomplish this, we'll create a form component called `FormContainer` which will return a form with the _FormInput_ components. Each _FormInput_ will include the **props** it needs to render the correct component.

### FormContainer Component

Let's create `FormContainer` as follows:

```js
function FormContainer() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, content);
  };

  return (
    <form>
      <FormInput type="text" name="title" title={title} setTitle={setTitle} />

      <FormInput
        type="textarea"
        name="content"
        content={content}
        setContent={setContent}
      />

      <button type="submit" onClick={handleSubmit}>
        Add Note
      </button>
    </form>
  );
}
```

As you can see, all we need to do is create a `FormInput` for each form field (title and content) and provide each with the correct properties.

The state for the fields is held in `FormContainer` and by passing the **state** along with its **setter** we'll be able to update the state from within the `FormInput`.

We also include a `button` to submit the form which when clicked will trigger the `onClick` event listener that calls the `handleSubmit` function.

> Event listeners are built into JavaScript and automatically receive the **event object** when triggered.

In `handleSubmit` we first call `event.preventDefault()` to stop the default browser behavior of refreshing the page, and then we log the values of `title` and `content`.

Add `FormContainer` to the `App` component.

```js
function App() {
  return (
    <main>
      <FormContainer />
    </main>
);
```

### FormInput Component

Since we only have two inputs, we'll use conditional logic to render the correct input based on the _type_.

React components need to return HTML with a **single root** so we'll use the built-in `React.Fragment` to wrap our HTML elements.

```js
function FormInput(props) {
  if (props.type === "textarea") {
    return (
      <React.Fragment>
        <label htmlFor={props.name}>{props.name}</label>
        <textarea
          id={props.name}
          value={props.content}
          onChange={(e) => props.setContent(e.target.value)}
        />
      </React.Fragment>
    );
  }

  if (props.type === "text") {
    return (
      <React.Fragment>
        <label htmlFor={props.name}>{props.name}</label>
        <input
          id={props.name}
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
      </React.Fragment>
    );
  }
}
```

Even though this looks like a lot of code, it's actually pretty straightforward. We access the data we need for each input on the `props` object and control the value of the inputs using the **state** and **state setter**.

The `onChange` event listener fires every time we type into the input, calling the anonymous function that updates the corresponding state (title or content).

If you run your server with `npm start` and refresh the browser page, you should see the form displayed on the page.

### Testing and styling the form

If you type some text into each of the inputs and click `Add Note` you should see the text logged to the console.

To style the form you need to include the following TailwindCSS CDN in the head of the HTML document:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

> Keep in mind that it's not recommended to rely on the CDN for a production app.

You can find the full code with styling below:

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
    <script src="https://cdn.tailwindcss.com"></script>

    <title>Express</title>
  </head>
  <body class="flex flex-col items-center">
    <h1 class="text-3xl font-bold text-gray-700 my-4">Notes</h1>
    <div id="app"></div>
  </body>
</html>
<script type="text/babel">
  function FormInput(props) {
    if (props.type === "text") {
      return (
        <React.Fragment>
          <label
            htmlFor={props.name}
            className="uppercase tracking-wide text-gray-700 font-medium text-sm"
          >
            {props.name}
          </label>
          <input
            id={props.name}
            type="text"
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded-sm mb-4 shadow-sm"
          />
        </React.Fragment>
      );
    }

    if (props.type === "textarea") {
      return (
        <React.Fragment>
          <label
            htmlFor={props.name}
            className="uppercase tracking-wide text-gray-700 font-medium text-sm"
          >
            {props.name}
          </label>
          <textarea
            id={props.name}
            value={props.content}
            onChange={(e) => props.setContent(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded-sm shadow-sm"
          />
        </React.Fragment>
      );
    }
  }

  function FormContainer() {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(title, content);
    };

    return (
      <form className="flex flex-col mx-auto">
        <FormInput type="text" name="title" title={title} setTitle={setTitle} />
        <FormInput
          type="textarea"
          name="content"
          content={content}
          setContent={setContent}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 uppercase text-gray-700 shadow border border-gray-300 rounded-sm font-medium mt-4 text-xs bg-gray-300 hover:bg-white transition-all"
        >
          Add Note
        </button>
      </form>
    );
  }

  function App() {
    return (
      <main>
        <FormContainer />
      </main>
    );
  }

  ReactDOM.render(<App />, document.getElementById("app"));
</script>
```

## Wrap Up

So there you have it! We've covered the basics of React functional components and used those principles to build a UI for submitting data to our backend API.

In the next article we'll create an API endpoint to receive this data and then wire up the frontend form to complete the transfer.

We've still got a long way to go before we can call this a full stack application, but we're making great progress.

Thanks for reading and I'll see ya in the next one!
