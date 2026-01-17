import "dotenv/config";
import { db } from "../server/db";
import { users } from "../shared/schema";
import { hash } from "bcryptjs";

async function main() {
    console.log("Seeding admin user...");

    const password = await hash("admin123", 10);

    try {
        const res = await db.insert(users).values({
            username: "admin",
            password: password,
            role: "admin",
        }).returning();

        console.log("Admin user created successfully:", res[0].username);
    } catch (error: any) {
        console.error("Error creating admin user:", error.message);
    }

    process.exit(0);
}

main();
