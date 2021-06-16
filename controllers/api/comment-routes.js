const router = require('express').Router();
const {Comment } = require('../../models');
router.post('/newcomment', async (request, response) => {
    console.log('Comment new comment');
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