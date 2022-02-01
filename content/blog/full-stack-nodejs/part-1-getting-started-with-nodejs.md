---
slug: "getting-started-with-full-stack-nodejs"
date: "2021-12-15"
title: "Getting Started with Full Stack Node.js Development"
author:
  name: "jeysen-freedman"
  bio: "Full Stack Web Developer"
  image: ../../media/jeysen-freedman.jpg
tags:
  [
    "nodejs",
    "npm",
    "semver",
    "javascript",
    "getting started",
    "backend",
    "web server",
    "api",
    "expressjs",
    "coding",
  ]
summary: "In Part 1 you'll learn what Node.js is, how to install and configure Node.js, and how to work with Node Package Manager.  You'll learn how to use modern ES Modules in a Node environment and how install and import Express.js into a JavaScript file."
pillar: "full-stack-nodejs"
pillarContent:
  image: ./media/nodejs_logo.png
  pillarTitle: "Building a Full Stack Node.js Application | The Step-by-Step JavaScript Developer's Guide"
  text: "Welcome to the only guide you'll need to build full stack JavaScript applications.  This ongoing series is here to help supercharge your JavaScript development journey.  Each article in the series covers the relevant topics you need to build awesome web apps.  Join me in investigating topics like backend and frontend development, cloud deployment, UI/UX, and more.  Learn everything you need to excel as a JavaScript developer.  We'll cover every detail of web development, from web servers and HTTP, to frontend frameworks and beyond.  Its 2022 and you need the most up to date information you can get.  Everything I share with you comes from my own <em>current</em> experience.  So what are you waiting for?  Let's get started."
image:
  pathLarge: ./media/nodejs_logo_large.png
  pathSmall: ./media/nodejs_logo_small.png
  alt: "Node.js logo"
  caption: 'Photo by <a href="https://nodejs.org/en/about/resources/"><i>Node.js</i></a>'
---

> _This is part one of **"Building a Full Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide"**. [Find the full series here](/blog/full-stack-nodejs)._

<nav id="table-of-contents">
  <div>Table of Contents</div>
  <ul>
    <li><a href="#introduction">Introduction<a><li>
    <ul>
      <li><a href="#new-to-web-development">New to Web Development<a><li>
    </ul>
    <li><a href="#getting-started">Getting Started<a><li>
    <ul>
      <li><a href="#nodejs">Node.js<a><li>
      <ul>
        <li><a href="#under-the-hood">Under the Hood<a><li>
      </ul>
    </ul>
    <ul>
      <li><a href="#installing-nodejs">Installing Node.js<a><li>
      <ul>
        <li><a href="#semantic-versioning">Semantic Versioning<a><li>
      </ul>
    </ul>
    <ul>
      <li><a href="#node-package-manager">Node Package Manager (NPM)<a><li>
      <ul>
        <li><a href="#the-npm-registry">The NPM Registry<a><li>
        <li><a href="#the-packagejson-file">The Package.json File<a><li>
      </ul>
    </ul>
    <ul>
      <li><a href="#installing-expressjs">Installing Express.js<a><li>
      <ul>
        <li><a href="#the-package-lockjson-file">The Package-lock.json File<a><li>
        <li><a href="#the-node_modules-folder">The Node_Modules Folder<a><li>
      </ul>
    </ul>
    <ul>
      <li><a href="#using-es-modules">Using ES Modules<a><li>
      <li><a href="#testing-your-setup">Testing Your Setup<a><li>
    </ul>
    <li><a href="#conclusion">Conclusion<a><li>
  </ul>
</nav>

## Introduction

