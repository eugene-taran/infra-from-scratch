import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

type Concert = {
    id: string;
    artist: string;
    date: string;    // ISO date string
    venue: string;
    city: string;
};

const concerts: Concert[] = [
    {
        id: '1',
        artist: 'Coldplay',
        date: '2024-08-12',
        venue: 'Wembley Stadium',
        city: 'London'
    },
    {
        id: '2',
        artist: 'Taylor Swift',
        date: '2024-09-01',
        venue: 'Madison Square Garden',
        city: 'New York'
    },
    {
        id: '3',
        artist: 'Rammstein',
        date: '2024-07-15',
        venue: 'Olympiastadion',
        city: 'Berlin'
    }
];

// reroute to /api/concerts as root endpoint for now
app.get('/', (_req, res) => {
    res.redirect('/api/concerts');
});

app.get('/api/concerts', (_req, res) => {
    res.json(concerts);
});

app.listen(port, () => {
    console.log(`Gateway service running at http://localhost:${port}`);
});