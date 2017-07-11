const express = require('express'),
    router = express.Router(),
    bookController = require('../controllers/bookController');

router.get('/', bookController.form);

router.post('/', bookController.create);

router.get('/allbooks', bookController.list);
module.exports = router;
