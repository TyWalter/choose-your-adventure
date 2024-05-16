const router = require("express").Router();
const riddleRoutes = require("./riddles");
const userRoutes = require("./users")

router.use("/riddles", riddleRoutes);
router.use("/users", userRoutes);
router.use("*", (req, res) => {
  res.send(`<h1>You typed an invalid route, try again!</h1>`)})

module.exports = router;