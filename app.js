const fs = require('fs');
const express = require('express');
const router = require('./routes/router');
const app = express();
const PORT = 3500;

let userData = require('./db/userData.json');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(router);

app.set('view engine', 'ejs');

app.post('/login', (req, res) => {
    const {username, password}  = req.body
    for (var i = 0; i < userData.length; i++) {
        if(username === userData[i].username && password === userData[i].password) {
            console.log(`${userData[i].username} successfully logged in`);
            res.redirect(`/game?name=${userData[i].username}`);
            return;
        } 
    }
    console.log(`${req.body.username} failed to log in`);
    res.render('login');
});

app.post('/register', (req, res) => {
    const {username, password} = req.body;
    const id = userData[userData.length - 1].id + 1;
    const register = {id, username, password};
    userData.push(register);
    userData = JSON.stringify(userData, null, 4);
    fs.writeFileSync('./db/userData.json', userData, 'utf-8');
    console.log(`${userData.username} was created`);
    res.render('login');
});

app.get('/api/userData', (req, res) => {
    res.status(200).json(userData);
});

app.get('/internalError', (req, res) => {
    internalError;
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('500');
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => console.log(`The server has started at http://localhost:${PORT}`));