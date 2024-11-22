import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import TypeZwei from "../Home/TypeZwei";

function  More() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      <Row className="d-flex justify-content-center">
            <Col md={7} className="home-header">
               <div style={{ padding: 50, textAlign: "left" }}>
                <TypeZwei />
              </div>
            </Col>
          </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default More;
