/* use food_order_app database */
use food_order_app;

/* 1. Retrieve number of fooditems for each cuisine */
SELECT cuisine.name, COUNT(fooditem.id) AS fooditem_count
FROM cuisine
LEFT JOIN fooditem ON cuisine.id = fooditem.cuisineId
GROUP BY cuisine.name;

/* 2. Retrieve category names in the order of highest to lowest no. of fooditems */
SELECT category.name, COUNT(fooditem.id) AS fooditem_count
FROM category
LEFT JOIN fooditem ON category.id = fooditem.categoryId
GROUP BY category.name
ORDER BY fooditem_count DESC;

/* 3. Retrieve cuisine name as CuisineName, fooditem name as name FoodItemName 
and description as Description of all the fooditems belonging to 'Italian' cuisine */
SELECT cuisine.name AS CuisineName, fooditem.name AS FoodItemName, fooditem.description AS Description
FROM fooditem
JOIN cuisine ON fooditem.cuisineId = cuisine.id
WHERE cuisine.name = 'Italian';

/* 4. Retrieve details of food items, including their name, vegetarian status,
 and cuisine name, for only those food items that are vegetarian. */
SELECT fooditem.name, fooditem.isVeg, cuisine.name AS cuisine_name
FROM fooditem
JOIN cuisine ON fooditem.cuisineId = cuisine.id
WHERE fooditem.isVeg = 1;

/* 5. Retrieve the details of users who have items in their cart 
along with the total order amount */
SELECT user.id, user.userName, user.fullName, cart.orderTotalPrice
FROM user
JOIN cart ON user.id = cart.userId;
