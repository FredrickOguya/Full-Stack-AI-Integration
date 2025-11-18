import { Router, Request, Response } from 'express';

const router = Router();

// 1. List all products
router.get('/', (req: Request, res: Response) => {
    const products = [
      "laptop",
      "phone",
      "earpods"
    ];
    res.json(products);
});

// 2. Create a product
router.post('/', (req: Request, res: Response) => {
  const newProduct = req.body;

  console.log(newProduct);

  res.status(201).json({
    message: "Product created successfully", 
    product: newProduct
  });
});

// 3. Find product by ID
router.get('/:id', (req: Request, res: Response) => {
  // express stores the value of :id in req.params
  const productId = req.params.id; 
  
  res.json({
    message: `Searching for product with ID: ${productId}`
  });
});

export default router;