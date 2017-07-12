require('dotenv').config();

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    routes = require('./routes');

mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;

const app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});

// in config add configs for test db, in pakage json setup env to tests (mocha, supertest, chai)
