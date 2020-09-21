const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const { sendEmail } = require('./src/services/emailService');
const { renderProjects } = require('./src/services/renderPages');

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

.get('/projects', renderProjects )

.get('/contact', (req, res) => {
    res.render('contact.html');
})

.get('/success-contact', (req, res) => {
    res.render('success-contact.html');
})

.post('/contact/sendEmail', sendEmail)

.listen(process.env.PORT || '5200');