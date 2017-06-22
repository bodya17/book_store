const mongoose = require('mongoose');
const Book = require('./models/Book');

mongoose.connect('mongodb://localhost:27017/book_store');

const createBooks = () => {
    const books = [
        {
            authors: ['Evan M.Hahn'],
            name: 'Express in Action',
            ISBN: '978-1617292422',
            year: 2016,
            copies: 8,
            pages: 256,
            price: 31.99
        },
        {
            authors: ['Jon Duckett'],
            name: `JavaScript and JQuery: Interactive Front-End Web Development`,
            ISBN: '978-1118531648',
            year: 2013,
            copies: 18,
            pages: 640,
            price: 19.86
        },
        {
            authors: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'],
            name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
            ISBN: '978-0201633610',
            year: 1994,
            copies: 1,
            pages: 395,
            price: 10.24
        }
    ];

    books.forEach(bookData => {
        const book = new Book(bookData);
        book.save();
    })
};

createBooks();