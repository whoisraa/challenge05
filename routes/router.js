const express = require('express');
const morgan = require('morgan');
const router = express.Router();

router.use(morgan('dev'));

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/game', (req, res) => {
    const name = req.query.name || 'PLAYER 1';
    res.render('game', {name});
});

module.exports = router;