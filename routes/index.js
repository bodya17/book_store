const router = require('express').Router();
require('./authorRoutes')(router);
require('./bookRoutes')(router);
require('./storeRoutes')(router);

module.exports = router;
