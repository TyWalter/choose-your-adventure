const router = require("express").Router();
const homeRoute = require("./homepage");
const loginRoute = require("./login");
const profileRoute = require("./profile");
const gameRoute = require("./game");

router.use("/profile", profileRoute)
router.use("/login", loginRoute)
router.use("/game", gameRoute) 
router.use("/", homeRoute)
router.use("*", (req, res) => {
  res.send(`<h1>You typed an invalid route, try again!</h1>`)})

module.exports = router;