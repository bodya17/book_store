const bookController = require('../controllers/bookController');

const bookRouter = router => {
    router.route('/books/')
        .get(bookController.form)
        .post(bookController.create);
    router.get('/books/allbooks', bookController.list);
};

module.exports = bookRouter;