This is the first article in an _open-ended_ guide to full stack Node.js web development. I was inspired to create _"Building a Full Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide"_ by [Aaron Frost's keynote on building bridges](https://youtu.be/E8TkRKWGSVc).

The goal of this guide is to give you the step-by-step instructions I wish I had when I first began learning web development. It follows a _hands-on_ approach to learning JavaScript oriented web development supplemented by the details _that I found helpful_ in connecting the dots.

> The **major technologies** we'll explore over the course of the series include: HTML, CSS, Sass, TailwindCSS, JavaScript, React, Vue, Node.js, Express.js, PostgreSQL, MongoDB, Firebase, AWS, and much more.

This guide assumes you have some basic understanding of HTML, CSS, JavaScript and the command line interface (CLI, aka _terminal_ or _console_). If you don't, there are countless free resources available for free on the web to get a primer. I recommend [freeCodeCamp](https://www.freecodecamp.org/) as a good place to learn the basics.

That being said, I'm hoping this guide can offer value to developers of all levels.

### New to Web Development?

If you're new to web development, you're likely trying to get your bearings. The many different directions you can go is overwhelming. Technologies, frameworks, programming languages... it's easy to feel intimidated. _Welcome to the web!_

The web is like the Wild West - the frontier. It's evolving at the speed of light as everyone scrambles to strike gold, and it's easy to get lost in the noise. But this gold rush is only in the beginning and you have the opportunity now to commit to being a part of it.

Learning web skills can transform your life, as it has the lives of so many already. Opportunities to learn, grow, innovate, contribute, and of course, make money are _everywhere_. When it comes to flexibility, freedom and opportunity, the web can't be beat!

As the years speed by it's incredible how deeply the web is transforming our world. I'm excited to be a part of it and to contribute how ever I can to its evolution. Learning these skills has given me that opportunity and I want to encourage you to do the same.

Learning the fundamentals of web technology will propel you forward. Not only in your career, but in your life. So what are you waiting for, **let's get started**.

## Getting Started

Welcome to the first step in your journey to mastering full stack Node.js web development. In this article we'll look at what Node.js is, why it's useful, and how to get started using it.

This article provides a lot of background on Node.js. If you already have it installed and want to jump right in, feel free to skip on to part 2.

> This is a blockquote. This information is optional and provides extra context and detail.

### Node.js

Node.js is a _JavaScript runtime_ built on Google Chrome's V8 engine. Its claim to fame is its ability you to run JavaScript outside the browser. Node.js is the breakthrough that gave developers the power to build full stack applications with JavaScript.

Top organizations like Netflix, LinkedIn, Walmart and NASA use Node.js as the foundation for many of their web services.

How the performance of Node.js compares to other backend options is the subject of much debate. The general rule of thumb these days is that its better to _**write** code fast than code that **runs** fast_. Don't mistake this for an absolute truth! There will always be specific applications where performance is the top priority. But in this lightspeed-paced industry, the time it takes to get your code out the door can make or break you.

#### Under the Hood

Node.js has an _event-driven architecture_ optimized for asynchronous input/output. It runs on a _single-threaded event loop_ using _non-blocking input/output calls_. Its architecture allows it to handle _thousands_ of concurrent connections. Offloading _asynchronous operations_, leaves the main thread free to handle incoming requests.

> Node.js is _single-threaded_, in other words, it can execute one instruction at a time. These days most computer processors have several cores to avid this, so how is a single thread a good thing? Well, Node.js has access to the computer's operating system (OS), which it uses as its personal assistant. It takes any expensive computation and hands it off to the OS to deal with. The _libuv library_, a C language library (very fast) built into Node.js is the brains behind this. Libuv provides the communication channel between Node.js and the OS via the _event loop_. With the OS handling the expensive tasks, Node.js can focus on dealing with connections.

A web server's job is to handle the sending and receiving of data. To be efficient, it has to manage thousands of simultaneous connections. These connections might be users, database interactions, third-party API services, and more. Node.js fits this description and is perfect for real-time web server applications.

### Installing Node.js

To get started you need Node.js installed on your computer. I'm starting with version number **16.13.2**, which is the latest version at the time of writing this article. [see Semantic Versioning](#semantic-versioning)

You can check if you have Node.js installed, and what version it is, by typing the command `node -v` into the CLI.

A difference in a MAJOR version number can mean significant changes to the API/behavior. I am using Node.js **v16**. We'll practice with updating the version number. For now, keep in mind that using different versions can cause unexpected behavior.

You can download Node.js from [https://nodejs.org/](https://nodejs.org/). Choose the **LTS option**, which stands for _long term stable_ and is the more reliable option. The _Current_ option has experimental features and is not recommended for **production** applications. It may also contain bugs that cause your programs to behave unexpectedly.

![Download Node.js Long Term Stable (LTS)](./media/nodejs_lts.png)

> We're in _development_ while we build software. When its complete we deploy it to _production_ so other people can use it. Keep in mind that these two environments are optimized for different purposes.

> **What is an API?**
>
> An _application programming interface_ (API) provides the steps needed to work with a piece of software. Its the recipes a software makes available to you to use in your program. To write a program that uses software built by someone else, you use its API.
>
> - Whenever we programmatically work with another piece of software, such as Node.js, we use its API to put in place the functionality we need
> - When you need more information on an API, consult its _documentation_

> If you need to switch between different versions of Node, you can download [_node version manager_](https://github.com/nvm-sh/nvm) aka _nvm_ for Windows or Mac/Linux.

---

#### Semantic Versioning

Semantic Versioning (_SemVer_) is a specification for managing the evolution of a software product.

> When you compare two different versions, they may behave very different. This is important when writing code that _depends_ on 3rd party software. Sometimes called a _package_, _library_, or _dependency_. A change to its version number could cause _breaking changes_ to your program.

We represent version numbers with three numbers: _MAJOR.MINOR.PATCH_. Starting from 1.0.0 we update these numbers according to the following rules from https://semver.org/:

Given a version number _MAJOR.MINOR.PATCH_, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards compatible manner, and
3. PATCH version when you make backwards compatible bug fixes.

The point is: _version numbers are important_. Be aware that updating the _MAJOR_ version of a dependency could break your program.

---

### Node Package Manager

Installing Node.js, will also install _node package manager_ (aka _npm_ or _NPM_). _NPM_ is the command line tool (CLI) used to download and install 3rd-party packages. You can find these packages on the **npm registry**.

Confirm its installation and version number by typing `npm -v` into the CLI.

#### The npm registry

The [**npm registry**](https://www.npmjs.com/) is the central storehouse for _3rd-party Node.js libraries/packages_. Public packages are available **for free**. They're built and maintained by a variety of individuals and organizations. Many of the best packages are managed by the Open Source Community.

NPM packages save developers a massive amount of time by helping to avoid _"reinventing the wheel"_. This fuels innovation and helps speed up the rate of software development. A win-win for everyone! In general, it's more efficient to find reputable packages to solve your problem than to build your own from scratch. Developing your own solutions means more documentation, testing, and maintenance.

You can confirm a package is reputable by examining its _version number_ and _weekly downloads_.

> A higher version number means the package has been around a while and likely has good support.

You can gauge its popularity by its number of _stars_ on [GitHub](https://github.com/) or whatever cloud repository it's hosted on.

> **What is Git?**

> Git is a version control system for tracking changes to your codebase. You use Git by periodically saving (**"committing"**) your code to it. Storing snapshots of your code to Git allows you to travel back in time to any snapshot (**commit**). You'll appreciate this when you've introduced a huge bug into your code. No need to play detective, just travel back in time to before the bug! Without Git you'd have to manually try and undo your mistake. A painful process to say the least. GitHub, Bitbucket and GitLab are a few of the most popular online code repositories. One of their primary features is to provide cloud storage for your Git repositories. These cloud hosted repos can be **public** or **private**. This makes your code accessible over the web, to the public, a team or a company.

At the time of writing, the npm registry has about **1.3 million packages** available for use. Think of these packages as _prebuilt tools_. Browsing the registry can help you rapidly develop your product and even inspire new and exciting features.

#### The package.json file

As soon as you you download an npm package, a _package.json_ file is created in the root of your project.

> **What is JSON?**

> JSON (_JavaScript Object Notation_) is a lightweight data format used for storing and transporting data, especially in web applications. You will see JSON used in config and data files and for sending data between a client and server over HTTP(S).

First create a new folder to hold your project anywhere on your computer.

You can manually create a **package.json** file in the _root_ of your project by using the CLI to navigate to the root directory and running `npm init`.

Follow the CLI instructions or press `enter` to accept the default input. In the future, use `npm init -y` to skip this step and accept the defaults.

Execute `ls` in the CLI to _list_ the files in your current directory and you should see **package.json** . If you open this file in your text editor (I use VSCode, and use the `code .` command to open it from the CLI) you'll see the following JSON:

```json
{
  "name": "defaults-to-directory-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

The **package.json** file is used for several purposes:

1. Project information
2. Configuration settings
3. Dependency management
4. Custom scripts

We will talk about these things in more detail as we continue.

### Installing Express.js

[Express.js](https://expressjs.com/) is a fast, lightweight and minimalist **production grade** Node.js web framework. It's widely considered to be the _de facto standard_ for building reliable and scalable Node.js applications. Big companies like PayPal and Uber count on it as a critical part of their infrastructure.

Express provides the tools to easily set up a web server and quickly and easily build backend APIs.

Use npm from the CLI (from the root of your project) to install Express in your project using the command `npm install express`.

The CLI will output some text similar to this:

    added 50 packages, and audited 51 packages in 3s
    found 0 vulnerabilities

> NPM will automatically analyze (audit) the packages you install and provide a report on possible issues. If you encounter vulnerabilities the CLI will give you instructions on how you can try to fix them. It's likely that everything still works fine despite the warnings. Don't worry about this too much right now. Remember that these packages are supposed to be maintained by other people.

If you open your **package.json** file you should now see `"express"` under `"dependencies"`:

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.2"
  }
}
```

> The caret symbol "^" tells npm to use the latest **minor version**

> You may also come across the tilde symbol "~" which tells npm to use the latest **patch version**

> Either of these symbols will tell npm to install the latest version (minor or patch) the next time the `npm install` command is run

#### The package-lock.json file

The **package-_lock_.json** file is created as soon as you install your first package. It provides a snapshot of all your project's dependencies.

3rd-party libraries are part of what fuel the rapid growth and evolution of web software. It's so important to web development that even a single package can have tens or even _hundreds_ of its own _dependencies_. The **package-_lock_.json** file gives you a breakdown of these dependencies, including version numbers, registry source, etc.

#### The node_modules folder

The **node_modules** folder is _also_ created when you install your first package. It holds the actual `code` for the package, including all of its dependencies' code.

> **IMPORTANT** - you need to be in the same folder as your package.json file to install packages

Every time you add a new npm package to your project, its code will be added to the **node_modules** folder.

> You don't need to worry about these files. If you changed them in any way you would be altering your project's dependencies and this could break your program.

The nice thing about **node_modules** is that you don't have to save them or share them. Your **package.json** file keeps a record of all these project dependencies. You can reinstall from the **npm registry** at any time.

> To share your project - or to use someone else's - all you need is the **package.json** file. Just use the CLI to navigate to the folder that holds the package.json and run the command `npm install`.

> Add **node_modules** to a **.gitignore** file to exclude it from version control

### Using ES Modules

JavaScript is a programming language that meets the standard set out by **ECMAScript**. In 2015, they released a major update to this specification, known as _ECMAScript 6_ or **ES6**.

ES6 introduced new features and syntax to the JavaScript language. Later revisions added even more features. Modern JavaScript implements these new features, collectively referred to as **ES6+**.

Since _ES Modules_ (an ES6+ feature) aren't yet the default in Node.js, we'll add `"type": "module"` to our **package.json** file to indicate we'll be using them.

> ES Modules are the modern syntax for importing/exporting JavaScript code from a file.

> The predecessor to ES Modules, called _"CommonJS"_, uses different syntax and has some performance drawbacks. We'll move forward with ES Modules, but keep in mind that whenever you see packages imported using syntax like _require("...")_, the environment is using CommonJS.

Your _package.json_ file should now look like this:

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### Testing Your Setup

In the root of your project, create a file called _index.js_.

> The name _index_ is usually given to the _entry point file_ for a project.

Add the following code to _index.js_:

```js
console.log(process.version);
```

Run _index.js_ from the CLI with the command `node index.js`.

You should see the version of Node.js you're using logged to the console:

    $ node index.js
    v16.13.2

Next, import the _express library _ into _index.js_ using ES Imports syntax and log it to the CLI:

```js
import express from "express";
console.log(express);
```

Running `node index.js` you should see the _express object_ logged to the terminal.

Congratulations, your Node.js environment is ready to go!

> If you run into any issues when following this guide, or any tutorial for that matter, being able to figure the issue on your own is **extremely** important. This ability to **debug** and **problem solve** is essential to being a successful developer. If you use Google to research your issue, you'll see that usually your question has already been asked and answered. If you're still stuck after trying everything, you can always contact me. Or, post your problem to [stackoverflow](https://stackoverflow.com/) including the full details of your problem and your code.

## Conclusion

In this article you learned that _Node.js_ lets us run JavaScript outside the browser. This superpower helps us build full stack web applications with just JavaScript.

You learned about using _node package manager_ (_npm_) to access the _npm registry_ where you can choose from over a million different _packages_ to help make your project awesome.

You installed _Express.js_, configured _ES Modules_ in the Node environment, and tested your environment to ensure everything was set up correctly.

Now that our development environment is set up, in the next article we'll begin building our first web server with Express.js and Node.

Thanks for following along and I'll see you in the next one!
