// netlify/functions/server.js
const express = require('express');
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/index', express.static(__dirname + '/src'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.use('/', router);

module.exports.handler = serverless(app);