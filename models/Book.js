const mongoose = require('mongoose'),
    Author = require('./Author');

const bookSchema = mongoose.Schema({
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    name: { type: String, required: true },
    pages: { type: Number },
    ISBN: { type: String, required: true },
    year: { type: Number, required: true },
    copies: { type: Number, default: 1 },
    price: { type: Number, default: 20 },
    currency: { type: String, default: 'United States dollar' },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
