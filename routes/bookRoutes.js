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

router.get('/average', function(req, res) {
    const start = Date.now();
    Book
        .aggregate({ $group: { _id: null, average: {$avg: '$pages'}} })
        .exec((err, result) => {
            if (err) {
                console.log('Error');
                res.send(err);
            }
            else {
                console.log(result);
                const end = Date.now();
                res.send(Object.assign({}, result[0], {time: (end - start) / 1000 + 'sec'}));
            }
        })
});

router.get('/allbooks', function(req, res) {
    const start = Date.now();
    Book
        // .find({$where: 'this.authors.length >= 1'})
        .find({'authors.1': {$exists: true}}, {name: 1, _id: 0, authors: 1})
        // .populate({
        //     path: 'authors',
        //     select: 'firstName lastName -_id'
        // })
        .exec((err, result) => {
            if (err) {
                console.log('Error');
                console.log(err);
            } else {
                Book
                    .populate(result, { path: 'authors', select: 'firstName lastName -_id' }, (err, result1) => {
                        const end = Date.now();
                        console.log((end - start) / 1000, 'sec');
                        res.send(result1);
                    })
            }
        });
});

module.exports = router;