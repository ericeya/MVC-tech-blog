const router = require('express').Router();
const { User, Blogpost  } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req,res) => {
  try {
    const blogPostData = await Blogpost.findAll()
    const blogPosts = blogPostData.map((blogpost) =>
    blogpost.toJSON()
    );
    console.log(blogPosts)
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


router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return
  // }
  res.render('login')
})

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const myBlogPostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user.id
      }
    })
    const myBlogPosts = myBlogPostData.map((myblogpost) =>
    myblogpost.toJSON()
    );
    console.log(myBlogPosts)
    // console.log(req.session)
    res.render('dashboard', {
      myBlogPosts,
      loggedIn: req.session.loggedIn,
      layout: 'dashboard.handlebars'
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

router.get('/createacct', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return
  }
  res.render('createacct')
})


module.exports = router;
