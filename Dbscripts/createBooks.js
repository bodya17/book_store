const Book = require('../models/Book');
// const booksData = require('../BOOKS');
const random = require('lodash.random');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_store');

const booksData = [];
const namePhrases = ['JavaScript', 'Node.js', 'Express', 'Guide', 'Tutorial', 'Mongoose'];

for (let i = 0; i < 50000; i++) {
    const book = new Book({
        name: Math.random().toString(36).substr(2, 9) + ` ${namePhrases[random(namePhrases.length - 1)]}`,
        pages: random(1000),
        year: random(1930, 2017),
        ISBN: [...new Array(13)].map(() => random(9)).join('')
    });
    book.save();
}

// for (let i = 0; i < 10000; i++) {
//     booksData.push({
//         name: Math.random().toString(36).substr(2, 9) + ` ${namePhrases[random(namePhrases.length - 1)]}`,
//         pages: random(1000),
//         year: random(1930, 2017),
//         ISBN: [...new Array(13)].map(() => random(9)).join('')
//     })
// }

// booksData.forEach(data => {
//     const book = new Book(data);
//     book.save();
// });

mongoose.disconnect();
// console.log(authorsData.length);