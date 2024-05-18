const router = require("express").Router();
const withAuth = require('../../utils/auth')

// Get all game info
router.get("/", withAuth, async (req, res) => {
  try {
    const url = req._parsedOriginalUrl.pathname
    res.render('level1', {layout: 'game', url})
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

//get game info by ID
router.get("/:id", withAuth, async (req, res) => {
  try {
    const url = req._parsedOriginalUrl.pathname
    res.render(`level${req.params.id}`, {layout: 'game', url})
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;