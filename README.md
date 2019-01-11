# NodeJS Starter Kit powered by Next & Koa

[NextJS](https://nextjs.org) provides the fastest and performant way to build server rendered React pages from NodeJS. [Koa](https://koajs.com) is a beautiful library from the authors of ExpressJS to build APIs in NodeJS through promises and clean design. 

It also builds on top of both and adds support for:
- Type checking with [Typescript](https://www.typescriptlang.org/)
- Testing with [Jest](https://facebook.github.io/jest/)
- Full Swagger Docs generation through [Koa Swagger Decorators](https://github.com/Cody2333/koa-swagger-decorator)
- Auto reloading support through [nodemon](https://nodemon.io/)
- Environment Variable management through [dotenv](https://www.npmjs.com/package/dotenv)
- JavaScript auto formatting through [Prettier](https://prettier.io)
- CircleCI build config for running tests in CI


## Setup
Install the following toolchain:
- NodeJS
- Yarn
- Jest

## Getting started

```sh
# Clone the project
git clone git@github.com:murcul/starter-rest-api.git
cd starter-rest-api

# Install dependencies
yarn
```

Then you can begin development:

```sh
npm run build
npm run start
```

This will launch a [nodemon](https://nodemon.io/) process for automatic server restarts when your code changes.

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/). This project also uses [supertest](https://github.com/visionmedia/supertest) for demonstrating a simple routing smoke test suite. Feel free to remove supertest entirely if you don't wish to use it.

Start the test runner in watch mode with:

```sh
npm test
```

You can also generate coverage with:

```sh
npm test --coverage
```

### Environmental variables in development

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables during development. Simply copy `.env.example`, rename it to `.env` and add your env vars as you see fit.

It is **strongly** recommended **never** to check in your .env file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution. `dotenv` is only for development.

### Deployment

Deployment is specific to hosting platform/provider but generally:

```sh
npm run build
```

will compile your src into `/dist`, and

```sh
npm start
```

will start the compiled application from the `/dist` folder.

### Documentation

Available at ```http://localhost:8099/doc```

## License
MIT License. See the [LICENSE](LICENSE) file.


Made with <3 at [Murcul](https://www.murcul.com)
