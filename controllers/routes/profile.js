const router = require("express").Router();
const {Character, Login, Stats} = require("../../models");
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
    console.log("Profile rout user", user.stat)
    // res.json({status: "success", payload: result});
    res.render('profile', {
      user,
      logged_in: req.session.logged_in
    })
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

//get profile info by ID if we want it
router.get("/:id", async (req, res) => {
  try {
    const result = await Login.findByPk(req.params.id)
    res.json({status: "success", payload: result});
  }catch(err){
    res.status(400).json({ status:"error" });
  };
});

// //post
// router.post("/", async (req, res) => {
//   try {
//     const result = await Login.create(req.body);
//     res.json({ status: "success", payload: result});
//   }catch(err){
//     res.status(400).json({ status: err.message});
//   }
// });

// //put
// router.put("/:id", async (req, res) => {
//   try {
//     const result = await Login.create(req.body);
//     res.json({ status: "success", payload: result});
//   }catch(err){
//     res.status(400).json({ status: err.message});
//   }
// });

//hash password

module.exports = router;