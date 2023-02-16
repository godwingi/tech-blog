const router = require('express').Router();
const userRoutes = require('./user');
const postdataRoutes = require('./postdata');
const commentRoutes = require('./comment');

router.use('/user', userRoutes);
router.use('/postdata', postdataRoutes);
router.use('/comment', commentRoutes);

module.exports = router;