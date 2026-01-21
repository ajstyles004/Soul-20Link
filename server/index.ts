import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { handleDemo } from "./routes/demo";
import { getPosts, getPostById, createPost, updatePost, deletePost } from "./routes/posts";
import { getEvents, createEvent, deleteEvent, getEvent, updateEvent } from "./routes/events";
import { getMembers, createMember, deleteMember, updateMember } from "./routes/members";
import { getProgrammes, createProgramme, deleteProgramme, updateProgramme } from "./routes/programmes";
import { getStats } from "./routes/stats";
import { donationsRouter } from "./routes/donations";
import { contactRouter } from "./routes/contact";
import { usersRouter } from "./routes/users";
import { uploadRouter } from "./routes/upload";

import { setupAuth } from "./auth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve uploads statically
  app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

  // Upload Route
  app.use("/api/upload", uploadRouter);

  setupAuth(app);

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Post routes
  app.get("/api/posts", getPosts);
  app.get("/api/posts/:id", getPostById);
  app.post("/api/posts", createPost);
  app.patch("/api/posts/:id", updatePost);
  app.patch("/api/posts/:id", updatePost);
  app.delete("/api/posts/:id", deletePost);

  // Event routes
  app.get("/api/events", getEvents);
  app.post("/api/events", createEvent);
  app.get("/api/events/:id", getEvent);
  app.patch("/api/events/:id", updateEvent);
  app.delete("/api/events/:id", deleteEvent);

  // Member Routes
  app.get("/api/members", getMembers);
  app.post("/api/members", createMember);
  app.patch("/api/members/:id", updateMember);
  app.delete("/api/members/:id", deleteMember);

  // Programme Routes
  app.get("/api/programmes", getProgrammes);
  app.post("/api/programmes", createProgramme);
  app.patch("/api/programmes/:id", updateProgramme);
  app.delete("/api/programmes/:id", deleteProgramme);

  // Stats
  app.get("/api/stats", getStats);

  // New Admin Routes
  app.use("/api/donations", donationsRouter);
  app.use("/api/contact", contactRouter);
  app.use("/api/users", usersRouter);

  return app;
}
