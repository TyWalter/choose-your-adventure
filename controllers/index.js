const router = require("express").Router();
const apiRoutes = require("./api");
const routeRoutes = require("./routes");

router.use("/api", apiRoutes);
router.use("/routes", routeRoutes);

module.exports = router;