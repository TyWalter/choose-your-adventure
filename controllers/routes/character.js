// get all,
// post,

const router = require("express").Router();
const {Character, Login, Stats} = require("../../models");

//get all profile info
router.get("/", async (req, res) => {
  try {
    const result = await Character.findAll()
    res.json({status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

//post
router.post("/", async (req, res) => {
  try {
    const result = await Character.create(req.body);
    res.json({ status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status: err.message});
  }
});

module.exports = router;