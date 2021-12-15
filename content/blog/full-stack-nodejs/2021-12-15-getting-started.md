---
slug: "getting-started"
date: "2021-12-15"
title: "Getting Started with Full-Stack Node.js Development"
author:
  name: "jeysen-freedman"
  bio: "Full Stack Web Developer and Designer"
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
summary: "In this article you will learn what Node.js is, how to install and configure Node.js, and how to work with Node Package Manager."
pillar: "full-stack-nodejs"
pillarContent:
  image: ""
  pillarTitle: "Building a Full-Stack Node.js Application | The Step-by-Step JavaScript Developer's Guide"
  text: "<em>'Building a Full-Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide'</em> is an ongoing series on full-stack Node.js web development.  Each step in the series covers a variety of web development topics, including: back-end development, front-end development, best practices, useful libraries, design patterns, error handling, UI/UX design, and much more."
image:
  path: ./media/test-image.jpg
  alt: "A typewriter and notebooks laid out on a table"
  caption: 'Photo by <a href="https://unsplash.com/@retrosupply?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><em>RetroSupply</em></a> on <a href="https://unsplash.com/s/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><em>Unsplash</em></a>'
---

> _This is part one of **"Building a Full-Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide"**. [Find the full series here](/blog/full-stack-nodejs)._

## Introduction

