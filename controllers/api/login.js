const router = require('express').Router();
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const { Login } = require('../../models');


const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    database: 'adventure_db',
}
)

pool.connect()

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

    // if (!dbUserData) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect email. Please try again!' });
    //   return;
    // }

    const validPassword = await dbUserData.checkPassword(req.body.upass);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect password. Please try again!' });
    //   return;
    // }
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  pool.query('INSERT INTO login(user_name, email, password) VALUES ($1, $2, $3)', [req.body.user_name, req.body.email, req.body.password], function (err, result){
    if(err){
      console.log(err)
    }else{
      console.log(result)
    }
    res.send("added new user");
  })
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