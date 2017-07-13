const Store = require('../models/Store');

exports.getStores = async (req, res) => {
    const stores = await Store.find({});
    res.send(stores);
};

exports.createStore = (req, res) => {
    const store = new Store(req.body);
    store.save();
    res.send(store);
};
