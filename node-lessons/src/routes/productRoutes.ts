import { error } from 'console';
import { Router, Request, Response, NextFunction } from 'express';
import { createProduct, getProductById, getProducts } from '../controllers/productController';

const router = Router();


//validation Middleware
const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const {name, price} = req.body;

  //if name is missing or price is missing, STOP the request.
  if(!name || !price) {
    res.status(400).json({error: "Name and Price are required"});
    return; // We return here so the code stops execution
  }
  // If everything is good, let them pass.
  next();
}
// 1. List all products
router.get('/', getProducts);

// 2. Create a product
router.post('/',validateProduct,createProduct);

// 3. Find product by ID
router.get('/:id', getProductById);

export default router;