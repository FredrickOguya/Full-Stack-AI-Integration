import { Request,Response } from "express";

export const getProducts = ( req: Request, res: Response) =>{
  const products = [
    "laptop",
    "phone",
    "computer"
  ]
  res.json(products);
};

export const createProduct = (req: Request, res: Response) => {
  const newProduct = req.body;

  res.status(201).json({
    message: "Product created successfully",
    product: newProduct
  });
};

export const getProductById = (req: Request, res: Response)=> {
  const {id} = req.params;

  res.json({
    message: `Searching for product with ID ${id}`
  });
};