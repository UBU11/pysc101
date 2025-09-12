import { serve } from "@hono/node-server";
import "dotenv/config";
import { Hono } from "hono";
import client from "./DB/db.js";
import { createTable, getData,insertData } from "./DB/user.model.js";

const app = new Hono({
  strict: false,
})

app.get("/home", async (c) => {
  try {
    createTable()
    insertData("user","email@1234","password123")
    getData()


      return c.text("Sql")

  } catch (error) {
    console.error("Database query failed:", error);
    return c.text("Failed to connect to database", 500);
  } finally {
    client.release();
  }
});

app.notFound((c) => {
  return c.text("Error:404 ", 404);
});




serve(app)
console.log(`Server is running on port 3000 http://localhost:3000/home`)


