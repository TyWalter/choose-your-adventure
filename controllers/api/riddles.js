const riddles = require('../../utils/riddle.json');
const router = require("express").Router();


//get all answers
router.get("/", async (req, res) => {
  try {
    res.json({status: "success", payload: riddles});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

//get answer by id
router.get("/:id", async (req, res) => {
  try {
  res.json({status: "success", payload: riddles[req.params.id-1]});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;