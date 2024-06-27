# 0x02. ES6 Classes

## OOP

### Resources
Read or watch:
- Classes
- Metaprogramming

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

1. How to define a Class
2. How to add methods to a class
3. Why and how to add a static method to a class
4. How to extend a class from another
5. Metaprogramming and symbols

### Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

### Setup
1. Install NodeJS 12.11.x (in your home directory):
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    ```
2. Install Jest, Babel, and ESLint: In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

### Configuration files
Add the following files to your project directory:

1. `package.json`
    ```json
    // package.json
    {
      "scripts": {
        "test": "jest",
        "full-test": "npm run lint && npm test",
        "lint": "eslint ."
      }
    }
    ```
2. `babel.config.js`
    ```javascript
    // babel.config.js
    module.exports = {
      presets: [
        '@babel/preset-env'
      ]
    };
    ```
3. `.eslintrc.js`
    ```javascript
    // .eslintrc.js
    module.exports = {
      env: {
        browser: true,
        es6: true,
        jest: true
      },
      extends: 'eslint:recommended',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      rules: {
        'no-console': 'off',
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
      }
    };
    ```

Don’t forget to run `$ npm install` when you have the `package.json`.

### Tasks
#### 0. You used to attend a place like this at some point (mandatory)
Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
- It should accept one attribute named `maxStudentsSize` (Number) and assign it to `_maxStudentsSize`
```javascript
// 0-classroom.js
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
