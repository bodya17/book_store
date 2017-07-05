const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Author = require('../models/Author');

const authorController = require('../controllers/authorController'); 

router.get('/', authorController.getAuthors);

router.get('/:name', authorController.getAuthorByName);

module.exports = router;