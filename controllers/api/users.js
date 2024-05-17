const router = require('express').Router();
const { Login, Character } = require('../../models');

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

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user = dbUserData;
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

  req.session.save(() => {
    req.session.logged_in = true;
    req.session.user = dbUserData;
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
  const newCharacter = {...req.body, login_id: req.session.user.id}
// characterName is declared, but not read? const characterName: any?
  try {
    const characterName = await Character.create(newCharacter)
    if(!characterName){
      return res.status(400).json({ message: "Character not created" });
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
})


module.exports = router;