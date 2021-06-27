const router = require('express').Router();
const {Comment } = require('../../models');
router.post('/newcomment/:id', async (request, response) => {
    console.log('API/comment/newcomment',request.params.id);
    try {
      const dbCommentData = await Comment.create({
        post_comment: request.body.post_comment,
        post_user: request.session.user,
        post_date: request.body.post_date,
        blog_id: request.params.id,
      });

      request.session.save(() => {
        response.status(200).json(dbCommentData);
      });
    } catch (error) {
      response.status(500).json(error);
    }
  });
  module.exports = router;