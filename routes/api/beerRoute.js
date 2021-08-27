const express = require("express");
const router = express.Router();

// require database model
const Beer = require("../../models/beerSchema");

router.post("/addBeers", async (req, res) => {
  const { name, type, abv, image } = req.body;

  try {
    const newBeer = new Beer({
      name,
      type,
      abv,
      image,
      createdBy: "test user",
    });

    await newBeer.save();

    res.json(newBeer);
  } catch (error) {
    console.log("====================================");
    console.log("[WARNING] ");
    console.log(error);
    console.log("====================================");
  }
});

router.get("/getBeers", async (req, res) => {
  try {
    const beers = await Beer.find({});
    console.log("inside peanut butter");
    res.json(beers);
  } catch (error) {
    console.log("====================================");
    console.log("[DANGER WIL ROBINSON]");
    console.log("====================================");
    console.log("====================================");
    console.log(ERROR);
    console.log("====================================");
  }
});

module.exports = router;
