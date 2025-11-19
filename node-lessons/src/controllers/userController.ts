import { Request, Response } from "express";
import prisma from "../prismaClient";


// GET users from DB
export const getUsers = async (req: Request, res: Response) => {
  try {
    //"await" pauses the code here until the DB responds
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({error: "Something went wrong fetching users"})
  }
};

//2. CREATE User in DB
export const createUser = async (req: Request, res: Response) => {
  try {
    const {email, name} = req.body;

    //prisma.user.create({ data: ...}) is the magic command
    const newUser = await prisma.user.create({
      data: {
        email: email,
        name: name
      }
    })
 } catch(error){
  // This runs if Prisma throws an an error (e.g. , Email already exists)
  res.status(400).json({error: "Could not create user. Email might be taken"})
 }

}
