const Author = require('../models/Author');

exports.getAuthorByName = name => {
    return Author.find({ firstName: name }).exec().then(result => Author.populate(result, { path: 'books' }));
};

exports.getAuthors = () => {
    return Author.find({}).exec().then(result => Author.populate(result, { path: 'books' }));
};
