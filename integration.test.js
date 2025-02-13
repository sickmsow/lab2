const request = require('supertest');
const app = require('./app');

describe('API Integration Tests', () => {
    test('GET /api/greeting returns correct message', async () => {
        const response = await request(app)
            .get('/api/greeting');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello from the backend!');
    });
});