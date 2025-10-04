import {config} from "./config"
import {Pool} from "pg"


const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl:true
})

export const client = await pool.connect()

