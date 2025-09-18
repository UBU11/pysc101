import client from "./db.js";

async function createCatgory() {
  try {
    const result = await client.query(`
      create table if not exist category(
      id serial primary key not null,
      categoryname varchar(255) not null,
      category_items varchar(255) not null,
      created_at timestamp default current_timestamp,
      updated_at  timestamp default current_timestamp
      )

      `);
    console.log("Table created successfully", result);
  } catch (error) {
    console.error("Database query failed:", error);
    return false;
  }
}

async function insertCategory(categoryname:string){
  try {
    const insertQUery = `insert into category (categoryname) values ($1)`;
    const values = [categoryname];
    const result =  await client.query(insertQUery,values)
    console.log("Category inserted successfully", result);
    return true;
  } catch (error) {
    console.error("Database query failed:", error);
    return false;
  }
}

async function getCategoryData() {
  try {
    const result = await client.query(`SELECT * from category`);
    console.log(result);
  } catch (error) {
    console.error("Database query failed:", error);
  }
}

export { createCatgory, insertCategory, getCategoryData };