This is the first article in an _open-ended_ guide to full-stack Node.js web development. I was inspired to create _"Building a Full-Stack Node.js Application - The Step-by-Step JavaScript Developer's Guide"_ by [Aaron Frost's keynote on building bridges](https://youtu.be/E8TkRKWGSVc).

The goal of this guide is to give you the step-by-step instructions I wish I had when I first began learning web development. It follows a _hands-on_ approach to learning web development supplemented by the details - _that in my experience_ - were helpful in connecting the dots.

The focus is on learning skills and not on building a capstone project, so the process will be more like playing in a sandbox then building a finished product. We will be adding different features as we move along, exploring as much as we can in each article. My focus is on providing you the building blocks you need to build whatever **you'd** like. To do that we will be evolving this project piece by piece as we explore the basics, experiment, design, create, test, refactor and beyond.

> The **major technologies** covered will naturally follow my own experience as a JavaScript focused web developer: HTML, CSS, Sass, TailwindCSS, JavaScript, React, Vue, Node.js, Express.js, PostgreSQL, MongoDB, Firebase, AWS, and more. But this list is just the beginning and I hope to introduce you to as many fantastic web technologies as I can.

This guide assumes you have some basic understand of HTML, CSS, JavaScript and the command line interface (CLI, aka _terminal_ or _console_). If you don't, there are countless free resources available for free on the web. I recommend: FILL_OUT_LATER. That being said, this guide keeps the beginner in mind and offers detailed explanation as much as possible.

If you are new to web development, you are probably trying to get your bearings. You may be overwhelmed by all the directions you can go. Technologies, frameworks, programming languages... it's easy to feel intimidated. The only thing I can tell you is: _welcome to the web_.

**Don't panic!** Everyone is there with you. The web is kind of like the Wild West - the frontier. Things are evolving at a crazy and increasing rate as everyone scrambles to strike gold, and it's easy to get lost in the noise. But this gold rush is just beginning and you have the opportunity now to commit to being a part of it.

We can all see the power of the web. I'm placing my bets on it and I think you should too. The web has rapidly transformed the world in a few short decades - and the process has only just begun. If you want more freedom, more opportunity, more growth and more money, then begin your web development journey now and **get started**.

## Getting Started

Welcome to the first step in your journey to mastering full-stack Node.js web development. As you take the first step, I invite you to meditate on your motivation to study this skillset.

Like most things in life, getting started is the most difficult part. Change can be intimidating, and often its easier to stay in your comfort zone. To succeed in the face of resistance you need to be prepared. In pushing your limits you will always encounter resistance and just like lifting a heavy weight will build stronger muscles, the resistance you overcome as you pursue your goals will make you a stronger person.

The likelihood of success depends on your commitment to accomplishing your goal. If you know why are doing something - and are committed to doing it consistently and for as long as it takes - you will surely succeed.

Enough talking, lets begin.

### Node.js

Node.js is a _JavaScript runtime_ built on Google Chrome's V8 engine that allows you to run JavaScript outside the browser. Node.js was the breakthrough that gave developers the freedom to use JavaScript for full-stack web development.

Top organizations like Netflix, LinkedIn, Walmart and NASA use Node.js as the foundation for their various web services.

> Node.js has an _event-driven architecture_ optimized for asynchronous input/output. It runs on a _single-thread event loop_ using _non-blocking input/output calls_. This helps it handle thousands of concurrent connections by offloading _asynchronous operations_, leaving the main thread free to handle incoming requests.

> The Node.js runtime is perfect for real-time web server applications where the goal is to coordinate the sending and receiving of data between thousands of simultaneous connections.

### Installing Node.js

To get started you need Node.js installed on your computer. I am starting with version number **14.7.0**. (see Semantic Versioning below)

You can check if you have Node.js installed, and what version it is, by typing `node -v` into the command line.

You can download Node.js from https://nodejs.org/. Choose the LTS option, which stands for _long term stable_ and is the more reliable option. The Current option has experimental features and is not recommended for **production** applications.

> We are in _development_ while we build our software - when its complete we deploy it to **production** so other people can use it

Keep in mind that a difference in Node.js MAJOR version numbers means significant changes to the API - I am using **v14**. We will practice with updating the version number along the way but be aware that using different versions than the one's used in this guide could result in unexpected behavior.

> **What is an API?**
>
> An API - or _application programming interface_ - is what you use to programmatically interact with a piece of software. Its the set of instructions the software makes available for you to use
>
> - Whenever we work with a program, such as Node.js or Express.js, we use its API to implement the functionality we need
> - When you need more information on an API, consult its _documentation_

If you feel like it, you can download _node version manager_ aka _nvm_ for Windows or Mac/Linux. This simple program gives you the flexibility to switch between whichever node versions you want to use.

---

#### Semantic Versioning

Semantic Versioning aka - _SemVer_ - is a specification for managing the evolution of a software product.

> When you compare two different versions, they may behave very differently. If you write code that _depends_ on another piece of software (usually called a _package_, _library_, or _dependency_), a change to its version number could cause _breaking changes_ to your program

We represent version numbers with three numbers: _MAJOR.MINOR.PATCH_. Starting from 1.0.0 we update these numbers according to the following rules from https://semver.org/:

Given a version number _MAJOR.MINOR.PATCH_, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards compatible manner, and
3. PATCH version when you make backwards compatible bug fixes.

The point is: _version numbers are important_. Be aware that updating the _MAJOR_ version of a dependency could totally change how your program functions.

---

### Node Package Manager

If you've already installed Node.js, then you've installed _node package manager_ (aka _npm_ or _NPM_) as well. _NPM_ is the command line tool used to download and install any 3rd-party package available on the **npm registry** into your project.

Confirm its installation and version number by typing `npm -v` into the CLI.

#### The npm registry

The [**npm registry**](https://www.npmjs.com/) is the central storehouse for _3rd-party Node.js libraries/packages_. The public libraries are available **for free** and are built and maintained by a variety of individuals and organizations. Many of the best packages are looked after by the Open Source Community.

The **npm registry** saves you a massive amount of time and helps developers avoid constantly \*"reinventing the wheel\*\*. In general, if a reputable package exists for your use case, its likely more efficient to use it than create your own solution.

Confirm a package is reputable by looking at its _weekly downloads_ and _version number_.

> A higher version number means the package has been around a while and likely has good support

You can also gauge its popularity by the numbers of _stars_ it has on [GitHub](https://github.com/) or whichever cloud repository it is stored on.

> Git is a version control system for tracking changes to your codebase and GitHub, Bitbucket and GitLab are a few of the most popular online code repositories. One of their primary features is to provide cloud storage for your Git repositories, allowing them to be publicly viewed or privately maintained by a team or company.

At the time of writing, the npm registry has about **1.3 million packages** available for use. Think of these packages as _prebuilt tools_. Browsing the registry can help you rapidly develop your product and even inspire new and exciting features.

#### The package.json file

> **What is JSON?**

> JSON - or _JavaScript Object Notation_ - is a lightweight data format used for storing and transporting data, especially in web applications. You will see JSON used in config and storage files and for sending data between a client and server.

First create a new folder to hold your project anywhere on your computer.

You can create a **package.json** file in the _root_ of your project directory by navigating to the directory in the CLI and then running `npm init`.

Follow the CLI instructions or press `enter` to accept the default input. In the future, use `npm init -y` to skip this step and accept the defaults.

Execute `ls` in the CLI to _list_ the files in your current directory and you should see **package.json** . If you open this file in your text editor (I use VS Code) you will see the following JSON:

```
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

[Express.js](https://expressjs.com/) is a fast, lightweight and minimalist **production grade** web framework for Node.js. It is considered by most people to be the _de facto standard_ for building reliable and scalable Node.js web applications. Big companies like PayPal and Uber count on it as a critical part of their infrastructure.

We will use Express to quickly and easily build back-end APIs.

Use the CLI from the root of your project to install Express in your project with `npm install express`.

The CLI will output some text similar to this:

    added 50 packages, and audited 51 packages in 3s
    found 0 vulnerabilities

> NPM will automatically analyze (audit) the packages you install and give you a report on possible issues. If you encounter vulnerabilities the CLI will give you instructions on how you can try to fix them. It is likely that everything still works fine despite the warnings - don't worry about this too much at this stage in your journey.

If you open your **package.json** file you should now see `"express"` under `"dependencies"`:

```
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
    		"express": "^4.17.1"
    	}
    }
```

> If your _version number_ for express is different - don't worry. As long as the major version is **4** everything will be fine. (refer to Semantic Versioning above)

> The caret symbol "^" tells npm to use the latest _minor version_

> You may also come across the tilde symbol "~" which tells npm to use the latest _patch version_

#### The package-lock.json file

The **package-_lock_.json** file is created as soon as you install your first package and is a snapshot of all dependencies present in your project.

The use of 3rd-party libraries is what catalyzes the rapid growth and evolution of web software. It is so foundational to web development that just one of the libraries you include in your project can have tens or even _hundreds_ of its own _dependencies_. The **package-_lock_.json** file gives you a detailed look at these dependencies, including version numbers, registry source, etc.

> You don't need to worry about this file - just know why it exists

#### The node_modules folder

The **node_modules** folder is _also_ created when you install your first package and it holds the actual `code` for the package, including all of its dependencies.

> **IMPORTANT** - you need to be in the same folder as your package.json file to install packages

Every time you add a package to your project, its code will be added to the **node_modules** folder.

> You don't need to worry about these files. If you changed them in any way you would be altering your project's dependencies and this could break your program

The nice thing about **node_modules** is that you don't have to save them or share them. As long as you have your **package.json** file you have a record of all your dependencies and can reinstall them from the **npm registry** at any time.

> To share your project - or to use someone else's - all you need is the **package.json** file. Just use the CLI to navigate to the folder that holds the package.json and run the command `npm install`

> Add **node_modules** to a **.gitignore** file to exclude it from version control

### Using ES Modules

In 2015, ECMAScript - the standardized specification for JavaScript - released a major revision to their spec called _ECMAScript 6_ also known as **ES6**.

ES6 introduced a host of new features and syntax into the JavaScript language, with even more features following in subsequent revisions. Modern JavaScript is based on these new features, collectively referred to as **ES6+**.

Since _ES Modules_ (an ES6+ feature) aren't yet the default in Node.js, we'll add `"type": "module"` to our **package.json** file to indicate we'll be using them.

> ES Modules are the modern syntax for importing/exporting JavaScript code from a file

Your _package.json_ file should now look like this:

```
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

### Testing our Setup

In the root of your project, create a file called _index.js_.

> The name _index_ is usually given to the _entry point file_ for a project.

Add the following code to _index.js_:

    console.log(process.version);

Run _index.js_ from the CLI with the command `node index.js`.

You should see the version of Node.js you are using logged to the console:

    $ node index.js
    v14.17.0

Next, import the _express library _ into _index.js_ using ES Imports syntax and log it to the CLI:

```
  import express from "express";
  console.log(express);
```

Running `node index.js` you should see the _express object_ logged to the terminal.

Congratulations, you are ready to begin building!

## Conclusion

In this article you learned that _Node.js_ gives us the ability to run JavaScript outside the browser and build full-stack web applications.

You saw that you can use _node package manager_ (_npm_) to access the _npm registry_ and choose from over a million different _packages_ to use in your project.

You installed _Express.js_, configured _ES Modules_ in the Node environment, and tested your setup to ensure everything was working.

Now what our development environment is set up, in the next article we will begin building our first web server with Express.js and Node.

Thanks for following along and I'll see you in the next one!