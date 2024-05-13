const router = require("express").Router();
const {Character, Login, Stats} = require("../../models");

//get all game info
router.get("/", async (req, res) => {
  try {
    const result = await Login.findAll()
    res.json({status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

//get game info by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await Login.findByPk(req.params.id)
    res.json({status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

module.exports = router;