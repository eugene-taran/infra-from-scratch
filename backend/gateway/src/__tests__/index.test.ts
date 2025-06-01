import request from 'supertest'
import app, { start, stop } from '../index'

describe('GET /api/events', () => {

    beforeAll(() => {
        start()
    })

    afterAll(() => {
        stop()
    })

    it('should return a list of events', async () => {
        const res = await request(app).get('/api/events')
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.body.length).toBeGreaterThan(0)
        expect(res.body[0]).toHaveProperty('id')
    })
})