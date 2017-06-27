const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Author = require('../models/Author');

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
        .populate({
            path: 'authors',
            select: 'firstName lastName -_id'
        })
        .exec((err, result) => {
            if (err) {
                console.log('Error');
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

module.exports = router;