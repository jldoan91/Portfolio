const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(favicon(__dirname + '/dist/favicon.ico'));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, "Josh Doan's resume.pdf"));
})

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL__USER,
        pass: process.env.GMAIL__PASS
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
})

app.post('/contact', function (req, res) {
    let mail = {
        from: req.body.email,
        to: process.env.TARGET__EMAIL,
        subject: 'New Message - Portfolio Contact Form',
        text: `From: ${req.body.name} \n Subject: ${req.body.subject} \n Message: ${req.body.message}`
    }
    transporter.sendMail(mail, (err, response) => {
        if (err) {
            res.json({ msg: 'fail' });
        } else {
            res.json({ msg: 'success' });
        }
    })
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);