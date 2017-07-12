const router = require('express').Router();
require('./authorRoutes')(router);
require('./bookRoutes')(router);

module.exports = router;
