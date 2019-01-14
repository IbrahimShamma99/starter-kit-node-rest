import { SwaggerRouter } from 'koa-swagger-decorator';

// Routes
import User from './routes/user';

const apiRouter = new SwaggerRouter();

apiRouter.swagger({
  title: 'Sample Server',
  description: 'API doc',
  version: '1.0.0',
  prefix: '/api',
  swaggerConfiguration: {
    display: {
      defaultModelRendering: 'model',
      defaultModelExpandDepth: 4,
      defaultModelsExpandDepth: 4,
      docExpansion: 'list',
    },
  },
  swaggerHtmlEndpoint: '/doc',
  swaggerJsonEndpoint: '/',
});

// Adding routes
apiRouter.map(User, {});

export default apiRouter;
