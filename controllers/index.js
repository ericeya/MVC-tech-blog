const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes')
const userRoutes = require('./userRoutes')

router.use('/', blogRoutes);
// router.use('/blog/comment', commentRoutes);
// router.use('/user', userRoutes);


module.exports = router;
