const router = require("express").Router();
const homeRoute = require("./homepage");
const loginRoute = require("./login");
const profileRoute = require("./profile");
const characterRoute = require("./character");
const gameRoute = require("./game");

router.use("/", homeRoute)
router.use("/profile", profileRoute)
router.use("/login", loginRoute)
router.use("/character", characterRoute)
router.use("/game", gameRoute) 

module.exports = router;