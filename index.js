import express from "express";
import { configDotenv } from "dotenv";

const express = require('express');
const app = express();

configDotenv(); // load environment variables

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;


//Middleware (runs for all routes)
app.use((req,res,next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Route 1
app.get('/',(req,res) => {
  res.send('Welcome to the homepage');
});

// Route 2
app.post('/users', (req, res) => {
  res.json({message: 'New user added succesfully'});
})

app.listen(PORT,()=> console.log(`server running on port ${PORT}`));