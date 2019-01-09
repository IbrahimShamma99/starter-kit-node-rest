import { SwaggerRouter } from 'koa-swagger-decorator';

const swaggerRouter = new SwaggerRouter();

swaggerRouter.swagger({
  title: 'Example Server',
  description: 'API DOC',
  version: '1.0.0',
  prefix: '/doc',
  swaggerHtmlEndpoint: '/',
  swaggerConfiguration: {
    display: {
      defaultModelsExpandDepth: 4,
      defaultModelExpandDepth: 3,
      docExpansion: 'list',
      defaultModelRendering: 'model',
    },
  },
});

swaggerRouter.mapDir(__dirname, {
  recursive: true,
});

export default swaggerRouter;
