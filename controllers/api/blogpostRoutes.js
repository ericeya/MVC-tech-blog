const router = require('express').Router();
const { User, Blogpost  } = require('../models');
// const withAuth = require('../utils/auth')

router.post('/', async (req, res) => {
    try {
      const newBlogPostData = await Blogpost.create({
        title: req.body.title,
        content: req.body.content,
        date: date()
      });
      res.redirect('/dashboard')
      res.status(200).json(newBlogPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });








router.get('/createacct', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return
  }
  res.render('createacct')
})


module.exports = router;
