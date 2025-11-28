// app.js
const express = require('express');
const app = express();
const port = 3000; // Define the port

app.get('/', (req, res) => {
  res.send('Hello from mahesh nodejs server via local image  (via Podman)!');
});
app.get('/new', (req, res) => {
  res.send('rendering new verhchsion');
  // res.send('Hello from mahesh nodejs≥ server via local image  (via Podman)!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});