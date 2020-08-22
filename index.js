const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    noCache:true
});


server

.use(express.urlencoded({ extended: true}))

.use(express.static('public'))

.get('/', (req, res) => {
    res.render('home.html');
})

.get('/home', (req, res) => {
    res.render('home.html');
})

.get('/organization', (req, res) => {
    res.render('organization.html');
})

.get('/projects', (req, res) => {
    res.render('projects.html');
})

.get('/contact', (req, res) => {
    res.render('contact.html');
})

.listen(process.env.PORT || '5200');