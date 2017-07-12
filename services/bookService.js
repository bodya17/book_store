const Book = require('../models/Book');

exports.getAllBooks = () => {
    return Book.find({}, 'name authors -_id').exec()
        .then(result => Book.populate(result, { path: 'authors', select: 'firstName lastName -_id' }));
};

exports.getBookByID = id => Book.find({ _id: id }).exec();

exports.create = details => {
    const book = new Book(details);
    return book.save();
};
