# 0x06. Unittests in JS

## Curriculum

This project focuses on unit testing in JavaScript using Mocha, Chai, Sinon, and other related tools. You'll learn how to write and organize tests, use different assertion libraries, implement spies and stubs, and conduct integration testing in a Node.js environment.

## Resources

Read or watch the following materials to better understand the topics covered in this project:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai, and SinonJS](https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai)

## Learning Objectives

By the end of this project, you should be able to explain:
- How to use Mocha to write a test suite.
- How to use different assertion libraries (Node or Chai).
- How to present long test suites.
- When and how to use spies.
- When and how to use stubs.
- What hooks are and when to use them.
- Unit testing with async functions.
- How to write integration tests with a small Node server.

## Requirements

- All code will be executed on Ubuntu 18.04 using Node 12.x.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project is mandatory.
- Use the `.js` file extension for all JavaScript files.
- When running tests with `npm run test *.test.js`, all tests should pass without warnings or errors.

## Tasks

### 0. Basic test with Mocha and Node assertion library
- **Install Mocha** using npm.
- **Create `0-calcul.js`:** Implement a function `calculateNumber` that rounds two numbers and returns their sum.
- **Create `0-calcul.test.js`:** Write test cases for `calculateNumber`.

### 1. Combining descriptions
- **Create `1-calcul.js`:** Extend `calculateNumber` to support operations: SUM, SUBTRACT, DIVIDE.
- **Create `1-calcul.test.js`:** Write test cases using `describe` to organize tests.

### 2. Basic test using Chai assertion library
- **Create `2-calcul_chai.js`:** Copy `1-calcul.js` and rewrite the test suite using Chai's `expect` syntax.
- **Create `2-calcul_chai.test.js`:** Write test cases using Chai.

### 3. Spies
- **Create `utils.js`:** Create a module `Utils` with a `calculateNumber` function.
- **Create `3-payment.js`:** Implement `sendPaymentRequestToApi` that uses `Utils.calculateNumber`.
- **Create `3-payment.test.js`:** Use `sinon.spy` to verify that `Utils.calculateNumber` is called correctly.

### 4. Stubs
- **Create `4-payment.js`:** Copy the code from `3-payment.js`.
- **Create `4-payment.test.js`:** Use `sinon.stub` to control `Utils.calculateNumber` and verify behavior.

### 5. Hooks
- **Create `5-payment.js`:** Copy the code from `4-payment.js`.
- **Create `5-payment.test.js`:** Use `beforeEach` and `afterEach` hooks to set up and clean up tests.

### 6. Async tests with done
- **Create `6-payment_token.js`:** Implement `getPaymentTokenFromAPI` that returns a promise.
- **Create `6-payment_token.test.js`:** Write async test cases using the `done` callback.

### 7. Skip
- **Create `7-skip.test.js`:** Write a test suite where one test is skipped using `it.skip`.

### 8. Basic Integration testing
- **Create `8-api/api.js`:** Set up an Express server with a simple route.
- **Create `8-api/api.test.js`:** Write integration tests for the Express server.

### 9. Regex integration testing
- **Modify `9-api/api.js`:** Add a new route with parameter validation.
- **Modify `9-api/api.test.js`:** Write test cases for the new route.

### 10. Deep equality & Post integration testing
- **Modify `10-api/api.js`:** Add endpoints for `/available_payments` and `/login`.
- **Modify `10-api/api.test.js`:** Write integration tests for the new endpoints.

## Repo

- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x06-unittests_in_js`
- **Files:** `package.json`, `*.js`, `*.test.js`
