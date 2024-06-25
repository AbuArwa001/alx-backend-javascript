# 0x00. ES6 Basics

Welcome to the **0x00. ES6 Basics** project! This project is designed to enhance your understanding and skills in JavaScript ES6, a major update to JavaScript that introduced many new features to make your code cleaner, more readable, and more powerful.

## Table of Contents

- [0x00. ES6 Basics](#0x00-es6-basics)
  - [Table of Contents](#table-of-contents)
  - [Concepts](#concepts)
  - [Resources](#resources)
  - [Learning Objectives](#learning-objectives)
  - [Requirements](#requirements)
    - [General](#general)
  - [Setup](#setup)
    - [Install NodeJS 12.11.x](#install-nodejs-1211x)
- [Should output: v12.11.1](#should-output-v12111)
- [Should output: 6.11.3](#should-output-6113)

## Concepts

For this project, you should focus on the following concepts:

- JavaScript programming
- Software Linter

## Resources

Read or watch the following resources to prepare:

- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://www.javascripttutorial.net/es6/javascript-iterable/)

## Learning Objectives

By the end of this project, you should be able to explain the following concepts to anyone without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

In your home directory:

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# Should output: v12.11.1
npm -v
# Should output: 6.11.3
