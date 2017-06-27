const mongoose = require('mongoose');
const Book = require('./Book');

const authorSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String },
    dob: { type: Date },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;