
import "dotenv/config";
import { db } from "../server/db";
import { users } from "../shared/schema";
import bcrypt from "bcryptjs";

async function main() {
    try {
        const hashedPassword = await bcrypt.hash("admin", 10);

        console.log("Seeding admin user...");
        await db.insert(users).values({
            username: "admin",
            password: hashedPassword,
            role: "admin",
        });

        console.log("Admin user created successfully!");
        console.log("Username: admin");
        console.log("Password: admin");
    } catch (error) {
        console.error("Error seeding admin user:", error);
    } finally {
        process.exit(0);
    }
}

main();
