const router = require('express').Router();
const { Login, Character, Stats } = require('../../models');

// Get users
router.get("/", async (req, res) => {
  try {
    const logins = await Login.findAll({
      attributes: {
        exclude: ["password"]
      }
    });
    res.json({ status: "success", payload: logins });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: "error" });
  };
});

// Login
router.get("/profile", async (req, res) => {
  try {
    const chars = await Character.findAll({
      attributes: {
        exclude: ["loginId"]
      }
    });
    res.json({ status: "success", payload: chars });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: "error" });
  };
});

// Get characters by account
router.get("/profile/:characterName", async (req,res) => {
  console.log(Character)
  try{
    const chars = await Character.findOne({
      where: {
        charname: req.params.characterName
      },
      attributes: {
        exclude: ["loginId"]
      }
    })
    if(chars){
      res.status(200).json(chars)
    } else {
      res.status(404).json({ status: "error", message: "Character not found" });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// Get user by user_name
router.get("/:user_name", async (req,res) => {
  try{
    const logins = await Login.findOne({
      where: {
        user_name: req.params.user_name
      },
      attributes: {
        exclude: ["password", ]
      }
    })
    if(logins){
      res.status(200).json(logins)
    } else {
      res.status(404).json({ status: "error", message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Login.findOne({
      where: {
        user_name: req.body.uname
      },  
    });
    if (!dbUserData) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    // check if await has any effect below  
    const validPassword = await dbUserData.checkPassword(req.body.upass);
    if(!validPassword){
      res.status(400).json({message: "wrong password"});
      return;
    }
    // const user = dbUserData.get({plain:true});
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Character create
router.post('/profile', async (req, res) =>{
  if( !req.session.user_id ) res.status(401).json({ msg: 'not logged in'})
  try {
    const newCharacter = await Character.create({
      charname: req.body.characterName,
      user_id: req.session.user_id,
    })

    if (!newCharacter) {
      return res.status(400).json({ message: "Character not created" });
    }

    res.status(200).json({ status: 'ok'})
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

// Create new profile
router.post("/", async (req, res) => {
  try {
    const dbUserData = await Login.create({
      user_name: req.body.sname,
      email: req.body.semail,
      password: req.body.spass,
    });
    if (!dbUserData) {
      return res.status(500).json({ message: "User not created" });
    }  
    const statData = await Stats.create({
      played: 0,
      wins: 0,
      losses: 0,
      deaths: 0,
      user_id: dbUserData.id
    })
    if (!statData) {
      return res.status(500).json({ message: "User not created" });
    }  
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json(dbUserData);
    })
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
});

module.exports = router;