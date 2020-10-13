const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT || 5000, () => {
  console.log(`App listening on ${PORT}`);
});