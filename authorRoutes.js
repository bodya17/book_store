const express = require('express');
const router = express.Router();
const Book = require('./models/Book');

router.get('/', function(req, res) {
    const pipeline = [];
    pipeline.push( { $unwind: '$authors' } );
    pipeline.push( { $project: { authors : 1 } } );

    Book.aggregate(pipeline, (err, result) => {
        res.send(result.map(result => result.authors));
    })
});

module.exports = router;