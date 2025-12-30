const Restaurants = require("../service/restaurantService");

const restaurants = new Restaurants();

const fetchAllRestaurantsHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // COMPLETE TASK2(a) HERE
  if (req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify(restaurants.getAllRestaurants()));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchRestaurantByIdHandler = (req, res, restaurantId) => {
  res.setHeader("Content-Type", "application/json");

  // COMPLETE TASK2(a) HERE
  if (req.method === "GET") {
    const restaurant = restaurants.getRestaurantById(restaurantId);

    if (restaurant) {
      res.statusCode = 200;
      res.end(JSON.stringify(restaurant));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Restaurant not found" }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchAllRestaurantsByCategoryHandler = (req, res, category) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(
      `${new Date()} - API called for fetching all restaurants by category`
    );
    res.end(JSON.stringify(restaurants.getAllRestaurantsByCategory(category)));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchAllRestaurantsByCuisineHandler = (req, res, cuisine) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(
      `${new Date()} - API called for fetching all restaurants by cuisine`
    );
    res.end(JSON.stringify(restaurants.getAllRestaurantsByCuisine(cuisine)));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllRestaurantsHandler,
  fetchRestaurantByIdHandler,
  fetchAllRestaurantsByCuisineHandler,
  fetchAllRestaurantsByCategoryHandler,
};
