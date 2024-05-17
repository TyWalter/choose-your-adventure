const router = require('express').Router();
const { Login } = require('../../models');

//doesnt work but things are saved to the database
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
    }    
);

  if (!dbUserData) {
    return res.status(400).json({ message: "User not found" });
  }
      
  const validPassword = await dbUserData.checkPassword(req.body.upass);

  if(!validPassword){
    res.status(400).json({message: "wrong password"});
  }

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