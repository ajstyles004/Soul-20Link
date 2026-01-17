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

import { setupAuth } from "./auth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve uploads statically
  app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

  // Multer config
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = path.join(__dirname, "../uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });

  const upload = multer({ storage: storage });

  // Upload route
  app.post("/api/upload", upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    // Return relative path that can be used with the static middleware
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
  });

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
  app.delete("/api/posts/:id", deletePost);

  return app;
}
