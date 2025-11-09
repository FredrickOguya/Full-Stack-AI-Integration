import express, { type Request,type Response } from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse json
app.use(express.json());

//GET route
app.get("/",(req: Request,res:Response) => {
  const name = req.query.name as string || "Guest";
  res.send(`Hello, ${name}!`);
});

app.post("/user",(req: Request,res: Response) => {
  const {name, age } = req.body as { name: string; age: number};
  res.json({message: `User ${name}, age ${age}, added successfully.`});
});

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
})