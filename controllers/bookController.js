const bookService = require('../services/bookService'),
    Author = require('../models/Author');

exports.list = (req, res) => {
    bookService.getAllBooks()
        .then(books => res.send(books))
        .catch(err => console.log(err));
};

exports.getBookByID = (req, res) => {
    const { id } = req.params
    bookService.getBookByID(id)
        .then(books => res.send(books))
        .catch(err => console.log(err));
};

exports.create = async (req, res) => {
    bookService.create(req.body)
        .then(book => res.send(book))
        .catch(err => console.log(err));
};

exports.form = async (req, res) => {
    const authors = await Author.find({});
    res.render('new-book', { authors });
};
