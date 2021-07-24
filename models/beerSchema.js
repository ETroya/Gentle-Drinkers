const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// var connection = mongoose.createConnection("mongodb://localhost/drinkersList");

const beerSchema = new Schema({
  name: String,
  type: String,
  abv: Number,
  image: String,
  createdOn: { type: Date, default: Date.now },
  createdBy: String,
  rating: { type: Number, default: 0 },
  amountOfRatings: { type: Number, default: 0 },
  review: [
    {
      name: { type: String, default: null },
      content: { type: String, default: null },
      likes: { type: Number, default: 0 },
      createdOn: { type: Date, default: Date.now },
      updatedOn: { type: Date, default: Date.now },
      comment: [
        {
          name: String,
          content: String,
          createdOn: { type: Date, default: Date.now },
        },
      ],
    },
  ],
});

const Beer = mongoose.model("beers", beerSchema);

module.exports = Beer;
