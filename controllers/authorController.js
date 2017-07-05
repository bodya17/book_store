const Author = require('../models/Author');

exports.getAuthors = (req, res, next) => {
    Author
        .find({}, (err, result) => {
            Author.populate(result, { path: 'books' }, (err, result) => {
                if (err) { return next(err); } 
                res.send(result);
            });
        });
}

exports.getAuthorByName = (req, res, next) => {
    const name = req.params.name;
    Author
        .find({ firstName: name }, (err, result) => {
            if (err) { return next(err); }
            Author.populate(result, { path: 'books' }, (err, result) => {
                res.send(result);
            });
        });
}