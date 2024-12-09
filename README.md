# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware.  The `bug.js` file shows an example of asynchronous middleware that can throw an error.  Without proper error handling, this will cause the server to crash.  The `bugSolution.js` file provides a solution that demonstrates robust error handling using async/await and try...catch blocks.

## Running the Code

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js` (to see the error) and `node bugSolution.js` (to see the fix).

## Problem
The `someAsyncOperation` function in `bug.js` might throw an error, however, there's no error handling within the asynchronous middleware. This leads to an unhandled promise rejection and crashes the application.
## Solution
The `bugSolution.js` file demonstrates a solution using async/await and try...catch. This ensures that any errors that occur within the async middleware are caught, preventing the application from crashing and providing a better user experience.