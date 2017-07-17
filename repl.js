const repl = require('repl');

let r = repl.start({
    ignoreUndefined: true
});

r.context.lodash = require('lodash');
