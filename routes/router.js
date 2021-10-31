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
    res.render('game');
});

router.get('/internalError', (req, res) => {
    internalError;
});

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('500');
});

router.use((req, res) => {
    res.status(404).render('404');
});

module.exports = router;