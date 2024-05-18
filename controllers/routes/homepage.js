const router = require("express").Router();
const {Login} = require("../../models");

// Get homepage and display
router.get("/", async (req, res) => {
  console.log(req.session.logged_in)
  try {
    if(req.session.logged_in){
    const finder = await Login.findOne({
      where: {
        id: req.session.user_id
      }
    });
    const user = finder.get({plain:true});
    res.render('homepage', {
      user,
      logged_in: req.session.logged_in
    })
  }
  res.render("homepage")
  }catch(err){
    res.status(400).json(err.message);
  };
});

module.exports = router;