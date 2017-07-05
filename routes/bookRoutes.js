const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController'); 

router.get('', function(req, res, next) {
    res.render('new-book');
});

router.post('/', bookController.createBook);

router.get('/allbooks', bookController.listBooks);

module.exports = router;