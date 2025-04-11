const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from inside the Docker container!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

