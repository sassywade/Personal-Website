const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome bbbb')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);
    const sgMail = require('@sendgrid/mail');

    sendGrid.setApiKey('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');
    const msg = {
        to: 'neelsaswade@gmail.com',
        from: req.body.email,
        subject: 'Message from personal website',
        text: req.body.message
    }
    sgMail.send(msg);
    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3030, '0.0.0.0');