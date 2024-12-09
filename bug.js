const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const data = someAsyncOperation();
    res.send(data);
  }, 1000);
});

function someAsyncOperation() {
  // Simulate a random error
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return { message: 'Success!' };
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});