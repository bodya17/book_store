const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema({
    name: String,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Store', StoreSchema);
