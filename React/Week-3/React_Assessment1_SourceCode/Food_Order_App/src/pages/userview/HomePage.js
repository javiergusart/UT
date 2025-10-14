import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import cuisines from "../../cuisines";
import categories from "../../categories";
import restaurants from "../../restaurants";

function HomePage() {
  return (
    <>
      <Container fluid>
        <h4 className="mt-4 mb-3">Try New Cuisines</h4>
        <Row xs={2} sm={3} md={4} lg={6} className="g-4">
          {cuisines.map((cuisine) => (
            <Col key={cuisine.id}>
              <ItemCard itemName="cuisine" item={cuisine} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid>
        <h4 className="mt-4 mb-3">Browse By Category</h4>
        <Row xs={2} sm={3} md={4} lg={6} className="g-4">
          {categories.map((category) => (
            <Col key={category.id}>
              <ItemCard itemName="category" item={category} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid>
        <h4 className="mt-4 mb-3">Popular Restaurants</h4>
        <Row xs={2} sm={3} md={4} lg={6} className="g-4">
          {restaurants.map((restaurant) => (
            <Col key={restaurant.id}>
              <ItemCard itemName="restaurant" item={restaurant} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
