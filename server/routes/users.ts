import { Router } from "express";
import { db } from "../db";
import { users, insertUserSchema } from "../../shared/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
        const allUsers = await db.select({
            id: users.id,
            username: users.username,
            role: users.role,
            createdAt: users.createdAt
        }).from(users);
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users" });
    }
});

usersRouter.post("/", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
        const parseResult = insertUserSchema.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json(parseResult.error);
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(parseResult.data.password, 10);

        const newUser = await db.insert(users).values({
            ...parseResult.data,
            password: hashedPassword
        } as any).returning();

        // Don't return password
        const { password, ...userWithoutPassword } = newUser[0];
        res.status(201).json(userWithoutPassword);
    } catch (error: any) {
        if (error.code === '23505') { // Unique violation for username
            return res.status(409).json({ message: "Username already exists" });
        }
        res.status(500).json({ message: "Failed to create user" });
    }
});

usersRouter.delete("/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.sendStatus(400);

        // Prevent deleting oneself
        if ((req.user as any).id === id) {
            return res.status(400).json({ message: "Cannot delete yourself" });
        }

        await db.delete(users).where(eq(users.id, id));
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user" });
    }
});
