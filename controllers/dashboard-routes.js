const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (request, response) => {
  try {
    let findVar = 'sue@email.com';
    const dbBlogData = await Blog.findAll({
        where: {creator: findVar}
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

module.exports = router;
