import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { blogcCard, cardAdd } from './models/blogCard.js';
import { prettyJSON } from 'hono/pretty-json';

const app = new Hono({ strict: false });

app.use(prettyJSON());

app.get('/', (c) => {
    blogcCard();
    return c.text('Hello Hono!');
});

app.post('/post', async (c) => {
    const { Title, Content, Image_URL, Tags, Reading_Time } = await c.req.json();
    const result = cardAdd(Title, Content, Image_URL, Tags, Reading_Time);
    return c.text('Card added  succesfully');
});

serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
    },
);
