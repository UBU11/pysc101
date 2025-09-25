import { serve } from "@hono/node-server";
import "dotenv/config";
import { Hono } from "hono";
import { blogTable, getBlogData, insertConetent } from "./DB/blog.model.js";
import client from "./DB/db.js";
import { createTable, getData, insertData } from "./DB/user.model.js";

const app = new Hono({
  strict: false,
});

app.get("/login", async (c) => {
  try {
    createTable();
    insertData("user", "email@1234", "password123");
    getData();

    return c.text("Sql");
  } catch (error) {
    console.error("Database query failed:", error);
    return c.text("Failed to connect to database", 500);
  } finally {
    client.release();
  }
});

app.get("/blog", async (c) => {
  try {
    blogTable(), getBlogData();
    return c.text("Blog");
  } catch (error) {
    console.error("querry is not listed or created", error);
    return c.text("Failed to connect to database", 500);
  } finally {
    client.release();
  }
});

app.post("/blog", async (c) => {
  try {
    const req = await c.req.json();
    insertConetent(req.title, req.content, req.author, req.category, req.image, req.reading_time);
    return c.text("Blog is posted");
  } catch (error) {
    console.error("querry is not listed or created", error);
    return c.text("Failed to connect to database", 500);
  } finally {
    console.log("Blog is posted");
  }
});

app.notFound((c) => {
  return c.text("Error:404 ", 404);
});

serve({
  fetch: app.fetch,
  port: 5000,
});
console.log(`Server is running on port 5000 http://localhost:5000`);
