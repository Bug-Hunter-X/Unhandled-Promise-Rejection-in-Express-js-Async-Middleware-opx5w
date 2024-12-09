const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
    const data = await someAsyncOperation();
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Something went wrong!');
  }
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve({ message: 'Success!' });
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});