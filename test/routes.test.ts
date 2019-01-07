import * as request from 'supertest';
import pendingServer from '../src/api';

let server: any;
afterEach(() => {
  server.close();
});

beforeEach(async () => {
  server = await pendingServer;
});

describe('GET /', () => {
  it('should render frontend landing page of the app', async () => {
    await request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .then(function(res) {
        expect(res.text).toContain('Hello World');
      });
  });
});

describe('GET /api', () => {
  it('should render application name and version', async () => {
    await request(server)
      .get('/api')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(server)
      .get('/404')
      .expect(404);
    await request(server)
      .get('/notfound')
      .expect(404);
  });
});
