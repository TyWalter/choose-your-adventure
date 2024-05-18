const router = require("express").Router();
const {Login, Stats} = require("../../models");
const withAuth = require('../../utils/auth')

// Get profile page and display
router.get("/", withAuth, async (req, res) => {

  console.log(req.session)
  try {
    const result = await Login.findByPk(req.session.user, {
      include: Stats,
      attributes: {exclude: ['password']},
    });
    const user = result.get({plain:true});
    res.render('profile', {
      user,
      logged_in: req.session.logged_in
    })
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;