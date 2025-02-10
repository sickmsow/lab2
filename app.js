const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(3000);
