const bookController = require('../controllers/bookController'),
    expressJoi = require('express-joi');

const createBookSchema = {
    name: expressJoi.Joi.types.string(),
    authors: expressJoi.Joi.types.string(),
    ISBN: expressJoi.Joi.types.string(),
    year: expressJoi.Joi.types.number().min(1900).max(2017),
    price: expressJoi.Joi.types.number().min(0),
    pages: expressJoi.Joi.types.number(),
    copies: expressJoi.Joi.types.number(),
    currency: expressJoi.Joi.types.string()
};

const bookRouter = router => {
    router.route('/books/')
        .get(bookController.form)
        .post(expressJoi.joiValidate(createBookSchema), bookController.create);
    router.get('/books/allbooks', bookController.list);
    router.get('/books/:id', bookController.getBookByID);
};

module.exports = bookRouter;
