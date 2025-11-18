import { type Request, type Response} from 'express';
import expresss from 'express'

const express = require('express');
const router = express.Router();

//1. GET  /users - Get a list of users
router.get('/',(req: Request,res: Response) => {
  //In a real app, we would fetch this from a database
  const users = [
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob'}
  ];
  res.json(users);
});

// 2. POST /users - Create a new user
router.post('/', (req: Request, res: Response) => {
  // We grab the data sent by the client from req.body
  const newUser = req.body;

  console.log(newUser); //Let's see it in the terminall

  //Send back a sucess message and the data we received
  res.status(201).json({
    message: "User created successfully",
    user: newUser
  })
})

export default router;