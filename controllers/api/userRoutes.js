const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(req.session)
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: dbUserData.id,
        name: dbUserData.username,
      }

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleUser = await User.findByPk(req.params.id)
    const user = singleUser.toJSON()
    res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: dbUserData.id,
        name: dbUserData.username,
      }

      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
      const users = userData.map(user=> user.toJSON())
      res.json(users)
      // const users = userData.map((user) =>
      //   user.get({ plain: true })
      // );
  
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;
