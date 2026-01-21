import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
import * as schema from '../shared/schema';

const { Pool } = pkg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// Simple connectivity check
pool.connect().then(client => {
  console.log("Database connected successfully");
  client.release();
}).catch(err => {
  console.error("Database connection failed:", err);
});

export const db = drizzle(pool, { schema });
