import { client } from '../config/db.js';

const CategoryTable = async () => {
    try {
        const creatTable = `CREATE TABLE IF NOT EXISTS categories (
      category_id SERIAL PRIMARY KEY,
      category_name VARCHAR(255) NOT NULL,
      Category_items INTEGER NOT NULL,
      CreatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      UpdatedAt TIMESTAMPTZ DEFUALT CURRENT_TIMESTAMP
    )`;

        const result = await client.query(creatTable);
        console.log('Categories table created successfully:', result);
    } catch (error) {
        console.error('Error creating categories table:', error);
    } finally {
        client.release();
    }
};

const addCategory = async (category_name: string, Category_items: number) => {
    try {
        const insertQuery = `INSERT INTO categories (category_name,Category_items) VALUES ($1,$2)`;
        const values = [category_name, Category_items];
        const result = await client.query(insertQuery, values);
        console.log('Category added successfully:', result);
    } catch (error) {
        console.error('Error adding category:', error);
    } finally {
        client.release();
    }
};


 export { CategoryTable, addCategory };
