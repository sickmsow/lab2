const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



// app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});