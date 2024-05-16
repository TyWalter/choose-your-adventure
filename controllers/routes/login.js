const router = require("express").Router();
const {Login} = require("../../models");

// Get login/signup page and display
router.get("/", async (req, res) => {
  try {
    // const result = await Login.findAll()
    // res.json({status: "success", payload: result});
    if(req.session.logged_in){
      res.redirect('/profile');
      return;
    }
    res.render('login')
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

//post
router.post("/", async (req, res) => {
  try {
    const result = await Login.create(req.body);
    res.json({ status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status: err.message});
  }
});

module.exports = router;