import * as Router from 'koa-router';
import swaggerRouter from './swaggerRouter';

const router = new Router();
router.use('/doc', swaggerRouter.routes());

export default router;
