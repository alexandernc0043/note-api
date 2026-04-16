import { jest } from '@jest/globals';
jest.mock('../src/config/db.js', () => ({
  default: {
    note: {
      findMany: jest
        .fn()
        .mockResolvedValue([
          { id: 1, title: 'Test note', content: 'Test content' },
        ]),
      create: jest
        .fn()
        .mockResolvedValue({ id: 2, title: 'Note Test', content: 'abcdef' }),
    },
  },
}));
import request from 'supertest';
import app from '../src/app.js';
import { agent } from 'supertest';
const api = agent(app);
describe('Get all Notes', () => {
  it('GET /notes should return an array of notes', async () => {
    const res = await api.get('/notes');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          content: expect.any(String),
        }),
      ]),
    );
  });
});
describe('Create a Notes', () => {
  it('POST /notes should return a note', async () => {
    const res = await api
      .post('/notes')
      .send({ title: 'Note Test', content: 'abcdef' })
      .set({ 'Content-Type': 'application/json' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        content: expect.any(String),
      }),
    );
  });
});
