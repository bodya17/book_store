const Author = require('../models/Author');
const authorsData = require('../AUTHORS');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_store');

authorsData.forEach(data => {
    const author = new Author(data);
    author.save();
});

mongoose.disconnect();
// console.log(authorsData.length);