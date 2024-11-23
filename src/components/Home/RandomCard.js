import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function RandomCard({title1, title2, text, image}) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description d-flex justify-content-center">
            <h1 style={{ fontSize: "1.5em" }}>
              {title1}<span className="purple"> {title2}</span>
            </h1>
          </Col>

          <Col md={6} className="home-about-description">
            <p className="home-about-body">
                {text}             
            </p>
          </Col>
 
          <Col md={6} className="myAvtar">
            <Tilt>
              <img src={image} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default RandomCard;
