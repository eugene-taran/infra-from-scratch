import express from 'express'
import type {Server} from 'http'

const app = express()
const port = process.env.PORT || 3000

type Event = {
    id: string
    name: string
    date: string
    venue: string
    city: string
}

const events: Event[] = [
    {
        id: '1',
        name: 'Coldplay Concert',
        date: '2024-08-12',
        venue: 'Wembley Stadium',
        city: 'London'
    },
    {
        id: '2',
        name: 'Taylor Swift Concert',
        date: '2024-09-01',
        venue: 'Madison Square Garden',
        city: 'New York'
    },
    {
        id: '3',
        name: 'Rammstein Concert',
        date: '2024-07-15',
        venue: 'Olympiastadion',
        city: 'Berlin'
    }
]

app.get('/', (_req, res) => {
    res.redirect('/api/events')
})

app.get('/api/events', (_req, res) => {
    res.json(events)
})

let server: Server | undefined

export const start = () => {
    server = app.listen(port, () => {
        console.log(`Gateway service running at http://localhost:${port}`)
    })
}

export const stop = () => {
    server?.close(() => {

    })
}

export default app