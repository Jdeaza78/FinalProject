const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let messages = [];

// Get route to fetch messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Post route to add a new message
app.post('/messages', (req, res) => {
    const message = req.body.message;
    if (message) {
        messages.push(message);
        res.status(201).json({ message: 'Message added successfully!' });
    } else {
        res.status(400).json({ error: 'Message cannot be empty' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
