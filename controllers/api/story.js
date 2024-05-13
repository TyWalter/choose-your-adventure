// get all,
// get id


const router = require("express").Router();
const {Character, Login, Stats} = require("../../models");

//get all answers
router.get("/", async (req, res) => {
  try {
    const result = await Character.findAll()
    res.json({status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

//get answer by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Character.findAll()
    res.json({status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;