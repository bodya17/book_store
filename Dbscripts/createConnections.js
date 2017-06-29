const mongoose = require('mongoose');
const Author = require('../models/Author');
const Book = require('../models/Book');
const random = require('lodash.random');

mongoose.connect('mongodb://localhost:27017/book_store');
for (var i = 0; i < 100; i++) {
    Book.aggregate({ $sample: { size: 1 } }) // get one random book
    .exec((err, books) => {
        if (err) {
            console.log('Error');
            console.log(err);
        } else {
            Author.aggregate({ $sample: { size: random(200)} })
                .exec((err, authors) => {

                    const bookID = books[0]._id;
                    const ids = authors.map(author => {
                        return author._id;
                    })
                    // gen array of author ids 
                    // const ids = [...new Array(random(200))].map(i => {
                    //     const authorId = authors[random(authors.length-1)]._id;
                    //     return authorId;
                    // });
                    console.log(ids);
                    // console.log(typeof ids[0]);
                    ids.forEach(id => Author.update(
                            { _id : id },
                            { $push : {books : bookID}},
                            (err, affected) => {
                                if (err) { console.log(err); }
                                else {
                                    console.log('Affected: ', affected);
                                }
                            }
                        )
                    );
                    console.log('Book id:');
                    console.log(bookID);
                    Book.update(
                        { _id : bookID },
                        { authors : ids },
                        (err, affected) => {
                            if (err) { console.log(err); }
                            else { console.log('Affected: ', affected); }
                        }
                    )
                    
                    
                });
            // console.log(result[0])
        }
    });
}
