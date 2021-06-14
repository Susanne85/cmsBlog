const router = require('express').Router();
console.log('API Controller Index');

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');

router.use('/users', userRoutes);
router.use('/dashboard', blogRoutes);
module.exports = router;
