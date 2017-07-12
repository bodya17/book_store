const authorService = require('../services/authorService');

exports.getAuthors = (req, res) => {
    authorService.getAuthors()
        .then(authors => res.send(authors))
        .catch(err => console.error(err));
};

exports.getAuthorByName = (req, res) => {
    const { name } = req.params;
    authorService.getAuthorByName(name)
        .then(authors => res.send(authors))
        .catch(err => console.error(err));
};
