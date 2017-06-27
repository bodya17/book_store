const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Author = require('../models/Author');

router.get('/', function(req, res) {
    Author
        .find({}, (err, result) => {
            Author.populate(result, { path: 'books' }, (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        });
});

router.get('/:name', function(req, res) {
    const name = req.params.name;
    Author
        .find({ firstName: name }, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                Author.populate(result, { path: 'books' }, (err, result) => {
                    res.send(result);
                });
                // res.send(result);
            }
        });
});

module.exports = router;