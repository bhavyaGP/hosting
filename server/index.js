const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const routes = require('./routes/test')

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

app.use('/', routes)
app.get('/', (req, res) => {
    res.send('OK');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});