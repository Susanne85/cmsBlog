const router = require('express').Router();
const { Blog, Comment } = require('../../models');
router.post('/newblog', async (request, response) => {
  console.log('Dashboard Routes new blog');
  try {
   const dbBlogData = await Blog.create({
     title: request.body.title,
      content: request.body.content,
      creator: request.body.creator,
      date_created: request.body.date_created,
    });

    request.session.save(() => {
      request.session.loggedIn = true;
      request.session.user =request.session.user;
      response.status(200).json(dbBlogData);
    });
 } catch (err) {
   response.status(500).json(err);
  }
});
module.exports = router;


