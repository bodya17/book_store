const express = require('express');
const router = express.Router();
const Book = require('./models/Book');

router.get('/', function(req, res, next) {
    res.send('hi');
});

router.get('/books', function(req, res, next) {
    Book.find((err, books) => {
        res.send(books);
    });
});

module.exports = router;