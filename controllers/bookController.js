const Book = require('../models/Book');

exports.listBooks = (req, res, next) => {
   Book
        .find({}, 'name authors -_id')
        .exec((err, result) => {
            if (err) { return next(err); } 
            Book
                .populate(result, { path: 'authors', select: 'firstName lastName -_id' }, (err, result) => {
                    res.send(result);
                });
        });
};

exports.createBook = (req, res, next) => {
    if (!req.body.name
        || !req.body.authors
        || !req.body.ISBN
        || !req.body.year
        || !req.body.price) {
            res
                .status(400)
                .send(`Book must have next properties:
                    authors, ISBN, year, price
                `)
        } else {
            const book = new Book(req.body);
            book.save();
            res.redirect('/book/allbooks');
        }
}