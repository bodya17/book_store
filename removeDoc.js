const Author = require('./models/Author');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_store');

Author.remove({ firstName: 'David' }, function(err) {
    if (err) {
        console.log('Error');
        console.log(err);
    }
    mongoose.disconnect()
})