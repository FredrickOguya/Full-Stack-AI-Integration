const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to parse
app.use(express.json());

//GET route with query params
app.get('/user', (req,res) => {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});

//POST route
app.post('/user', (req,res) => {
  const {name, age} = req.body;
  res.json({message: `User ${name}, age ${age}, added successfully.`});
});

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));