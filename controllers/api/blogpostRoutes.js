const router = require('express').Router();
const { Blogpost } = require('../../models');
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

module.exports = router;
