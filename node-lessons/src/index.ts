import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
const express = require('express');
import { Request,Response,NextFunction } from 'express';
const app = express();

const port = 3000;

app.use(express.json());

//custom middleware

const loggerMiddleware = (req: Request, res: Response,next: NextFunction) => {
  const method = req.method; // GET,POST ,etc.
  const url = req.url; // /users, /products
  const time = new Date().toISOString();

  console.log(`[${time} ${method} ${url}]`);

  next(); //CRITICAL: Move to the next station!
};

//use the loggerMiddleware globally
app.use(loggerMiddleware);

//2. Mount the routes
// This says: "If any requests starts with /Users, go to userRoutes"
app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(port, ()=> {
  console.log(`Server running on http://localhost:${port}`)
});
