import 'dotenv/config';
import { db } from "./db";
import { users, members, programmes, events, posts, donations, contactMessages } from "../shared/schema";
import { eq, sql, inArray } from "drizzle-orm";

async function runDebug() {
    console.log("Starting debug stats check...");

    try {
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
            db.select({ count: sql<number>`count(*)` }).from(users),
            db.select({ count: sql<number>`count(*)` }).from(members),
            db.select({ count: sql<number>`count(*)` }).from(programmes),
            db.select({ count: sql<number>`count(*)` }).from(events),
            db.select({ count: sql<number>`count(*)` }).from(posts).where(inArray(posts.type, ['news', 'blog'])),
            db.select({ count: sql<number>`count(*)` }).from(posts).where(eq(posts.type, 'gallery')),
            db.select({ count: sql<number>`count(*)` }).from(donations).where(eq(donations.status, 'pending')),
            db.select({ count: sql<number>`count(*)` }).from(contactMessages)
        ]);

        console.log("Raw Counts:");
        console.log("Admin Users:", adminUsersCount);
        console.log("Members:", membersCount);
        console.log("Programmes:", programmesCount);
        console.log("Events:", eventsCount);
        console.log("News:", newsCount);
        console.log("Gallery:", galleryCount);
        console.log("Donations:", pendingDonationsCount);
        console.log("Messages:", contactMessagesCount);

        // Check types
        console.log("Type checks:");
        console.log("Admin Users type:", typeof adminUsersCount[0]?.count, adminUsersCount[0]?.count);

    } catch (e) {
        console.error("Error during debug:", e);
    }
    process.exit(0);
}

runDebug();
