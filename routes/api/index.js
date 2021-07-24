const router = require("express").Router();

const beerRoute = require("./beerRoute");

router.use("/beer", beerRoute);

module.exports = router;
