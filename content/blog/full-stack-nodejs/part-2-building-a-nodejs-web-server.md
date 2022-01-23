---
slug: "building-a-nodejs-web-server"
date: "2022-01-05"
title: "Building a Web Server with Node.js and Express.js"
author:
  name: "jeysen-freedman"
  bio: "Full Stack Web Developer"
  image: ../../media/jeysen-freedman.jpg
tags:
  [
    "nodejs",
    "npm",
    "javascript",
    "backend",
    "web server",
    "middleware",
    "api",
    "expressjs",
    "coding",
  ]
summary: "In this article you'll look at using the path, fs and http core Node.js modules to code some basic server features.  Next, you'll get an Express.js server started, write Express middleware, serve static assets like HTML, CSS and JS files, and install dependencies."
pillar: "full-stack-nodejs"
pillarContent:
  image: ./media/nodejs_logo.png
  pillarTitle: "Building a Full Stack Node.js Application | The Step-by-Step JavaScript Developer's Guide"
  text: "<em>'Building a Full Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide'</em> is an ongoing series on full stack Node.js web development.  Each step in the series covers a variety of web development topics, including: back-end development, front-end development, best practices, useful libraries, design patterns, error handling, UI/UX design, and much more."
image:
  pathLarge: ./media/building-a-nodejs-web-server_large.jpg
  pathSmall: ./media/building-a-nodejs-web-server_small.jpg
  alt: "A physical web server"
  caption: 'Photo by <a href="https://unsplash.com/@tvick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><i>Taylor Vick</i></a> on <a href="https://unsplash.com/s/photos/web-server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><i>Unsplash</i></a>
  '
---

> This is part two of **"Building a Full Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide"**. [Find the full series here](/blog/full-stack-nodejs).

<nav id="table-of-contents">
  <div>Table of Contents</div>
  <ul>
    <li><a href="#introduction">Introduction<a><li>
    <li><a href="#web-server-basics">Web Server Basics<a><li>
    <ul>
      <li><a href="#web-10">Web 1.0<a><li>
      <li><a href="#web-20">Web 2.0<a><li>
    </ul>
    <li><a href="#nodejs">Node.js<a><li>
    <ul>
      <li><a href="#the-path-and-url-modules">The Path and URL Modules<a><li>
      <li><a href="#the-fs-module">The FS Module<a><li>
      <ul>
        <li><a href="#fs-synchronous-operations">FS Synchronous Operations<a><li>
        <li><a href="#fs-asynchronous-operations">FS Asynchronous Operations<a><li>
      </ul>
      <li><a href="#the-http-module">The HTTP Module<a><li>
    </ul>
    <li><a href="#express">Express<a><li>
    <ul>
      <li><a href="#the-api-details">The API Details<a><li>
      <li><a href="#the-project-structure">The Project Structure<a><li>
      <li><a href="#basic-express-server">Basic Express Server<a><li>
      <li><a href="#static-assets">Static Assets<a><li>
      <li><a href="#middleware">Middleware<a><li>
      <ul>
        <li><a href="#serving-static-assets-with-middleware">Serving Static Assets with Middleware<a><li>
        <li><a href="#logging-middleware">Logging Middleware<a><li>
      </ul>
      <li><a href="#url-endpoints">URL Endpoints<a><li>
      <li><a href="#browser-devtools">Browser Devtools<a><li>
      <li><a href="#development-dependencies">Development Dependencies<a><li>
      <ul>
        <li><a href="#automatic-restarts-with-nodemon">Automatic Restarts with Nodemon<a><li>
        <li><a href="#logging-with-morgan">Logging with Morgan<a><li>
      </ul>
    </ul>
    <li><a href="#wrap-up">Wrap Up<a><li>
  </ul>
</nav>

## Introduction

In the previous article you learned that _Node.js_ gives us the ability to run JavaScript outside the browser and specifically, to build production-grade backend web servers.

You also learned that you have access to a million plus different _packages_ on the _npm registry_ for use in your project via the _node package manager_ (_npm_).

