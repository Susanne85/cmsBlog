const router = require('express').Router();
const { Blog } = require('../models');

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
