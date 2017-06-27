const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Author = require('../models/Author');

router.get('/', function(req, res) {
    Author.aggregate({ $project: {_id: 0, __v: 0} }, (err, authors) => {
        res.send(authors);
    });
});

router.get('/:name', function(req, res) {
    const name = req.params.name;
    Book
        .aggregate({ $unwind: '$authors' } )
        .exec((err, books) => {
            if (err) {
                res.send(err);
            } else {
                Book.populate(books, { path: 'authors' }, (err, populatedBooks) => {
                    res.send(populatedBooks.filter(b => b.authors.firstName === name));
                });
            }
        });
});

module.exports = router;