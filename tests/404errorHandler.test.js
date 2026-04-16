import request from 'supertest';
import app from '../src/app.js';

describe('404 error handling middleware', () => {
  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
  });
});