To continue with _Part 2_, you should have a Node.js project initialized with _Express.js_ and _ES Modules_ configured in _package.json_. For a recap, see [Part 1](/blog/full-stack-nodejs/getting-started-with-full-stack-nodejs/#installing-expressjs) starting from _Installing Express.js_.

We will begin this article with an overview of web servers and the path, url, fs and http core Node.js modules. If you're already familiar with these topics you can jump right into [express](#express).

## Web Server Basics

A web server is simply a computer whose primary responsibility is receiving and responding to external requests. These requests typically come from web clients, aka your web browser (Chrome, Firefox, Safari). The _server_ receives and responds to requests from a _client_ via **HTTP**, or **HyperText Transfer Protocol**.

> A server is sometimes called a _host_ because it _hosts_ or _stores_ files (web pages and other files) that can be made available to clients.

When you want to visit a website, you enter its URL into your web browser. A URL is just a human readable way to contact a specific server and it consists of a **domain name** plus some additional information.

For example, when you want to use Google Search, you enter `www.google.com` into your browser. This is called the **domain name** and it exists only because we humans remember words much better than numbers. In reality, a **domain name** is mapped to a server's _IP address_, a number that uniquely identifies it on the internet.

> The service responsible for figuring out what _domain name_ belong to which _IP address_ is called the **Domain Name System (DNS)**.

### Web 1.0

Traditionally, when you entered just a website's domain name (`www.example.com`) into your web browser, you requested the web page stored at the hosting server's **root directory**, usually called the **index page**. Although it isn't always shown, a _trailing slash_ is assumed, so `www.example.com` and `www.example.com/` are equivalent.

> The index page has the special name of **index.html**

Similar to how your computer stores files at specific _paths_, a basic server can store and retrieve files via its **file system**. When your URL contains additional information, e.g. `www.example.com/new/`, you're being more specific about what you want the server to return. In this case, the server would return the index page located in the _"new"_ folder.

> If you entered `www.example.com/new/thing.html` you would get the **thing.html** page located in the **new** folder.

> Files could eventually be generated dynamically on the server, using languages like Perl and PHP.

In the first version of the web (Web 1.0), this was basically all there was to it. You requested a file from a server based on the URL you provided, and the server responded accordingly. In other words, Web 1.0 was **read-only**.

> This is a simplified explanation, and in fact, web masters were creative in trying to add more functionality as the web grew. The major issue was a lack of standardization (everyone was using different methods to accomplish the same goals) which is what fueled the leap to Web 2.0.

### Web 2.0

As the web evolved, simply viewing web pages wasn't going to cut it. Users wanted more from their web browsing experience, and why shouldn't they? After all, it's in our nature to want to improve.

Web 2.0 introduced a standardized way for users to not just consume content, but to create it too.

To manage the ability to _create_, _read_ (retrieve), _update_, and _destroy_ (delete) content (aka **CRUD**), HTTP was expanded to include additional features.

Here began the era of Web APIs, with the most well known being the **REST API**.

> **REST** - aka "**Re**presentational **S**tate **T**ransfer - is the modern standard for mapping CRUD functionality onto HTTP. Specifically, the additional HTTP features called **HTTP verbs**

**The main HTTP verbs are mapped to CRUD as follows:**

- **GET** equals _read_
- **POST** equals _create_
- **PUT/PATCH** equals _update_
- **DELETE** equals _destroy_

With these enhancements, web servers became more powerful but also more complex. Web 2.0 wasn't just about serving files in response to requests, but also managing CRUD operations, communicating with databases, generating and serving dynamic content, and more.

## Node.js

Since a primary application of Node.js is to build a web server, let's learn what's required to build one ourselves. A Web 1.0 type server is trivial to set up, so we will jump right into building a server that can handle full CRUD operations via a REST API.

Node.js ships with several _core modules_ but the few most commonly used to build a web server are the **path**, **url**, **fs**, and **http** modules.

Let's explore these modules and then combine them with _express_ to build a web server.

### The path and url modules

The **path** module helps Node.js applications use the correct file path needed to access files on its file system. We'll use the **url** module's **fileURLToPath** method as a helper function for resolving the current directory when using ES Modules.

These modules are useful because different operating systems use different formats for structuring file paths.

> For example, Linux paths are separated by a **forward slash** `/` while Windows paths can use either forward `/` or back `\` slashes (but can't combine the two in a single path).

> A Windows path might look like: `C:\Users\jeysen\node-tutorial`

> A Linux path might look like: `/home/jeysen/node-tutorial`

If you develop your web application on a Windows computer and use _hard coded_ file paths, you will run into issues when you deploy it on a Linux machine. So we use these modules to make our file paths OS agnostic.

> The majority of web applications are deployed to computers running a Linux OS.

Let's see how we can accomplish this.

Create a file called **path.js** and add the following code:

```js
import { fileURLToPath } from "url";
import path from "path";

console.log(import.meta.url); // logs file:///C:/Users/jeysen/node-tutorial/path.js
console.log(fileURLToPath(import.meta.url)); // logs C:\Users\jeysen\node-tutorial\path.js
console.log(path.dirname(fileURLToPath(import.meta.url))); // logs C:\Users\jeysen\node-tutorial
```

Run the code from the CLI with the `node path.js` command.

If you study the logs above or in your terminal, you can see that we start with the current file path provided by `import.meta.url` and use the `fileURLToPath` function with the `path.dirname` method to transform the path. The result is a path that points to the current directory (folder) we're in (also called the working directory) regardless of the OS.

Since we'll always access files _relative_ to the file we're working in, we'll want to assign the result of this transformation to a variable, traditionally called `__dirname`:

```js
const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname); // logs C:\Users\jeysen\node-tutorial
```

We can now access files anywhere on the file system, regardless of OS, by using the `.join` method on the _path_ object we imported earlier.

We supply `path.join` with our working directory as the first argument, the file we want as the last argument, and any navigation steps in between. The **join** method will join these argument together and normalize the resulting path.

> Note that the arguments provided to join must be **strings**.

For example, if you had the following project structure:

```
/jeysen
    bio.txt
    /node-tutorial
        path.js
        /media
            image.jpg
