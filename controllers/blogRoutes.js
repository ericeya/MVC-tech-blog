const router = require('express').Router();
const { User, Blogpost  } = require('../models');

router.get('/', async (req,res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    const blogPosts = blogPostData.map((blogpost) =>
    blogpost.toJSON()
    );

    res.render('homepage', {
      blogPosts,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

router.get('/sess',  (req, res) => {
  res.json(req.session)
});

// ? GET one gallery
router.get('/gallery/:id', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const gallery = dbGalleryData.get({ plain: true });
    console.log(gallery)
    res.render('gallery', { gallery });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ? GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return
  }
  res.render('login')
})

module.exports = router;
