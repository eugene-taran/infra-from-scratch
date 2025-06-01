import request from 'supertest'
import {createExpressServer} from "../createExpressServer"
import * as http from "node:http"

describe('GET /api/events', () => {

    const app = createExpressServer()
    let server: http.Server | undefined

    beforeAll(() => {
       server = app.listen()
    })

    afterAll(() => {
        server?.close()
    })

    it('should return a list of events', async () => {
        const res = await request(app).get('/api/events')
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.body.length).toBeGreaterThan(0)
        expect(res.body[0]).toHaveProperty('id')
    })
})