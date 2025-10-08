import { client } from '../config/db.js';

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
        console.log('Table created successfully:', result);
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        client.release();

    }
};

const cardAdd = async (
    Title: string,
    Content: string,
    Image_URL: string,
    Tags: string[],
    Reading_Time: string,
) => {
    try {
        const insertQuery = `
       INSERT INTO Post_Card (Title, Content, Image_URL, Tags, Reading_Time)
       VALUES ($1, $2, $3, $4, $5) `;
        const values = [Title, Content, Image_URL, Tags, Reading_Time];
        const result = await client.query(insertQuery, values);
        console.log('Card added successfully:', result);
        return true;
    } catch (error) {
        console.error('Error adding card:', error);
        return false;
    } finally {
        client.release();
    }
};


const selectBlog = async (postId: number) =>{
    const query = ` Select * from Post_Card where post_id = $1`;
    const value = [postId];
    const result = await client.query(query,value);
    console.log('Blog selected successfully:', result.rows[0]);
    return result.rows[0];
}

export { blogcCard, cardAdd, selectBlog};
