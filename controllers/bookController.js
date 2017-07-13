const bookService = require('../services/bookService'),
    Author = require('../models/Author'),
    Book = require('../models/Book');

exports.list = (req, res) => {
    bookService.getAllBooks()
        .then(books => res.send(books))
        .catch(err => console.log(err));
};

exports.getBookByID = (req, res) => {
    const { id } = req.params;
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

exports.chart = async (req, res) => {
    const { field } = req.params;
    const books = await Book.find({}, `name ${field} -_id`);
    res.render('barChartBookPages', {
        cats: books.map(b => b.name),
        data: books.map(b => b[field])
    });
};
