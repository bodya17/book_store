const express = require('express');
const bookRoutes = require("./bookRoutes");
const authorRoutes = require("./authorRoutes");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_store');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/book', bookRoutes);
app.use('/authors', authorRoutes);

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});
