const router = require('express').Router();
console.log('API Controller Index');

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const blogRoutes = require('./blog-routes');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/blog', blogRoutes);


module.exports = router;
