const Author = require('../models/Author'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_store');


function randomDate (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

for (let i = 0; i < 50000; i++) {
    const author = new Author({
        firstName: Math.random().toString(36).substr(2, 9),
        lastName: Math.random().toString(36).substr(2, 9),
        bio: Math.random().toString(36).substr(2, 9),
        dob: randomDate(new Date(2012, 0, 1), new Date(2012, 0, 1))
    });
    author.save();
}

mongoose.disconnect();
