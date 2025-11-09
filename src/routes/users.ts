import { Router,type Request,type Response } from 'express';

const router = Router();

//GET all users
router.get("/", (req: Request, res: Response) => {
  res.json({message: "All users"});
});

//POST create a user
router.post("/", (req: Request, res: Response) => {
  const {name, age } = req.body as { name: string, age: number };
  res.json({message: `User ${name}, age ${age}, added successfully.`});
});

export default router;