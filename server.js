const express = require('express');
const app = express();

//Define a simple route
app.get('/', (req,res) => {
  res.send('Hello from Express.js!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/about', (req,res) => {
  res.send('This is the About page.')
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
})