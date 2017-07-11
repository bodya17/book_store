const Book = require('../models/Book');

exports.listBooks = (req, res, next) => { // next - is never  used (row 7 dont count)
   Book
        .find({}, 'name authors -_id') //  
        .exec((err, result) => {
            if (err) { return next(err); } // next(err) ? WTF? 
            Book
                .populate(result, { path: 'authors', select: 'firstName lastName -_id' }, (err, result) => { // is it posible to combine this and 5 row?
                    res.send(result);
                });
        });
};

exports.createBook = (req, res, next) => { // next - is never  used
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
