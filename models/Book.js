const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    authors: { type: Array, required: true },
    name: { type: String, required: true },
    pages: { type: Number },
    ISBN: { type: String, required: true },
    year: { type: Number, required: true },
    copies: { type: Number, default: 1 },
    price: { type: Number, required: true },
    currency: { type: String, default: 'United States dollar' },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;