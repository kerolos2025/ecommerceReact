import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig/AxiosConfig";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./products.css";
import { Link } from "react-router-dom";

export default function Products({ search }) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    console.log("search", search);
    const url = search
      ? `products/search?q=${search}&limit=200`
      : `products?limit=200`;
    axiosInstance
      .get(url)
      .then((res) => {
        console.log(res.data.products);
        setProductsData(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {productsData.map((prod, index) => {
          return (
            <Col key={index}>
              <Card className="carditem h-100">
                <Card.Img
                  variant="top"
                  style={{ height: "260px", borderRadius: "5px" }}
                  src={prod.thumbnail}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Text>{prod.description}</Card.Text>
                  <div className="d-flex justify-content-between mt-auto">
                    <Button
                      variant="primary"
                      as={Link}
                      to={`/details/${prod.id}`}
                    >
                      View Details
                    </Button>

                    <Button
                      variant="success"
                      as={Link}
                      to={`/cart?name=${prod.title}`}
                    >
                      Add to Cart{" "}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
