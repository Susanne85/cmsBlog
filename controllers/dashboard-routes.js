const router = require('express').Router();
const { Blog } = require('../models');

router.get('/newPost', async (request, response) => {
  console.log('DashboardRoutes /newPost');
  response.render('new-post', {
    user: request.session.user,
  })
});
router.get('/update-details/:id', async (request, response) => {
  console.log('Dashboardboard Routes /update-details', request.params.id);
  try {
    const dbBlogData = await Blog.findByPk(request.params.id);
    const blog = dbBlogData.get({ plain: true });
    response.render('update-details', {
      blog, 
    });
  } catch (err) {
    response.status(500).json(err);
  }
});
module.exports = router;
