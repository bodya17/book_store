const express = require('express'),
    router = express.Router();

const authorController = require('../controllers/authorController');

router.get('/', authorController.getAuthors);

router.get('/:name', authorController.getAuthorByName);

module.exports = router;
