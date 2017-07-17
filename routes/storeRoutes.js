const storeController = require('../controllers/storeController'),
    expressJoi = require('express-joi');

const storeRouter = router => {
    router.route('/store')
        .get(storeController.getStores)
        .post(storeController.createStoreSerial);
};

module.exports = storeRouter;
