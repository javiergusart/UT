/*use food_order_app database */
use food_order_app;

/* 1. Display all distinct cuisine names. */
SELECT name AS cuisine_name
FROM cuisine;

/* 2. Display description of 'Cake' category. */
SELECT description
FROM category
WHERE name = 'Cake';

/* 3. Select all restaurants where restaurant names ends with 'Junction'. */
SELECT *
FROM restaurant
WHERE name LIKE '%Junction';

/* 4. Display details of all vegeterian fooditems. */
SELECT *
FROM fooditem
WHERE isVeg = 1;

/* 5. Retrieve all menu items with food items that have a price equal to or less than $10. */
SELECT mi.id,
	   mi.menuId,
	   f.name AS fooditem_name,
	   mi.fooditemPrice
FROM menu_items mi
JOIN fooditem f ON mi.fooditemId = f.id
WHERE mi.fooditemPrice <= 10;

/* 6.Retrieve cartId having the maximum number of food items. */
SELECT cartId
FROM (
	SELECT cartId, SUM(unitsInCart) AS total_units
	FROM cart_items
	GROUP BY cartId
	ORDER BY total_units DESC
	LIMIT 1
) AS t;

/* 7. Retrieve all the shipping details where emailId contains 'doe'. */
SELECT *
FROM shippingdetails
WHERE emailId LIKE '%doe%';

/* 8. Retrieve the order with the highest price. */
SELECT *
FROM `order`
ORDER BY orderTotalPrice DESC
LIMIT 1;
 
/* 9. Retrieve the most recently updated order. */
SELECT *
FROM `order`
ORDER BY updatedTs DESC
LIMIT 1;

/* 10. How many total units of food items were purchased in orderId 1? */
SELECT SUM(unitsPurchased) AS total_units_order_1
FROM order_items
WHERE orderId = 1;
