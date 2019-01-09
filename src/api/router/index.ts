import * as Router from 'koa-router';
import swaggerRouter from './swaggerRouter';

const router = new Router();
router.use('/api', swaggerRouter.routes());

export default router;
