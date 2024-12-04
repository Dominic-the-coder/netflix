const express = require("express");
//create a router for movies
const router = express.Router();

// load the models
const Movie = require("../models/movie");

// create the routes

// get all the movies. Pointing to /movies
router.get("/", async (req, res) => {
  const genre = req.query.genre;
  const rating = req.query.rating;
  // create a container for filter
  let filter = {};
  if (genre) {
    // if genre exists, pass it to the filter container
    filter.genre = genre;
  } else if (rating) {
    // if rating exist, pass it into the filter container
    filter.rating = rating;
  }

  const movies = await Movie.find(filter);
  res.send(movies);
});

// get one movie by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id);
  res.send(movie);
});

module.exports = router;
