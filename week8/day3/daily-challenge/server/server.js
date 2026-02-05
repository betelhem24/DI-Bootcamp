const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
    console.log('Received POST request body:', req.body);
    const inputValue = req.body.value;
    res.send(`I received your POST request. This is what you sent me: ${inputValue}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
