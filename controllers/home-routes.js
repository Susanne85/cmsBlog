const router = require('express').Router();
const { Blog, Comment } = require('../models');
router.get('/', async (request, response) => {
  console.log('HomeRoutes /');
  try {
    const dbBlogData = await Blog.findAll({
    });

    const blogs = dbBlogData.map((blogData) =>
      blogData.get({ plain: true })
    );
    response.render('homepage', {
      blogs,
      loggedIn: request.session.loggedIn,
    });
  } catch (err) {
    response.status(500).json(err);
  }
});
router.get('/dashboard', async (request, response) => {
  console.log('HomeRoutes /dashboard', request.session.loggedIn);
  try {
    const dbBlogData = await Blog.findAll({
      where: { creator: request.session.user }
    });

    const blogs = dbBlogData.map((blogData) =>
      blogData.get({ plain: true }));

    response.render('dashboard', {
      blogs,
      loggedIn: request.session.loggedIn,
    });

  } catch (err) {
    response.status(500).json(err);
  }
});
router.get('/comment/:id', async (request, response) => {
  console.log('HomeRoutes /comment');
  try {
    const dbBlogData = await Blog.findByPk(request.params.id, {
      include: [
        Comment,
      ],
    });
    
    const blog = dbBlogData.get({ plain: true });

    response.render('comment', {
      blog,
      loggedIn: request.session.loggedIn,
      user: request.session.user
    });
  } catch (err) {
    response.status(500).json(err);
  }
});

router.get('/newComment', async (request, response) => {
  console.log('HomePage Routes /newComment');
  response.render('new-comment', {
    loggedIn: request.session.loggedIn,
    user: request.session.user,
  });
});
router.get('/login', (request, response) => {
  console.log('HomeRoutes /login');
  if (request.session.loggedIn) {
    response.redirect('/');
    return;
  }

  response.render('login');
});

router.get('/signup', (request, response) => {
  console.log('HomeRoutes /signup');
  if (request.session.loggedIn) {
    response.redirect('/');
    return;
  }

  response.render('signup');
});
module.exports = router;
