const request = require('supertest');
const app = require('./app');

describe('API Integration Tests', () => {
    test('GET /api/greeting returns correct message', async () => {
        const response = await request(app)
            .get('http://localhost:3000/api/greeting');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello from the backend!');
    });
});