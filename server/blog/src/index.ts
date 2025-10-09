import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { prettyJSON } from 'hono/pretty-json';
import { cardAdd, getCard, selectBlog } from './models/blogCard.js';

const app = new Hono({ strict: false });
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(prettyJSON());

app.get('api/get', async (c) => {
    const result = await getCard();
    return c.json(result);
});

app.get('/api/select', async (c) => {
    const postId = Number(c.req.query('postId'));
    console.log(postId);
    const result = await selectBlog(postId);
    console.log(result);
    return c.json(result);
});

app.post('/post', async (c) => {
    const { Title, Content, Image_URL, Tags, Reading_Time } = await c.req.json();
    const result = cardAdd(Title, Content, Image_URL, Tags, Reading_Time);
    return c.json(result);
});

app.post('/test', async (c) => {
    const body = await c.req.text();
    return c.text(`Received body: ${body}`);
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
