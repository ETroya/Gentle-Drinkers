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

module.exports = router;
