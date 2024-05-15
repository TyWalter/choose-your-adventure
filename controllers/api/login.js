const router = require('express').Router();
const { Pool } = require('pg');
// const app = express();
const bcrypt = require('bcrypt');


const pool = new Pool({
    user: 'DB_USER',
    password: 'DB_PW',
    host: 'localhost',
    database: 'adventure_db',
}
)


pool.connect()

//signup
router.post("/login", async (req, res) => {
  console.log(req.body);
  try{
    const userData = await Login.findOne({ where: {user_name: req.body.user_name} });
    if(!userData) {
      res.status(404).json({message: 'Login failed.'})
      return;
    }

    const validatePassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if(!validatePassword){
      res.status(400).json({message: "wrong password."})
      return;
    }

    res.status(200).json({message: 'You are logged in'})
  }catch (err){
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