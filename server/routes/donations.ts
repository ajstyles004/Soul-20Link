import { Router } from "express";
import { db } from "../db";
import { donations, insertDonationSchema } from "../../shared/schema";
import { eq, desc } from "drizzle-orm";

export const donationsRouter = Router();

donationsRouter.get("/", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
        const allDonations = await db.select().from(donations).orderBy(desc(donations.createdAt));
        res.json(allDonations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch donations" });
    }
});

donationsRouter.post("/", async (req, res) => {
    try {
        const parseResult = insertDonationSchema.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json(parseResult.error);
        }
        const newDonation = await db.insert(donations).values(parseResult.data as any).returning();
        res.status(201).json(newDonation[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to create donation" });
    }
});

donationsRouter.patch("/:id/verify", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.sendStatus(400);

        const updated = await db
            .update(donations)
            .set({ status: "verified" })
            .where(eq(donations.id, id))
            .returning();

        if (updated.length === 0) return res.status(404).json({ message: "Donation not found" });

        res.json(updated[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to verify donation" });
    }
});
