import * as dotenv from 'dotenv';
import * as next from 'next';
import * as Router from 'koa-router';
import routes from './routes';
import server from './app';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();

dotenv.config();

const PORT: number = parseInt(<string>process.env['PORT'], 10) || 8099;

export default app.prepare().then(() => {
  const router = new Router();

  router.use('/api', routes.routes());

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  return server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
