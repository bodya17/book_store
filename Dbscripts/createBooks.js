const Book = require('../models/Book');
const booksData = require('../BOOKS');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_store');

booksData.forEach(data => {
    const book = new Book(data);
    book.save();
});

mongoose.disconnect();
// console.log(authorsData.length);