const mongoose = require('mongoose');
const Book = require('../models/Book');
const Author = require('../models/Author');

mongoose.connect('mongodb://localhost:27017/book_store');

Author.remove({}, function() {});

const david =  new Author({
    firstName: 'David',
    lastName: 'Flanagan',
    dob: new Date(1965, 0),
    bio: 'David Flanagan is a computer programmer who has spent much of the last 20 years writing books about programming languages. He now works at Mozilla. David lives with his wife and children in the Pacific Northwest, between the cities of Seattle and Vancouver.'
});

const evan = new Author({
    firstName: 'Evan',
    lastName: 'M.Hahn',
    dob: new Date(1970, 0),
    bio: 'Evan M.Hahn is author of Express in Action book'
});

const jon = new Author({
    firstName: 'Jon',
    lastName: 'Duckett',
    dob: new Date(1955, 0),
    bio: 'Jon Duckett is author of JavaScript and JQuery: Interactive Front-End Web Development book'
});

const erich = new Author({
    firstName: 'Erich',
    lastName: 'Gamma',
    dob: new Date(1961, 0),
    bio: 'Erich Gamma is a Swiss computer scientist and co-author of the influential software engineering textbook, Design Patterns: Elements of Reusable Object-Oriented Software. '
});

const richard = new Author({
    firstName: 'Richard',
    lastName: 'Helm',
    dob: new Date(1962, 0),
    bio: 'Richard Helm is computer scientist and co-author of the influential software engineering textbook, Design Patterns: Elements of Reusable Object-Oriented Software.'
});

const ralph = new Author({
    firstName: 'Ralph',
    lastName: 'Johnson',
    dob: new Date(1964, 0),
    bio: 'Ralph Johnson is computer scientist and co-author of the influential software engineering textbook, Design Patterns: Elements of Reusable Object-Oriented Software. '
});

const john = new Author({
    firstName: 'John',
    lastName: 'Vlissides',
    dob: new Date(1962, 0),
    bio: 'John Vlissides is computer scientist and co-author of the influential software engineering textbook, Design Patterns: Elements of Reusable Object-Oriented Software. '
});

const authors = [david, evan, jon, erich, richard, ralph, john];
authors.forEach(author => author.save());

const book1 = new Book({
    authors: evan._id,
    name: 'Express in Action',
    ISBN: '978-1617292422',
    year: 2016,
    copies: 8,
    pages: 256,
    price: 31.99
});

const book2 = new Book({
    authors: jon._id,
    name: `JavaScript and JQuery: Interactive Front-End Web Development`,
    ISBN: '978-1118531648',
    year: 2013,
    copies: 18,
    pages: 640,
    price: 19.86
});

const book3 = new Book({
    authors: [erich._id, richard._id, ralph._id, john._id],
    name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    ISBN: '978-0201633610',
    year: 1994,
    copies: 1,
    pages: 395,
    price: 10.24
});

const book4 = new Book({
    authors: jon._id,
    name: 'HTML and CSS: Design and Build Websites',
    ISBN: '978-1118008188',
    year: 2013,
    copies: 4,
    pages: 295,
    price: 16.26
});

const book5 = new Book({
    authors: david._id,
    name: 'JavaScript: The Definitive Guide',
    ISBN: '978-1118008132',
    year: 2011,
    copies: 3,
    pages: 850,
    price: 70.24
});

Book.remove({}, function() {});

const books = [book1, book2, book3, book4, book5];

books.forEach(book => book.save());

Author.update(
    { _id :  evan._id },
    { books: [book1._id] }
);

Author.update(
    { _id : david._id },
    { books: [book5._id] }
);

mongoose.disconnect();


