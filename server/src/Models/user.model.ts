import client from "../config/db.js";

async function createTable() {
  try {
    const result = await client.query(`
      create table if not exists Users(
      id serial primary key,
      username varchar(50) unique not null,
      email varchar(255) unique not null,
      password varchar(255) not null,
      created_at timestamp with time zone default current_timestamp
      );

      `);
  } catch (error) {
    console.error("Database query failed:", error);
  }
}

async function insertData(username: string, email: string, password: string) {
  try {
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion:", err);
  }
}

async function getData() {
  const res = await client.query("SELECT * FROM users");
  console.log(res);
  return res;
}
export { createTable, getData, insertData };
