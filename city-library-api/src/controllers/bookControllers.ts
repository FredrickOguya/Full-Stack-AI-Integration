import { Request, Response } from 'express';
import prisma from '../db';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany();

    res.json(books);
  } catch(error) {
    res.status(500).json({error: "Error fetching books"})
  }
}

export const addBook = async (req: Request, res: Response) => {
  try {
    const {title, author, pages, isAvailable} = req.body;
    const newBook = await prisma.book.create({
      data: {title, author, pages, isAvailable}
    })
    res.status(201).json(newBook);
  } catch(error) {
    res.status(400).json({error: "Error creating post"});
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title,author,pages,isAvailable } = req.body;

    const updatedBook = await prisma.book.update({
      where: {id: Number(id)},
      data: {
        title: title,
        author: author,
        pages: pages,
        isAvailable: isAvailable
      }
    })
    res.json({message: "Book updated", book: updatedBook})
  } catch(error){
    res.status(404).json({error: "Book not found or update failed"})
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    await prisma.book.delete({
      where: {id: Number(id)}
    });
    res.json({message: "Book deleted successfully"})
  } catch(error) {
    res.status(404).json({error: "Book not found or delete failed"})
  }
}

