import { Request, Response } from "express";
import { db } from "../db";
import { programmes, insertProgrammeSchema } from "../../shared/schema";
import { eq, desc } from "drizzle-orm";

export const getProgrammes = async (req: Request, res: Response) => {
    try {
        const allProgrammes = await db.select().from(programmes).orderBy(desc(programmes.id));
        res.json(allProgrammes);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch programmes" });
    }
};

export const createProgramme = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const body = insertProgrammeSchema.parse(req.body);
        const newProgramme = await db.insert(programmes).values(body as any).returning();
        res.status(201).json(newProgramme[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to create programme" });
    }
};

export const deleteProgramme = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const deletedProgramme = await db
            .delete(programmes)
            .where(eq(programmes.id, id))
            .returning();

        if (deletedProgramme.length === 0) {
            return res.status(404).json({ message: "Programme not found" });
        }

        res.json(deletedProgramme[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to delete programme" });
    }
};

export const updateProgramme = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

        const body = insertProgrammeSchema.partial().parse(req.body);
        const updatedProgramme = await db
            .update(programmes)
            .set(body)
            .where(eq(programmes.id, id))
            .returning();

        if (updatedProgramme.length === 0) {
            return res.status(404).json({ message: "Programme not found" });
        }

        res.json(updatedProgramme[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to update programme" });
    }
};
