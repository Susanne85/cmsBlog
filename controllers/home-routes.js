const router = require('express').Router();
const { Blog, Comment, User} = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (request, response) => {
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

router.get('/comment/:id', withAuth, async (request, response) => {
  try {
    const dbBlogData = await Blog.findByPk(request.params.id, {
      include: [
        Comment,
      ],
    });
    const blog = dbBlogData.get({ plain: true });
    response.render('comment', { blog,  loggedIn: request.session.loggedIn });
  } catch (err) {
    response.status(500).json(err);
  }
});

router.get('/login', (request, response) => {
  if (request.session.loggedIn) {
    response.redirect('/');
    return;
  }

  response.render('login');
});

router.get('/signup', (request, response) => {
  if (request.session.loggedIn) {
    response.redirect('/');
    return;
  }

  response.render('signup');
});
module.exports = router;
