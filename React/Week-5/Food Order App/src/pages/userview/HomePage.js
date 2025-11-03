import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRestaurants } from "../../actions/restaurantActions";
import { listCategories } from "../../actions/categoryActions";
import { listCuisines } from "../../actions/cuisineActions";
import AlertMessage from "../../components/AlertMessage";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [restaurantsList, setRestaurantsList] = useState();
  const [categoriesList, setCategoriesList] = useState();
  const [cuisinesList, setCuisinesList] = useState();

  const listOfRestaurants = useSelector((state) => state.restaurantList);
  const listOfCategories = useSelector((state) => state.categoryList);
  const listOfCuisines = useSelector((state) => state.cuisineList);

  const { loadingRestaurants, errorRestaurants, restaurants } =
    listOfRestaurants;
  const { loadingCategories, errorCategories, categories } = listOfCategories;
  const {
    loading: loadingCuisines,
    error: errorCuisines,
    cuisines,
  } = listOfCuisines;

  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
      dispatch(listRestaurants());
      dispatch(listCategories());
      dispatch(listCuisines());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  useEffect(() => {
    if (restaurants && restaurants.length > 0) {
      setRestaurantsList(restaurants);
    }
    if (categories && categories.length > 0) {
      setCategoriesList(categories);
    }
    if (cuisines && cuisines.length > 0) {
      setCuisinesList(cuisines);
    }
  }, [restaurants, categories, cuisines]);

  return (
    <>
      {(loadingRestaurants || loadingCategories || loadingCuisines) && (
        <Spinner animation="grow" />
      )}

      {cuisinesList && cuisinesList.length === 0 && (
        <AlertMessage variant="info" message="No cuisines to display" />
      )}
      {cuisinesList && (
        <div className="container-fluid">
          <h4>Try New Cuisines</h4>
          <Row className="g-4">
            {cuisinesList.map((cuisine) => (
              <Col key={cuisine.id} md={6} sm={12} lg={3}>
                <ItemCard item={cuisine} itemName="cuisine" />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {categoriesList && categoriesList.length === 0 && (
        <AlertMessage variant="info" message="No categories to display" />
      )}
      {categoriesList && (
        <div className="container-fluid">
          <h4>Browse By Category</h4>
          <Row className="g-4">
            {categoriesList.map((category) => (
              <Col key={category.id} md={6} sm={12} lg={3}>
                <ItemCard item={category} itemName="category" />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {restaurantsList && restaurantsList.length === 0 && (
        <AlertMessage variant="info" message="No restaurants to display" />
      )}
      {restaurantsList && (
        <div className="container-fluid">
          <h4>Popular Restaurants</h4>
          <Row className="g-4">
            {restaurantsList.map((restaurant) => (
              <Col key={restaurant._id} md={6} sm={12} lg={4}>
                <ItemCard item={restaurant} itemName="restaurant" />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {(errorCuisines || errorCategories || errorRestaurants) && (
        <AlertMessage
          variant="danger"
          message={errorCuisines || errorCategories || errorRestaurants}
        />
      )}
    </>
  );
};

export default HomePage;
