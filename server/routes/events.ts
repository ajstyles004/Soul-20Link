import { Request, Response } from "express";
import { db } from "../db";
import { events, insertEventSchema } from "../../shared/schema";
import { eq, desc } from "drizzle-orm";

export const getEvents = async (req: Request, res: Response) => {
    try {
        const allEvents = await db.select().from(events).orderBy(desc(events.date));
        res.json(allEvents);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch events" });
    }
};

export const createEvent = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const body = insertEventSchema.parse(req.body);
        const newEvent = await db.insert(events).values(body as any).returning();
        res.status(201).json(newEvent[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to create event" });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const deletedEvent = await db
            .delete(events)
            .where(eq(events.id, id))
            .returning();

        if (deletedEvent.length === 0) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json(deletedEvent[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to delete event" });
    }
};

export const getEvent = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

        const event = await db.query.events.findFirst({
            where: eq(events.id, id),
        });

        if (!event) return res.status(404).json({ message: "Event not found" });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch event" });
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

        const body = insertEventSchema.partial().parse(req.body);
        const updatedEvent = await db
            .update(events)
            .set(body)
            .where(eq(events.id, id))
            .returning();

        if (updatedEvent.length === 0) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json(updatedEvent[0]);
    } catch (error: any) {
        if (error.issues) {
            return res.status(400).json({ message: "Validation error", errors: error.issues });
        }
        res.status(500).json({ message: "Failed to update event" });
    }
};
