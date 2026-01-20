import { Router } from "express";
import { db } from "../db";
import { contactMessages, insertContactMessageSchema } from "../../shared/schema";
import { desc } from "drizzle-orm";

export const contactRouter = Router();

contactRouter.get("/", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
        const messages = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch messages" });
    }
});

contactRouter.post("/", async (req, res) => {
    try {
        const parseResult = insertContactMessageSchema.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json(parseResult.error);
        }
        const newMessage = await db.insert(contactMessages).values(parseResult.data as any).returning();
        res.status(201).json(newMessage[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to send message" });
    }
});
