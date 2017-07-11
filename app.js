const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
// no blank line here
const bookRoutes = require('./routes/bookRoutes');  // import only one main (index) router and use it
const authorRoutes = require('./routes/authorRoutes');

mongoose.connect('mongodb://localhost:27017/book_store'); // move this to config file (create it)

const app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/book', bookRoutes);
app.use('/authors', authorRoutes);

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});

// in config add configs for test db, in pakage json setup env to tests (mocha, supertest, chai)
