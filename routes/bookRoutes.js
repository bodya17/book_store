const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('', function(req, res, next) {
    res.render('new-book');
});

router.post('/', function(req, res, next) {
    console.log(req.body);
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
            // res.redirect('allbooks');
        }
});

router.get('/allbooks', function(req, res) {
    Book
        .find({})
        .populate('authors')
        .exec((err, books) => {
            if (err) {
                res.send(err);
            } else {
                res.send(books);
            }
        });
});


module.exports = router;