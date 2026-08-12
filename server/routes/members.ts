import { Request, Response } from "express";
import { db } from "../db";
import { members, insertMemberSchema } from "../../shared/schema";
import { eq, desc } from "drizzle-orm";

export const getMembers = async (req: Request, res: Response) => {
    try {
        const allMembers = await db.select().from(members).orderBy(members.id);
        res.json(allMembers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch members" });
    }
};

export const createMember = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const body = insertMemberSchema.parse(req.body);
        const newMember = await db.insert(members).values(body as any).returning();
        res.status(201).json(newMember[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to create member" });
    }
};

export const deleteMember = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const deletedMember = await db
            .delete(members)
            .where(eq(members.id, id))
            .returning();

        if (deletedMember.length === 0) {
            return res.status(404).json({ message: "Member not found" });
        }

        res.json(deletedMember[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to delete member" });
    }
};

export const updateMember = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

        const body = insertMemberSchema.partial().parse(req.body);
        const updatedMember = await db
            .update(members)
            .set(body)
            .where(eq(members.id, id))
            .returning();

        if (updatedMember.length === 0) {
            return res.status(404).json({ message: "Member not found" });
        }

        res.json(updatedMember[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to update member" });
    }
};
