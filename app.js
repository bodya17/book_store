const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

mongoose.connect('mongodb://localhost:27017/book_store');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/book', bookRoutes);
app.use('/authors', authorRoutes);

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});