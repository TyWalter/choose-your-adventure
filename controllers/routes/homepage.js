const router = require("express").Router();

// Get homepage and display
router.get("/", async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in
    })
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;