```

You could access the `image.jpg` file with (starting in path.js):

```js
path.join(__dirname, ".", "media", "image.jpg"); // results in C:\Users\jeysen\node-tutorial\media\image.jpg
```

Or the entire media folder with:

```js
path.join(__dirname, ".", "media"); // results in C:\Users\jeysen\node-tutorial\media
```

You could access the `bio.txt` file with:

```js
path.join(__dirname, "..", "bio.txt"); // results in C:\Users\jeysen\bio.txt
```

You can use these techniques to get a path anywhere in your project's directory.

Let's apply this to reading and writing files to the file system.

### The fs module

The **fs** or _file system module_ gives Node.js applications the ability to read and write files to the file system.

File system access can be either **synchronous** or **asynchronous**. We'll first look at the **synchronous** approach to writing/reading files and then implement the _promise-based_ **asynchronous** approach.

#### fs synchronous operations

Create a file called `fs.js` with the following code:

```js
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
```

Now create a folder named "documents" which we'll write a text file to.

Add the following code to `fs.js` and run it from the CLI with `node fs.js`:

```js
fs.writeFileSync(
  path.join(__dirname, ".", "documents", "hello.txt"),
  "Hello World!"
);

const data = fs.readFileSync(
  path.join(__dirname, ".", "documents", "hello.txt"),
  { encoding: "ascii" }
);

