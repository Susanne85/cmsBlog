const router = require('express').Router();
const { Blog } = require('../../models');
router.post('/newblog', async (request, response) => {
  console.log('Dashboard Routes new blog', request.session.user);
  try {
    const dbBlogData = await Blog.create({
      title: request.body.title,
      content: request.body.content,
      creator: request.session.user,
      date_created: request.body.date_created,
    });

    request.session.save(() => {
      response.status(200).json(dbBlogData);
    });
  } catch (error) {
    response.status(500).json(error);
  }
});
router.put('/updateblog/:id', async (request, response) => {
  console.log('Dashboard Routes update blog', request.session.user);
  try {
    const dbBlogData = await Blog.update({
      title: request.body.title,
      content: request.body.content,
      creator: request.session.user,
      date_created: request.body.date_created,
    }, { where: { id: request.params.id } });

    request.session.save(() => {
      response.status(200).json(dbBlogData);
    });
  } catch (error) {
    response.status(500).json(error);
  }
});

router.delete('/delete/:id', async (request, response) => {
  console.log('Dashboard Routes delete blog');

  try {
    const blogData = await Blog.destroy({
      where: {
        id: request.params.id,
      },
    });

    if (!blogData) {
      response.status(404).json({ message: 'No Blog data for id ' + request.params.id + ' was found, so it was not deleted' });
      return;
    }

    response.status(200).json(blogData);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;


