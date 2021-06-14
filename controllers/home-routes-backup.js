const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
//const withAuth = require('../utils/auth');
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
//router.get('/dashboard', async (request, response) => {
//  try {
 //   if (request.session.loggedIn) {
 //     console.log('HomeRoutes /dashboard logged in', request.session.loggedIn + ' ' +request.session.user);
 //     const dbBlogData = await Blog.findAll({
 //       where: { creator: request.session.user }
  //    });
 //     const blogs = dbBlogData.map((blogData) =>
 //     blogData.get({ plain: true }));
      
  //    response.render('dashboard', {
  //      blogs,
  //      loggedIn: request.session.loggedIn,
  //    });
  //  } else {
  //    console.log('HomeRoutes /dashboard not logged in', request.session.loggedIn + ' ' +request.session.user);
  //    const dbBlogData = await Blog.findAll({
  //    });

   //   const blogs = dbBlogData.map((blogData) =>
   //   blogData.get({ plain: true }));

   //   response.render('dashboard', {
    //    blogs,
    //    loggedIn: request.session.loggedIn,
   //   });
  //  }
  //  
  //} catch (err) {
 //   response.status(500).json(err);
 // }
//});
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