console.log(data); // logs "Hello World!
```

With this code you used the `writeFileSync` and `readFileSync` to _synchronously_ write and read from the file system. If you look in the _documents_ folder you can confirm the _hello.txt_ file was created.

Because we're creating a text file, we specify the encoding as **"ascii"**. If you didn't provide an _encoding type_ then the `readFileSync` command would return a **Buffer** which is basically a container for raw data.

> Node offers a variety of encoding types for you to choose from depending on your application.

#### fs asynchronous operations

Since Node.js is single threaded, using synchronous fs operations will block the main thread. This is bad news, but we can easily fix this by taking advantage of Node's asynchronous nature.

Modern Node offers a **promise-based** alternative to synchronous fs operations. If you aren't familiar with promises, they basically allow you to write readable async code, whereas in the past you had to use a nested mess of "callback functions" aka _callback hell_.

> Remember that Node.js uses an **event loop** to manage its asynchronous operations. So the callback function is executed when the asynchronous code is finished and Node is ready to handle the result.

Let's move forward with the modern promise-based approach.

Change your **fs** import to `import fs from "fs/promises";`.

Rewrite your code in `fs.js` to:

```js
fs.writeFile(path.join(__dirname, ".", "documents", "todo.txt"), "Hello World!")
  .then(() => {
    console.log("File written!");

    return fs.readFile(path.join(__dirname, ".", "documents", "todo.txt"), {
      encoding: "ascii",
    });
  })
  .then((data) => console.log(data)) // logs "Hello World!"
  .catch((err) => console.log(err));

