const router = require('express').Router();
const { Pool } = require('pg');
// const app = express();
const bcrypt = require('bcrypt');
const { User } = require('../../models');


// const pool = new Pool({
//     user: 'DB_USER',
//     password: 'DB_PW',
//     host: 'localhost',
//     database: 'adventure_db',
// }
// )


// pool.connect()

//signup
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
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


  // console.log(req.body);
  // try{
  //   const userData = await Login.findOne({ where: {user_name: req.body.user_name} });
  //   if(!userData) {
  //     res.status(404).json({message: 'Login failed.'})
  //     return;
  //   }

  //   const validatePassword = await bcrypt.compare(
  //     req.body.password,
  //     userData.password
  //   );

  //   if(!validatePassword){
  //     res.status(400).json({message: "wrong password."})
  //     return;
  //   }

  //   res.status(200).json({message: 'You are logged in'})
  // }catch (err){
  //   res.status(500).json(err);
  // }
  
  // pool.query('INSERT INTO login(user_name, email, password) VALUES ($1, $2, $3)', [req.body.user_name, req.body.email, req.body.password], function (err, result){
  //   if(err){
  //     console.log(err)
  //   }else{
  //     console.log(result)
  //   }
  //   res.send("added new user");
  // })
})

//login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Login.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });

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

module.exports = router;