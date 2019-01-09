import { SwaggerRouter } from 'koa-swagger-decorator';

const apiRouter = new SwaggerRouter();

apiRouter.swagger({
  title: 'Example Server',
  description: 'API DOC',
  version: '1.0.0',
  prefix: '/api',
  swaggerHtmlEndpoint: '/swagger-html',
  swaggerJsonEndpoint: '/swagger-json',
  swaggerConfiguration: {
    display: {
      defaultModelsExpandDepth: 4,
      defaultModelExpandDepth: 3,
      docExpansion: 'list',
      defaultModelRendering: 'model',
    },
  },
});

apiRouter.mapDir(__dirname, {
  recursive: true,
});

export default apiRouter;
