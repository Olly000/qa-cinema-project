const express = require('express');
const mongoose = require('mongoose');

const port = 3032;

const app = express();


app.use(JSON.stringify());

app.use((req, res, next) => {
    const logEntry = `host: ${req.host},
    ip: ${req.ip},
    path: ${req.path}`;
    console.log(logEntry);
    next();
})

app.use("/payment", require('./routes/payment/payment'));

app.use((err, req, res, next) => {
    console.log("Error path");
    next(err);
})

const server = app.listen(port,() => {
    console.log(`server started listening on port ${server.address().port}`);
})