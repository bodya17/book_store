const Book = require('../models/Book'),
    Author = require('../models/Author');

exports.list = (req, res) => {
   Book.find({}, 'name authors -_id').exec()
    .then(result => Book.populate(result, { path: 'authors', select: 'firstName lastName -_id' }))
    .then(authors => res.send(authors))
    .catch(err => console.log(err));
};

exports.getBookByID = (req, res) => {
    const { id } = req.params
    Book.find({ _id: id }).exec()
        .then(books => res.send(books))
        .catch(err => console.log(err));
};

exports.create = (req, res) => {
    console.log(req.body);
    if (!req.body.name
        || !req.body.authors
        || !req.body.ISBN
        || !req.body.year
        || !req.body.price) { // no validation there
            res
                .status(400)
                .send(`Book must have next properties: 
                    authors, ISBN, year, price
                `) // all responces should have the same signature
        } else {
            const book = new Book(req.body);
            book.save(); // good practice - return what was created as response
            res.redirect('/book/allbooks');
        }
}

exports.form = async (req, res) => {
    const authors = await Author.find({});
    res.render('new-book', { authors });
};
