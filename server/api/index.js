const router = require('express').Router();

// router.use('/users', require('./users')); //matches all requests to /api/users/
// router.use('/builds', require('./builds')); //matches all requests to /api/builds
router.use('/nodes', require('./nodes')); //matches all requests to /api/nodes/

//catch-all to prevent bad requests like /api/badMMOgames/
router.use(function(req, res, next){
    const err = new Error('Not found.');
    err.status = 404;
    next(err)
})

module.exports = router;