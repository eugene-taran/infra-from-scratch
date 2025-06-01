import express from "express"

export const createExpressServer = () => {
    const app = express()

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

    return app
}