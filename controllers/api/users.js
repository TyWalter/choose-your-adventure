const router = require('express').Router();
const { Login, Character, Stats } = require('../../models');

//doesn't work but things are saved to the database
router.get("/", async (req, res) => {
  try {
    const logins = await Login.findAll(); // Retrieve all records from the Login table

    res.json({ status: "success", payload: logins }); // Send the retrieved data as JSON response
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: "error" });
  }
});


//Create new profile
router.post("/", async (req, res) => {
  console.log(req.body.password)

  try {
    const dbUserData = await Login.create({
      user_name: req.body.sname,
      email: req.body.semail,
      password: req.body.spass,

    });

    if (!dbUserData) {
      return res.status(500).json({ message: "User not created" });
    }  

    const user = dbUserData.get({plain:true})

    const statData = await Stats.create({
      played: 0,
      wins: 0,
      losses: 0,
      deaths: 0,
      user_id: user.id
    })

    if (!statData) {
      return res.status(500).json({ message: "User not created" });
    }  

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user = user.id;
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
    }    
);

  if (!dbUserData) {
    return res.status(400).json({ message: "User not found" });
  }
  // check if await has any effect below  
  const validPassword = await dbUserData.checkPassword(req.body.upass);

  if(!validPassword){
    res.status(400).json({message: "wrong password"});
  }

  const user = dbUserData.get({plain:true})

  console.log(user)

  req.session.save(() => {
    req.session.logged_in = true;
    req.session.user = user.id;
    res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
  })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
}
})

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


router.post('/profile', async (req, res) =>{
  if( !req.session.user ) res.status(401).json({ msg: 'not logged in'})
  // console.log("req body " + req.body);
  // console.log("req.session " + req.session);
  // const newCharacter = {...req.body, login_id: req.session.user}
  // console.log("new character " + newCharacter);


  try {
    const newCharacter = await Character.create({
      charname: req.body.characterName,
      user_id: req.session.user,
    })

    if (!newCharacter) {
      return res.status(400).json({ message: "Character not created" });
    }

    res.status(200).json({ status: 'ok'})
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);

  }
})

router.get('/profile', async (req, res) => {
 const charData = await Character.findAll()
 res.json(charData)
})


module.exports = router;