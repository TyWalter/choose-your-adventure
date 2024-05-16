const router = require("express").Router();
const riddlesRoutes = require("./riddles");
const usersRoutes = require("./users")

router.use("/riddles", riddlesRoutes);
router.use("/users", usersRoutes);
router.use("*", (req, res) => {
  res.send(`<h1>You typed an invalid route, try again!</h1>`)})

module.exports = router;