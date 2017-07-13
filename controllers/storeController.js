const Store = require('../models/Store'),
    Book = require('../models/Book');

exports.getStores = async (req, res) => {
    const stores = await Store.find({});
    res.send(stores);
};

const updateBook = async (bookID, storeID) => {
    const book = await Book.findByIdAndUpdate(
        bookID,
        { $push: { stores: storeID }},
        { new: true });
    
    console.log(book);
};

exports.createStore = async (req, res) => {
    const store = new Store(req.body);
    const newStore = await store.save();
    newStore.books.map(bookID => updateBook(bookID, newStore._id));
    res.send(store);
};
