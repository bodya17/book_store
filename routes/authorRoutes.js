const authorController = require('../controllers/authorController');

const authorRouter = router => {
    router.get('/author', authorController.getAuthors);
    router.get('/author/:name', authorController.getAuthorByName);
};

module.exports = authorRouter;
