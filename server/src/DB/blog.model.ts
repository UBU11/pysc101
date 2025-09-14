import client from "./db.js";

async function blogTable() {
  try {
    const result = client.query(
      `create table if not exists blog(
      id serial primary key,
      title varchar(255) not null,
      content text not null,
      author varchar(255) not null,
      category varchar(255) not null,
      image varchar(255) not null,
      created_at timestamp default current_timestamp,
      updated_at timestamp default current_timestamp   /* created_at timestamp with time zone default current_timezone,
      updated_at timestamp with time zone default current_timezone */
      )`
    );
  } catch (error) {
    console.error("Database query failed:", error);
  }
}

async function insertConetent(
  title: string,
  content: string,
  author: string,
  category: string,
  image: string
) {
  try {
    const insertQuery =
      "INSERT INTO blog (title, content, author, category, image) VALUES ($1, $2, $3, $4, $5)";
    const values = [title, content, author, category, image];
    const result = await client.query(insertQuery, values);
    console.log("Insertion success:", result);
  } catch (error) {
    console.error("Database query failed:", error);
  }
}

async function getBlogData() {
  try {
    const result = await client.query(`SELECT * from blog`);
    console.log(result);
  } catch (error) {
    console.error("Database query failed:", error);
  }
}

export { blogTable, insertConetent, getBlogData };
