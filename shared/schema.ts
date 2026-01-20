import { pgTable, text, serial, timestamp, boolean, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    password: text("password").notNull(),
    role: varchar("role", { length: 50 }).default("user").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
    role: z.string().default("user"),
});

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    type: varchar("type", { length: 50 }).notNull(), // 'blog', 'news'
    imageUrl: text("image_url"),
    authorId: integer("author_id"), // Nullable for now, or link to users
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertPostSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    type: z.string().min(1, "Type is required"),
    imageUrl: z.string().optional(),
    authorId: z.number().optional(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export const events = pgTable("events", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    date: text("date").notNull(), // Storing as ISO string or legible date string
    location: text("location").notNull(),
    description: text("description").notNull(),
    imageUrl: text("image_url"),
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertEventSchema = z.object({
    title: z.string().min(1, "Title is required"),
    date: z.string().min(1, "Date is required"),
    location: z.string().min(1, "Location is required"),
    description: z.string().min(1, "Description is required"),
    imageUrl: z.string().optional(),
});

export const members = pgTable("members", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    position: text("position").notNull(),
    contact: text("contact").notNull(), // Email or Phone
    imageUrl: text("image_url"),
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertMemberSchema = z.object({
    name: z.string().min(1, "Name is required"),
    position: z.string().min(1, "Position is required"),
    contact: z.string().min(1, "Contact is required"),
    imageUrl: z.string().optional(),
});

export const programmes = pgTable("programmes", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    imageUrl: text("image_url"),
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertProgrammeSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    imageUrl: z.string().optional(),
});

export const donations = pgTable("donations", {
    id: serial("id").primaryKey(),
    donorName: text("donor_name").notNull(),
    email: text("email").notNull(),
    amount: integer("amount").notNull(), // Stored in smallest currency unit (e.g. cents/paise) or just raw number
    status: varchar("status", { length: 20 }).default("pending").notNull(), // pending, verified, failed
    transactionId: text("transaction_id"),
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertDonationSchema = z.object({
    donorName: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    amount: z.number().min(1, "Amount must be greater than 0"),
    status: z.string().default("pending"),
    transactionId: z.string().optional(),
});

export const contactMessages = pgTable("contact_messages", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(1, "Message is required"),
});

export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Member = typeof members.$inferSelect;
export type InsertMember = z.infer<typeof insertMemberSchema>;
export type Programme = typeof programmes.$inferSelect;
export type InsertProgramme = z.infer<typeof insertProgrammeSchema>;
export type Donation = typeof donations.$inferSelect;
export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
