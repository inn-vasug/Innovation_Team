const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const corporatesRoutes = require('./api/routes/corporates');
const instituteRoutes = require('./api/routes/institute');

app.use(morgan('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/corporates', corporatesRoutes);
app.use('/institute', instituteRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
});

module.exports = app;