const express = require('express');
const router = express.Router();
const Book = require('./models/Book');

router.get('', function(req, res, next) {
    if (req.query.year) {
        Book.find({ year : req.query.year }, (err, result) => {
            res.send(result);
        });
    } else {
        next();
    }

});

router.get('', function(req, res, next) {
    Book.find((err, books) => {
        res.send(books);
    });
});


module.exports = router;