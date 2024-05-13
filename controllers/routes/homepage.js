const router = require("express").Router();
// const {Login} = require("../../models");

// Get homepage and display
router.get("/", async (req, res) => {
  try {
    // const result = await Login.findAll()
    // res.json({status: "success", payload: result});
    res.render('homepage', {
      // result,
      logged_in: req.session.logged_in
    })
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

// //get profile info by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const result = await Login.findByPk(req.params.id)
//     res.json({status: "success", payload: result});
//   }catch(err){
//     res.status(400).json({ status:"error" });
//   };
// });

// //post
// router.post("/", async (req, res) => {
//   try {
//     const result = await Login.create(req.body);
//     res.json({ status: "success", payload: result});
//   }catch(err){
//     res.status(400).json({ status: err.message});
//   }
// });

//hash password

module.exports = router;