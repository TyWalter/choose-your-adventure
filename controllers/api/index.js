const router = require("express").Router();
const storyRoutes = require("./story");
const answersRoutes = require("./answers");
const loginRoutes = require("./login")


router.use("/story", storyRoutes);
router.use("/answers", answersRoutes);
router.use("/users", loginRoutes);


module.exports = router;