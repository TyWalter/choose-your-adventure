const router = require("express").Router();
const storyRoutes = require("./story");
const answersRoutes = require("./answers");


router.use("/story", storyRoutes);
router.use("/answers", answersRoutes);


module.exports = router;