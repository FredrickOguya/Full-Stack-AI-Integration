import { Request, Response } from 'express';
import prisma from '../db';

// 1. GET ALL POSTS
  export const getPosts = async (req: Request, res: Response) => {
    try {
      const posts = await prisma.post.findMany();
      res.json(posts);
    } catch(error) {
      res.status(500).json({ error: "Error fetching posts" });
    }
  }

// 2. Create POST
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, category } = req.body;
    const newPost = await prisma.post.create({
      data: {title, content, category}
    });
    res.status(201).json(newPost);
  } catch(error) {
    res.status(400).json({error: "Error creating post"});
  }
};

// 3. UPDATE POST (The Logic you needed)
export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title,content } = req.body;

    const updatedPost = await prisma.post.update({
      where: {id: Number(id)},
      data: {
        title: title,
        content: content
      }
    });
    res.json({message: "Post updated", post: updatedPost });
  } catch (error) {
    res.status(404).json({error: "Post not found or update failed"})
  }
}

// 4. DELETE POST
export const deletePost = async (req: Request, res:Response) => {
  try {
    const {id} = req.params;

    await prisma.post.delete({
      where: {id: Number(id)}
    });

    res.json({message: "Post deleted successfully"});
  } catch (error) {
    res.status(404).json({error: "Post not found or delete failed"});
  }
}