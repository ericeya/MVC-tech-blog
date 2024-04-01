const router = require('express').Router();
const { Blogpost, User} = require('../../models');
// const withAuth = require('../utils/auth')

router.post('/', async (req, res) => {
    try {
        const todayDate = new Date()
        const todayDateString = todayDate.toString()
        const newBlogPostData = await Blogpost.create({
            title: req.body.title,
            content: req.body.content,
            date: todayDateString,
            userId: req.session.user.id
        });
        res.status(200).json(newBlogPostData);
        // res.redirect('/dashboard')
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', async (req, res) => {
    console.log(req.session)
        res.render('newpost', {
            loggedIn: req.session.loggedIn,
            layout: 'dashboard.handlebars'
        })
    
})

// get one blogpost
router.get('/:id', async (req,res) => {
    try {
      const blogPostData = await Blogpost.findByPk(req.params.id)
      const blogPost = blogPostData.toJSON()
      
      const userData = await User.findByPk(blogPost.userId)
      const userName = userData.toJSON()

      console.log(blogPost)
      res.render('singleblogpost', {
        blogPost,
        userName,
        loggedIn: req.session.loggedIn,
        
      })
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
  })

//  adding new comment via put request

router.put('/:id', async (req, res) => {
    try {
        const data = await Blogpost.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (data[0]=== 0) {
            return res.status(404).json({msg:"no such blogpost exists!"});
        }
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    }
})

module.exports = router;
