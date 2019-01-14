import {
  request,
  summary,
  body,
  tags,
  middlewares,
  path,
  description,
} from 'koa-swagger-decorator';

const tag = tags(['User']);
const userSchema = {
  username: { type: 'string', required: true },
  password: { type: 'string', required: true },
};
const logTime = () => async (ctx, next) => {
  console.log(`start: ${new Date()}`);
  await next();
  console.log(`end: ${new Date()}`);
};

export default class User {
  @request('POST', '/user/register')
  @summary('Register user')
  @description('Sample API')
  @tag
  @middlewares([logTime()])
  @body(userSchema)
  static async register(ctx) {
    const { username } = ctx.validatedBody;
    const user = { username };
    ctx.body = { user };
  }

  @request('post', '/user/login')
  @summary('User login. The password is 123456')
  @tag
  @body(userSchema)
  static async login(ctx) {
    const { username, password } = ctx.validatedBody;
    if (password !== '123456') throw new Error('Wrong password!');
    const user = { username };
    ctx.body = { user };
  }

  @request('get', '/user')
  @summary('User list')
  @tag
  static async getAll(ctx) {
    const users = [{ username: 'foo' }, { username: 'bar' }];
    ctx.body = { users };
  }

  @request('get', '/user/{id}')
  @summary('Get user by ID')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async getOne(ctx) {
    const { id } = ctx.validatedParams;
    console.log('ID: ', id);
    const user = { username: 'foo' };
    ctx.body = { user };
  }

  @request('DELETE', '/user/{id}')
  @summary('Delete user by id')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async deleteOne(ctx) {
    const { id } = ctx.validatedParams;
    console.log('ID: ', id);
    ctx.body = { msg: 'Success!' };
  }
}
