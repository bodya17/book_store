const express = require('express'); // 1 time const is enough
const router = express.Router();
// no blank lines should be here
const bookController = require('../controllers/bookController'); 

router.get('/', bookController.form);

router.post('/', bookController.create); // diff signature lines 6 and 10  , "create" is enough

router.get('/allbooks', bookController.list);  // "/books" - means all books , listBooks - "list" is enough

module.exports = router;
