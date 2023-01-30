const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const corporatesRoutes = require('./api/routes/corporates');
const instituteRoutes = require('./api/routes/institute');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Request-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
        return res.status(200).json({});
    }
    next();
});

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