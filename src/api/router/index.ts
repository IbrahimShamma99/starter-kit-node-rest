import * as Router from 'koa-router';
import apiRouter from './apiRouter';

const router = new Router();
router.use('/api', apiRouter.routes());

export default router;
