import { Request, Response } from "express";
import { db } from "../db";
import { users, members, programmes, events, posts, donations, contactMessages } from "../../shared/schema";
import { eq, sql, inArray } from "drizzle-orm";

export const getStats = async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        // Parallelize queries for performance
        const [
            adminUsersCount,
            membersCount,
            programmesCount,
            eventsCount,
            newsCount,
            galleryCount,
            pendingDonationsCount,
            contactMessagesCount
        ] = await Promise.all([
            // Admin Users
            db.select({ count: sql<number>`count(*)` }).from(users),

            // Members
            db.select({ count: sql<number>`count(*)` }).from(members),

            // Programmes
            db.select({ count: sql<number>`count(*)` }).from(programmes),

            // Events
            db.select({ count: sql<number>`count(*)` }).from(events),

            // News & Articles (type = news or blog)
            db.select({ count: sql<number>`count(*)` }).from(posts).where(inArray(posts.type, ['news', 'blog'])),

            // Gallery Images (type = gallery)
            db.select({ count: sql<number>`count(*)` }).from(posts).where(eq(posts.type, 'gallery')),

            // Pending Donations
            db.select({ count: sql<number>`count(*)` }).from(donations).where(eq(donations.status, 'pending')),

            // Contact Messages
            db.select({ count: sql<number>`count(*)` }).from(contactMessages)
        ]);

        res.json({
            pendingMemberApprovals: 0, // Feature not implemented
            newsAndArticles: Number(newsCount[0].count),
            galleryImages: Number(galleryCount[0].count),
            pendingDonations: Number(pendingDonationsCount[0].count),
            contactMessages: Number(contactMessagesCount[0].count),
            adminUsers: Number(adminUsersCount[0].count),
            totalMembers: Number(membersCount[0].count),
            totalProgrammes: Number(programmesCount[0].count),
            totalEvents: Number(eventsCount[0].count)
        });
    } catch (error) {
        console.error("Stats fetch error:", error);
        res.status(500).json({ message: "Failed to fetch stats" });
    }
};
