const riddles = require('../../utils/riddle.json');

const router = require("express").Router();
const {Character, Login, Stats} = require("../../models");

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
let index = req.params.id ;
for(let i =0; i < index; i++){
  res.json({status: "success", payload: riddles[i]});
}

  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;