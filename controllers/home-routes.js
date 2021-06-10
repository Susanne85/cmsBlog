const router = require('express').Router();
const { Blog, Comment} = require('../models');
const withAuth = require('../utils/auth');
// GET all galleries for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // attributes: ['blog_id', 'post_content'],
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: Comment,
       },
     ],
    });
    
    const blogs = dbBlogData.map((blogData) =>
      blogData.get({ plain: true })
    );
    console.log ('here', blogs);
 //   res.render('homepage', {
 //     galleries,
  //    loggedIn: req.session.loggedIn,
 //  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// TODO: Replace the logic below with the custom middleware
router.get('/gallery/:id', withAuth, async (req, res) => {
  // Checking whether the user is logged in and resulting navigation is done within withAuth
//  try {
 //   const dbGalleryData = await Gallery.findByPk(req.params.id, {
 //     include: [
 //       {
 //         model: Painting,
 //         attributes: [
  //          'id',
   //         'title',
  //          'artist',
  //          'exhibition_date',
  //          'filename',
  //          'description',
   //       ],
  //      },
  //    ],
 //   });
//    const gallery = dbGalleryData.get({ plain: true });
 //   res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
 // } catch (err) {
 //   console.log(err);
  //  res.status(500).json(err);
  //}
});

// GET one painting
// TODO: Replace the logic below with the custom middleware
router.get('/painting/:id', withAuth, async (req, res) => {
//  try {
//    const dbPaintingData = await Painting.findByPk(req.params.id);

//    const painting = dbPaintingData.get({ plain: true });

//    res.render('painting', { painting, loggedIn: req.session.loggedIn });
 // } catch (err) {
//    console.log(err);
//    res.status(500).json(err);
//  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
