const router = require('express').Router();
const { Blog } = require('../models');

router.get('/', async (request, response) => {
 console.log('DashboardRoutes /');
  try {
    const dbBlogData = await Blog.findAll({
      where: { creator: request.session.user }
    });

    const blogs = dbBlogData.map((blogData) =>
      blogData.get({ plain: true })
    );
    response.render('dashboard', {
      blogs,
      loggedIn: request.session.loggedIn,
    });
  } catch (error) {
    response.status(500).json(error);
  }
});

router.get('/newPost', async (request, response) => {
  console.log('DashboardRoutes /newPost');
  response.render('new-post', {
    loggedIn: request.session.loggedIn,
    user: request.session.user,
  })
});

router.get('/newComment', async (request, response) => {
  console.log('DashboardRoutes /newComment');
  response.render('new-comment', {
    loggedIn: request.session.loggedIn,
    user: request.session.user,
  });
});

module.exports = router;
