const router = require("express").Router();
const {Login, Stats} = require("../../models");
const withAuth = require('../../utils/auth')

// Get profile page and display
router.get("/", withAuth, async (req, res) => {

  try {
    const finder = await Login.findOne({
      where: {
        id: req.session.user_id
      }
    });
    const chars = await Stats.findOne({
      where: {
        user_id: req.session.user_id
      }
    });
    const user = finder.get({plain:true});
    const char = chars.get({plain: true});
    console.log(char)
    res.render('profile', {
      user,
      char,
      logged_in: req.session.logged_in
    })
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;