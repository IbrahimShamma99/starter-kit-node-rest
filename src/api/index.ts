import * as dotenv from 'dotenv';
import * as next from 'next';
import * as Router from 'koa-router';
import server from './app';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handleRequest = app.getRequestHandler();

dotenv.config();

const PORT: number = parseInt(<string>process.env['PORT'], 10) || 8099;

export default app.prepare().then(() => {
  const router = new Router();

  router.get('*', async ctx => {
    await handleRequest(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  return server.listen(PORT, () => {
    console.log(`> Ready at http://localhost:${PORT}`);
  });
});
