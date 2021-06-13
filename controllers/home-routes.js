const router = require('express').Router();
const { Blog, Comment, User} = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
  try {
    // attributes: ['blog_id', 'post_content'],
    const dbBlogData = await Blog.findAll({
    });

    const blogs = dbBlogData.map((blogData) =>
      blogData.get({ plain: true })
    );
    console.log('date is ', blogs );
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/comment/:id', withAuth, async (req, res) => {
  // Checking whether the user is logged in and resulting navigation is done within withAuth
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        Comment,
      ],
    });
    const blog = dbBlogData.get({ plain: true });
    console.log ('in get for a particular blog', blog);
    res.render('comment', { blog,  loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
module.exports = router;
