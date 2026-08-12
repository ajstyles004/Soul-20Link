
import "dotenv/config";
import { db } from "../server/db";
import { users } from "../shared/schema";

async function main() {
    try {
        console.log("Testing database connection...");
        const userList = await db.select().from(users).limit(5);
        console.log("Users table found. Number of users:", userList.length);
        console.log("Users:", userList);
    } catch (error) {
        console.error("Database test failed:", error);
    } finally {
        process.exit(0);
    }
}

main();