console.log("First!"); // logs "First!" before "File Written!" or "Hello World!"
```

Running this code with `node fs.js` will give the same result as before, but this time the main thread will not be blocked. We can prove this by adding a `console.log` statement _after_ the async code, as shown above.

This is an upgrade from the synchronous approach to fs operations, but we can make the code even more readable by moving from **.then/.catch syntax** to **async/await syntax** enclosed in a **try/catch block**.

Since we can't use the `await` keyword at the top level (outside a function) we'll encapsulate the **fs** code in a function and make it flexible by providing both the filename and content as function arguments. We'll also `export` the function so we can use it in other project files.

```js
export async function writeThenRead(filename, content) {
  try {
    await fs.writeFile(
      path.join(__dirname, ".", "documents", filename),
      content
    );

    console.log("File written!");

    const data = await fs.readFile(
      path.join(__dirname, ".", "documents", filename),
      {
        encoding: "ascii",
      }
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}

console.log(writeThenRead("todo.txt", "Hello World!")); // logs "Hello World!"
```

Let's expand on these fs operations by integrating them into a web server.

### The http module

Although we'll use _express_ to build a more complex web server, let's take a quick look at the **http module** to see how it works.

Create a file called `https.js` and add the following:

```js
import http from "http";

http
  .createServer((request, response) => {
    console.log("Received a request!");
  })
  .listen(3000, () => console.log("Server listening on Port 3000"));
```

As you can see, all a server does is listen for HTTP traffic on a specific port (port 3000 in this case). Incoming traffic is received as a **request object**. We use the **request object** to extract information regarding the request which typically includes the HTTP method, url, HTTP headers, and possibly data sent by the client. To reply to a request we use the **response object**.

> The request and response objects are usually shortened to just **req** and **res** respectively.

> HTTP headers provide **meta** information about the HTTP message itself. They'll tell you about cookies, the content-type, authorization, caching, and a lot more.

If you run this code with `node http.js` and then navigate to `http://localhost:3000/` in your browser, you should see _"Received a request!"_ logged to your console.

Since the server is not sending anything back to the client, your browser will hang on loading until it finally times out.

To send a reply to the client we can first write some text to the response object, and then send it:

```js
http
  .createServer((req, res) => {
    res.write("Hello!");
    res.end();
  })
  .listen(3000, () => console.log("Server listening on Port 3000"));
```

You should now see "Hello!" when you access `http://localhost:3000/` from your browser.

> Make sure you restart your server (CTRL + c to exit from the CLI) and start it up again to see the change.

> Note that you need to call **res.end()** to actually send the response.

Now let's create a text file for every incoming request using the `writeThenRead` function and then return its contents to the client. We'll keep track of the request number in the `requestNumber` variable and use this value to number the files.

```js
import http from "http";
import { writeThenRead } from "./fs.js";

let requestNumber = 0;

http
  .createServer(async (req, res) => {
    requestNumber++;
    const message = await writeThenRead(
      `request-number-${requestNumber}.txt`,
      `You are request number ${requestNumber}!`
    );
    res.write(message);
    res.end();
  })
  .listen(3000, () => console.log("Server listening on Port 3000"));
```

If you start the server with `node http.js` and try connecting to it via the web browser, you should receive the text: _"You are connection number 1!"_.

You may notice that you're actually generating **two .txt files** for every request you make to your server. This is because modern browsers will make additional requests on their own. In this case, the browser is looking for the **favicon** - the small image shown at the top of the browser window, on the window's tab.

To prevent this, you can wrap your code in an `if` check and only run your code when the request isn't for the favicon.

```js
if (req.url !== "/favicon.ico") {
  requestNumber++;
  const message = await writeThenRead(
    `request-number-${requestNumber}.txt`,
    `You are request number ${requestNumber}!`
  );
  res.write(message);
  res.end();
}
```

Now that you have a taste for a basic http server, let's build something more complex with **express**.

## Express

The moment you've been waiting for has finally arrived! It's time to dig into **express**. If you've read everything up till now, congratulations! If not, that's cool too :).

Let's build this thing.

### The API details

The API will:

- Receive input from a user and store this data in a file on the server's file system
- Serve this data back to a client upon request
- Update this data upon request
- Delete this data upon request
- Return a list of files in the file system
- Include middleware for data transformation, serving static files, logging, and error handling

As a bonus, we will build the frontend (responsible for collecting the user input) in [React](https://reactjs.org/) via CDN scripts.

> Since we aren't building a complex React app, we won't use the "create-react-app" CLI tool.

> A CDN, or "content delivery network", is a globally distributed network that provides high speed access to static files.

### The project structure

The project structure will look like:

```
/project
  index.js
  utils.js
  package.json
  package-lock.json
  /node_modules
  /public
    index.html
```

### Basic express server

We've got our work cut out for us but to get started, first make sure you're in the working directory that includes your **package.json** file with **express** installed.

Add the following code to **index.js**:

```js
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import express from "express";
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

The only thing new here is that we created our express app by calling `express()` and assigned it to the `app` variable. We can then call the `.listen()` method to start our server, just like we did with the `http` module.

### Static assets

Static assets are files that don't change, that we want every connected user to receive. These usually include **html**, **css**, **js**, and **image** files. They're typically located in a folder named **public**.

Create the **public folder** and within it, the **index.html page**.

If you're using VS Code, you can open up the **index.html** page and type `!` to get HTML boilerplate code. Then add the `h1`, `div` and `script` tags shown below.

Or, copy and paste the following HTML code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Express API</title>
  </head>
  <body>
    <h1>Express</h1>
    <div id="app"></>
  </body>
</html>
<script>
  // React code will go here
</script>
```

At this point, if we started the server with `node index.js` and tried to access `http://localhost:3000/` from the browser we would see:

```
Cannot GET /
```

Like we talked about earlier, when we try to access a web page from the browser, the most basic thing we're trying to do is request a file. But we haven't told **express** to serve any files yet.

### Middleware

Anytime we want to do something to _every_ request that comes in to the server, we'll want to use **middleware**. In other words, middleware is code we write or _use_ that'll apply to every request.

> Middleware functions are just functions that have access to the request and response objects for **every** request/response.

> Middleware functions execute in the order they're defined.

To implement a middleware function we call the `.use()` method on the `app` object, and provide it a function that gets the _request_ and _response_ objects in addition to a special function called `next`. The `next` function has to be explicitly called from middleware or _express_ will not proceed and the connection will timeout.

#### Serving static assets with middleware

Since we want every request to the server to receive the static assets, let's serve them by implementing our first middleware function.

We'll use middleware to serve our static assets by calling express's built in function `.static()`:

> Note that the only static asset we have right now is the index.html file.

```js
app.use(express.static(path.join(__dirname, ".", "public")));
```

Now, run your server with `node index.js` and visit `http://localhost:3000/` from your browser. You should see **Express** written on the web page.

This works because we're visiting the **root** of our server. If we tried to visit any other page, like `http://localhost:3000/new`, we would see "Cannot GET /new" in the browser.

We'll fix this issue in a minute, but first lets add some more middleware to see what's happening on our server when we make a request.

#### Logging middleware

We can write a simple middleware that logs information about the request's **HTTP method** and **url** to the console.

> Recall the common HTTP methods are GET, POST, PUT/PATCH, and DELETE

Add the following to **index.js**:

```js
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});
```

Now start the server and visit `http://localhost:3000/new` again.

In your console, you should see the following:

```
$ node index.js
Server running on port 3000
Request: GET /new
```

> You can see that requesting a web page uses the GET method and like we talked about earlier, the **url** points to a location on the server and begins **after** the **domain name**.

### URL endpoints

So we know our server is receiving the request, it just doesn't know what to do with it.

Since we're using React, we'll only ever serve one page to a user (the _index.html_ page).

Let's write our first URL endpoint to send the _index.html_ file in response to **any** request:

```js
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "public", "index.html"));
});
```

We use the asterisk symbol **"\*"** as a wildcard to catch any **GET** request. In other words, you can now try to access any web page on the server and it'll always respond with the _index.html_ page.

> Remember to restart your server any time you make a change to it.

Notice that we write endpoints in **express** using the syntax:

```js
app.HTTP_VERB("/URL_ENDPOINT", (req, res) => {
  // handle the request here
});
```

### Browser devtools

To really understand how the browser is communicating with the server, you need to know how to use the browser's devtools.

Briefly, you can open the devtools with the keyboard shortcut F12, or right click in an open web page and select **Inspect** at the bottom.

Using the tabs at the top of the devtools, navigate to the **Console** tab to see error messages.

> The **Console** also offers full JavaScript REPL (read-evaluate-print-loop) functionality, which means you can use it as a JavaScript playground.

If you want more information about network requests, go to the **Network** tab.

We'll get more familar with the devtools as we proceed through the series.

### Development dependencies

We can make our lives a bit easier by adding some development dependencies. These are **npm packages** that we'll only use in building our app, and not in the final product.

Constantly restarting our server whenever we make a change to the code is getting super annoying, so lets add [nodemon](https://www.npmjs.com/package/nodemon), a package that'll restart any time it sees a change.

We'll improve our logging by including the [morgan](https://www.npmjs.com/package/morgan) package while were at it.

Install the packages with `npm install --save-dev nodemon morgan`.

You should see them added to the _package.json_ file, under `"devDependencies"`:

```json
  "devDependencies": {
    "morgan": "^1.10.0",
    "nodemon": "^2.0.15"
  }
```

#### Automatic restarts with nodemon

To make using **nodemon** easier, you'll write an **npm script**.

> npm scripts let you automate CLI commands. You won't see much of a difference in this case, but eventually it'll make a big difference.

Add this to `"scripts"` in the _package.json_ file:

```json
  "scripts": {
    "start": "nodemon index.js"
  }
```

Now start your server with `npm start` and you'll see it restart on its own whenever you make a change.

#### Logging with morgan

You can add morgan as middleware by first importing it into _index.js_ and then calling it with `app.use(morgan('combined'))`. You can delete the simple logging middleware we wrote previously.

> See the [morgan documentation](https://www.npmjs.com/package/morgan) for more options.

```js
import morgan from "morgan";

app.use(morgan("combined"));
```

Try making a request to the server and you'll see some useful information about the request printed to the console.

## Wrap up

Is it just me, or is this article getting really long?

Let's pick it up in the next one.

Here's the code up to this point:

```js
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { ExpressError } from "./utils.js";
import express from "express";
const app = express();

import morgan from "morgan";

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, ".", "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Server initiated on port 3000");
});
```

We're only just getting started, but if you've followed along up till now then you're getting a very detailed understanding of how Node.js and web servers work. Great job!

In the next article we'll continue building the backend API, introduce the React frontend, write data sent by the client to the file system, add some error handling, and more.

Have a coffee and I'll see ya in the next one!
