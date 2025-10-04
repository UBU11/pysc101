import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import  {blogcCard}  from "./models/blogCard.js";



const app = new Hono()

app.get('/', (c) => {
  blogcCard()
  return c.text('Hello Hono!')

})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
