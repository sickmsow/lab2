const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
