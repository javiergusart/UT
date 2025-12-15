const Cuisines = require("../service/cuisineService");

const cuisines = new Cuisines();

const fetchAllCuisinesHandler = (req, res) => {
  //COMPLETE TASK 1(a) HERE
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify(cuisines.getAllCuisines()));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchCuisineByIdHandler = (req, res, cuisineId) => {
  //COMPLETE TASK 1(a) HERE
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    const cuisine = cuisines.getCuisineById(cuisineId);

    if (cuisine) {
      res.statusCode = 200;
      res.end(JSON.stringify(cuisine));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Cuisine not found" }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllCuisinesHandler,
  fetchCuisineByIdHandler,
};
