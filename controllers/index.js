const router = require('express').Router();

const blogRoutes = require('./blogRoutes.js');
const apiRoutes = require('./api')
// const commentRoutes = require('./commentRoutes')
// const userRoutes = require('./userRoutes')

router.use('/', blogRoutes);
router.use('/api', apiRoutes);
// router.use('/user', userRoutes);


module.exports = router;
