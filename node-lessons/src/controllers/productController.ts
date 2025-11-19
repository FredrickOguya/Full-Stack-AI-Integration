import { Request, Response } from 'express';
import prisma from '../prismaClient';

// 1. GET All Products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// 2. CREATE Product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: price 
        // NOTE: Ensure you send a number in JSON, e.g., "price": 999.99
        // If you send a string "999", Prisma will crash here.
      }
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct
    });
  } catch (error) {
    res.status(400).json({ error: "Failed to create product" });
  }
};

// 3. GET Product by ID (The Tricky One)
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // CRITICAL: URL params are ALWAYS strings (e.g., "5").
    // Our DB expects an Int. We must convert it using Number() or parseInt().
    const product = await prisma.product.findUnique({
      where: { 
        id: Number(id) 
      }
    });

    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return; // Stop execution if not found
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};