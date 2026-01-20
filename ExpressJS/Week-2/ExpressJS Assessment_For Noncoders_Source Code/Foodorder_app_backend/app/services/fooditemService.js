const fooditemRepository = require("../database/repositories/fooditemRepository");
const expressAsyncHandler = require("express-async-handler");

const createFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.a HERE */
  try {
    const { name, description, image, categoryId, cuisineId, isVeg } = req.body;

    if (
      !name ||
      !description ||
      !image ||
      !categoryId ||
      !cuisineId ||
      isVeg === undefined
    ) {
      res.status(400);
      throw new Error(
        "Missing required fields: name, description, image, categoryId, cuisineId, isVeg"
      );
    }

    const result = await fooditemRepository.createFooditem(
      name,
      description,
      image,
      categoryId,
      cuisineId,
      isVeg
    );

    if (result) {
      res.status(201).json({
        message: "Food item created successfully",
      });
    } else {
      res.status(400);
      throw new Error("Food item creation failed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error creating food item",
      error: err.message,
    });
  }
});

const editFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.b HERE */
  try {
    const fooditemId = req.params.id;

    if (!fooditemId) {
      res.status(400);
      throw new Error("Food item id is required");
    }

    const result = await fooditemRepository.editFooditem(fooditemId, req.body);

    if (result) {
      res.status(200).json({
        message: "Food item is successfully edited",
      });
    } else {
      res.status(400);
      throw new Error("Food item editing failed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error editing food item details",
      error: err.message,
    });
  }
});

const deleteFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.c HERE */
  try {
    const fooditemId = req.params.id;

    if (!fooditemId) {
      res.status(400);
      throw new Error("Food item id is required");
    }

    const result = await fooditemRepository.deleteFooditem(fooditemId);

    if (result) {
      res.status(200).json({
        message: "Food item is successfully deleted",
      });
    } else {
      res.status(400);
      throw new Error("Food item deletion failed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error deleting food item",
      error: err.message,
    });
  }
});

const getFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.d HERE */
  try {
    const fooditemId = req.params.id;

    if (!fooditemId) {
      res.status(400);
      throw new Error("Food item id is required");
    }

    const result = await fooditemRepository.getFooditem(fooditemId);

    if (result) {
      res.status(200).json({
        data: result,
        message: "Successfully fetched food item details.",
      });
    } else {
      res.status(204);
      throw new Error(
        `Not able to find the food item based on the food item id: ${fooditemId}`
      );
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error fetching food item details",
      error: err.message,
    });
  }
});

const getAllFooditems = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.e HERE */
  try {
    const result = await fooditemRepository.getAllFooditems();
    res.status(200).json({
      data: result,
      message: "Successfully fetched all food items.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error fetching food items",
      error: err.message,
    });
  }
});

module.exports = {
  createFooditem,
  editFooditem,
  deleteFooditem,
  getFooditem,
  getAllFooditems,
};
