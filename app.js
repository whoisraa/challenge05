const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3500;

app.use(express.static('public'));
app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/game', (req, res) => {
    res.render('game');
});

app.listen(PORT, () => console.log(`The server has started at http://localhost:${PORT}`));