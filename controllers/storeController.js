const Store = require('../models/Store'),
    Book = require('../models/Book'),
    async = require('async');

exports.getStores = async (req, res) => {
    const stores = await Store.find({});
    res.send(stores);
};

const updateBook = (bookID, storeID) => {
    return () => Book.findByIdAndUpdate(
        bookID,
        { $push: { stores: storeID }},
        { new: true }).exec();
};

const updateBookCallback = (bookID, storeID, cb) => {
    Book.findByIdAndUpdate(
        bookID,
        { $push: { stores: storeID }},
        { new: true }).exec(cb);
};

exports.createStoreParallel = async (req, res) => {
    const store = new Store(req.body);
    const newStore = await store.save();
    // parallel save (Promises)

    // Promise.all(newStore.books.map(bookID => updateBook(bookID, newStore._id)))
    //     .then(result => res.send(result));

    // parallel save (async.js)
    async.parallel(
        newStore.books.map(bookID => updateBookCallback.bind(null, bookID, newStore._id)),
        (err, result) => {
            if (err) { console.log('Error: ', err) }
            else { console.log('Result: ', result); res.send(result); }
        }
    )
};

// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
const promiseSerial = funcs =>
  funcs.reduce((promise, func) =>
    promise.then(result => func().then(_ => [...result, _])),
    Promise.resolve([]));

exports.createStoreSerial = async (req, res) => {
    const store = new Store(req.body);
    const newStore = await store.save();
    // parallel save (Promises)

    // promiseSerial(
    //     newStore.books.map(bookID => updateBook(bookID, newStore._id))
    // ).then(result => res.send(result))
    
    // serial save (async.js)
    async.series(
        newStore.books.map(bookID => updateBookCallback.bind(null, bookID, newStore._id)),
        (err, result) => {
            if (err) { console.log('Error: ', err) }
            else { console.log('Result: ', result); res.send(result.map(b => b.name)); }
        }
    );
};
