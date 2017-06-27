const mongoose = require('mongoose');
const Author = require('../models/Author');
const Book = require('../models/Book');
const random = require('lodash.random');

mongoose.connect('mongodb://localhost:27017/book_store');

Book
    .find({}, (err, books) => {
        if (err) {
            console.log('Error');
            console.log(err);
        } else {
            Author
                .find({}, (err, authors) => {
                    const bookID = books[random(books.length)]._id;
                    // gen array of author ids 
                    const ids = [...new Array(random(200))].map(i => {
                        const authorId = authors[random(authors.length)]._id;
                        return authorId;
                    });
                    console.log(ids);
                    ids.forEach(id => Author.update(
                            { _id : mongoose.Schema.Types.ObjectId(id) },
                            { $push : {books : bookID}}
                        )
                    )
                })
            // console.log(result[0])
        }
    });