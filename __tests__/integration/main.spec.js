/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/configs/server.config');

describe('Teste my app server', () => {
  // Delete router test
  it('shold show DELETE route and send a welcome', async () => {
    const res = await request(app).delete('/api/delete');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'welcome to s\'ipa DELETE ROUTER' });
  });

  // Get router test
  it('shold show GET route and send a welcome', async () => {
    const res = await request(app).get('/api/get');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'welcome to s\'ipa GET ROUTER' });
  });

  // Post router test
  it('shold show POST route and send a welcome', async () => {
    const res = await request(app).post('/api/post');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'welcome to s\'ipa POST ROUTER' });
  });

  // Put router test
  it('shold show PUT route and send a welcome', async () => {
    const res = await request(app).put('/api/put');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'welcome to s\'ipa PUT ROUTER' });
  });
});
