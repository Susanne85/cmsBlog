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
      request.session.user = request.session.user;
      response.status(200).json(dbBlogData);
    });
  } catch (error) {
    response.status(500).json(error);
  }
});
router.post('/newcomment', async (request, response) => {
  console.log('Dashboard Routes new comment');
  try {
    const dbCommentData = await Comment.create({
      post_comment: request.body.post_comment,
      post_user: request.body.post_user,
      post_date: request.body.post_date,
      blog_id: request.body.blog_id,
    });

    request.session.save(() => {
      request.session.loggedIn = true;
      request.session.user = request.session.user;
      response.status(200).json(dbCommentData);
    });
  } catch (error) {
    response.status(500).json(error);
  }
});
module.exports = router;


