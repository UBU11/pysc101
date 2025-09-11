import { serve } from "@hono/node-server";
import "dotenv/config";
import { Hono } from "hono";
import { Pool } from "pg";

const app = new Hono().basePath("/api");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  ssl: true,
});

app.get("/home", async (c) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query("SELECT version()");
    return c.json({ version: rows[0].version });
  } catch (error) {
    console.error("Database query failed:", error);
    return c.text("Failed to connect to database", 500);
  } finally {
    client.release();
  }
});

app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

const server = serve({
  fetch: app.fetch,
  port: 5000,
});


process.on("SIGINT",()=>{
  server.close(pool.end)
  process.exit(0)
})

process.on("SIGTERM",()=>{
  server.close((error) =>{
    if(error){
      console.log(error)
      process.exit(1)
    }
    process.exit(0)
  })
})
