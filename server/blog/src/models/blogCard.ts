import { client } from "../config/db.js";

const blogcCard = async () => {
 try {
   const query = `
     CREATE TABLE IF NOT EXISTS Post_Card(
       post_id SERIAL PRIMARY KEY  NOT NULL,
       Title VARCHAR(255) NOT NULL,
       Content VARCHAR NOT NULL,
       Image_URL VARCHAR NOT NULL,
       Tags VARCHAR[] NOT NULL,
       Reading_Time VARCHAR(255) NOT NULL,
       createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
       updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP

  ) `;

   const result = await client.query(query);
   console.log("Table created successfully:", result);
 } catch (error) {

  console.error("Error creating table:", error);

 }
};






export { blogcCard }
