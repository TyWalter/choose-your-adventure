const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Login } = require('../../models');

//Create new profile
router.post("/", async (req, res) => {
  try {
    const dbUserData = await Login.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

})

//login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Login.findOne({
      where: {
        user_name: req.body.uname,
      },
    });

    const validPassword = await dbUserData.checkPassword(req.body.upass);

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

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