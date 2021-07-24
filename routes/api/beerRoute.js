const express = require("express");
const router = express.Router();

// require database model
const Beer = require("../../models/beerSchema");

router.post("/addBeers", async (req, res) => {
  const { name, type, abv } = req.body;

  try {
    const newBeer = new Beer({
      name,
      type,
      abv,
      image: "https://via.placeholder.com/150",
      createdBy: "test user",
    });

    await newBeer.save();

    console.log("====================================");
    console.log(newBeer);
    console.log("====================================");

    res.json(newBeer);
  } catch (error) {
    console.log("====================================");
    console.log("[WARNING] ");
    console.log(error);
    console.log("====================================");
  }
});

module.exports = router;
