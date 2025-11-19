import { error } from 'console';
import {  Request,  Response, Router, NextFunction} from 'express';
import { getUsers, createUser } from '../controllers/userController';

const router = Router();


const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key']

  if (!apiKey || apiKey !== "secret-password"){
    res.status(403).json({error: "Access Denied"})
    return;
  }
  next();
}

//1. GET  /users - Get a list of users
router.get('/', checkApiKey,getUsers) 
// 2. POST /users - Create a new user
router.post('/', createUser);

export default router;