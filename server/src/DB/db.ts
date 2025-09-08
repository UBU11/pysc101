import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config({path:"../../.env"})


  const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:true
})

   try {
  await pool.connect()
  console.log("connected")

} catch (error) {
  if (error instanceof AggregateError){
    console.log("multiple error occured")
    for(const errors in error.errors){
      console.log(errors)
      process.exit(0);
    }
  }
  console.log(error)
  process.exit(0);
}


