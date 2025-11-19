import { Request, Response } from "express";
import prisma from "../prismaClient";

//Logic for getting users
export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

//Logic for creating a user
export const createUser = (req: Request, res: Response) => {
  const newUser = req.body;
  console.log(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  })
}