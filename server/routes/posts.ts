import { Request, Response } from "express";
import { db } from "../db";
import { posts, insertPostSchema } from "../../shared/schema";
import { eq, desc } from "drizzle-orm";

export const getPosts = async (req: Request, res: Response) => {
    try {
        const { type } = req.query;

        let whereClause = undefined;
        if (type && typeof type === 'string') {
            whereClause = eq(posts.type, type);
        }

        const allPosts = await db.select().from(posts).where(whereClause).orderBy(desc(posts.createdAt));
        res.json(allPosts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch posts" });
    }
};

export const getPostById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const post = await db.select().from(posts).where(eq(posts.id, id)).limit(1);

        if (post.length === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(post[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch post" });
    }
};

export const createPost = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const body = insertPostSchema.parse(req.body);
        const newPost = await db.insert(posts).values(body).returning();
        res.status(201).json(newPost[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to create post" });
    }
};

export const updatePost = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const body = insertPostSchema.parse(req.body);
        const updatedPost = await db
            .update(posts)
            .set(body)
            .where(eq(posts.id, id))
            .returning();

        if (updatedPost.length === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(updatedPost[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to update post" });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const deletedPost = await db
            .delete(posts)
            .where(eq(posts.id, id))
            .returning();

        if (deletedPost.length === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(deletedPost[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to delete post" });
    }
};
