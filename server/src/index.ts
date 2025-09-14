import { serve } from "@hono/node-server";
import "dotenv/config";
import { Hono } from "hono";
import client from "./DB/db.js";
import { createTable, getData, insertData } from "./DB/user.model.js";
import { blogTable, insertConetent, getBlogData } from "./DB/blog.model.js";

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
    insertConetent(req.title, req.content, req.author, req.category, req.image);
    return c.text("Blog is posted");
  } catch (error) {
    console.error("querry is not listed or created", error);
    return c.text("Failed to connect to database", 500);
  } finally {
    client.release();
  }
});

app.notFound((c) => {
  return c.text("Error:404 ", 404);
});

serve(app);
console.log(`Server is running on port 3000 http://localhost:3000`);
