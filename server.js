// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );
  app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/drinkersList",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

  mongoose.connection.on("connected", () => {
    console.log("connected to mongoose");
  });

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });