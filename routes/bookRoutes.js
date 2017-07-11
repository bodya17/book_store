const express = require('express'); // 1 time const is enough
const router = express.Router();
// no blank lines should be here
const bookController = require('../controllers/bookController'); 

router.get('', function(req, res, next) { // next - unused
    res.render('new-book', {authors: ['a', 'b']});
});

router.post('/', bookController.createBook); // diff signature lines 6 and 10  , "create" is enough

router.get('/allbooks', bookController.listBooks);  // "/books" - means all books , listBooks - "list" is enough

module.exports = router;
