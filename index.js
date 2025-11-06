const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to allow json data
app.use(express.json());

// GET route -for reading data
app.get('/hello', (req,res) => {
  const name = req.query.name;// read from URL
  res.send(`Hello, ${name}!`);
});

//POST route - for sending data
app.post('/user', (req,res) => {
  const {name, age} = req.body; // read JSON data
  res.json({message: `User ${name}, age ${age}, added successfully`})
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));