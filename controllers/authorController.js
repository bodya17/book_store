const Author = require('../models/Author');

exports.getAuthors = (req, res) => {
    Author.find({}).exec()
        .then(result => Author.populate(result, { path: 'books' }))
        .then(populated => res.send(populated))
        .catch(err => console.error(err));
};

exports.getAuthorByName = (req, res) => {
    const name = req.params.name;
    Author.find({ firstName: name }).exec()
        .then(result => Author.populate(result, { path: 'books' }))
        .then(populated => res.send(populated))
        .catch(err => console.error(err));
};
