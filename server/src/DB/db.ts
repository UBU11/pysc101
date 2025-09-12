import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config({path:"../../.env"})



    const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:true
  })


    const client = await pool.connect()
    console.log("PSQL is connected")


export default client;

