import * as dotenv from 'dotenv';
import server from './app';
import apiRouter from './routes';
import * as Router from 'koa-router';

import * as next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();

dotenv.config();

const PORT: number = parseInt(<string>process.env['PORT'], 10) || 8099;

export default app.prepare().then(() => {
  const router = new Router();
  router.use('/api', apiRouter.routes());
  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
  server.use(router.routes());
  return server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
