const riddles = require('../../utils/riddle.json');
const router = require("express").Router();

// Get all riddles
router.get("/", async (req, res) => {
  try {
    res.json({status: "success", payload: riddles});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

// Get riddle by id
router.get("/:id", async (req, res) => {
  try {
  res.json({status: "success", payload: riddles[req.params.id-1]});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;