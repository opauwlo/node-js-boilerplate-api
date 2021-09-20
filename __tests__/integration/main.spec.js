/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/config/server.config');

describe('Teste my app server', () => {
  it('shold get hello route and send a hello', async () => {
    const res = await request(app).get('/hello');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });

  it('shold get home route and send a welcome message', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
