const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String },
    dob: { type: Date },
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;