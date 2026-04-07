import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default function Home() {
  const history = useHistory();

  const GoToContactUs = () => {
    history.push("/contact");
  };
  return (
    <>
      <div className="bg-primary text-white vh-100 d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-3 fw-bold mb-3">Welcome 👋</h1>

              <p className="lead mb-4">
                We’re happy to have you here. Explore and enjoy your journey.
              </p>

              <Button
                variant="outline-light"
                size="lg"
                onClick={() => {
                  GoToContactUs();
                }}
              >
                Go to Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
