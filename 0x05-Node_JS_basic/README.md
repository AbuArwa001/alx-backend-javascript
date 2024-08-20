# 0x05. NodeJS Basics

## Resources
Read or watch:
- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API doc](https://nodejs.org/api/process.html)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

## Learning Objectives
By the end of this project, you should be able to:
- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific NodeJS modules to read files
- Use the process module to access command line arguments and environment variables
- Create a small HTTP server using NodeJS
- Create a small HTTP server using ExpressJS
- Create advanced routes with ExpressJS
- Use ES6 with NodeJS via Babel-node
- Use Nodemon to develop faster

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node (version 12.x.x)
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest with the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all tests and lint checks. You can verify the entire project using `npm run full-test`
- All functions/classes must be exported using the format: `module.exports = myFunction;`

## Provided Files
- `database.csv`
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

## Installation
Make sure to run `$ npm install` to install all necessary dependencies.

## Tasks

### 0. Executing Basic JavaScript with NodeJS
- **File:** `0-console.js`
- **Description:** Create a function named `displayMessage` that prints a string argument to STDOUT.

### 1. Using Process stdin
- **File:** `1-stdin.js`
- **Description:** Create a program that reads user input from stdin and prints a greeting.

### 2. Reading a File Synchronously with NodeJS
- **File:** `2-read_file.js`
- **Description:** Create a function `countStudents` that reads a CSV file synchronously and logs the number of students and their fields.

### 3. Reading a File Asynchronously with NodeJS
- **File:** `3-read_file_async.js`
- **Description:** Modify `countStudents` to read the file asynchronously and return a Promise.

### 4. Create a Small HTTP Server Using Node's HTTP Module
- **File:** `4-http.js`
- **Description:** Create a basic HTTP server that responds with "Hello Holberton School!" for any endpoint.

### 5. Create a More Complex HTTP Server Using Node's HTTP Module
- **File:** `5-http.js`
- **Description:** Extend the server to handle `/` and `/students` routes, displaying student information.

### 6. Create a Small HTTP Server Using Express
- **File:** `6-http_express.js`
- **Description:** Recreate the HTTP server using Express.

### 7. Create a More Complex HTTP Server Using Express
- **File:** `7-http_express.js`
- **Description:** Extend the Express server to handle advanced routes with student information.

### 8. Organize a Complex HTTP Server Using Express
- **Files:** 
  - `full_server/utils.js`
  - `full_server/controllers/AppController.js`
  - `full_server/controllers/StudentsController.js`
  - `full_server/routes/index.js`
  - `full_server/server.js`
- **Description:** Structure a full Express server with controllers, routes, and utility functions. Implement routes to manage student data using the provided CSV file.

## Running the Server
To start the server, run:
```bash
$ npm run dev
