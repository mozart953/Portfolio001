import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/falopa2.jpg";
import pepinoxd from "../../Assets/Rick-cucumber.png"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
         <Col md={2} className="pepino d-flex d-flex justify-content-center mt-10 mb-3">
            <Tilt>
              <img src={pepinoxd} className="img-fluid" alt="pepino" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description d-flex justify-content-center mt-5">
            <h1 style={{ fontSize: "2.8em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
          </Col>
          <Col md={2} className="pepino d-flex d-flex justify-content-center mt-10 mb-3">
            <Tilt>
              <img src={pepinoxd} className="img-fluid" alt="pepino" />
            </Tilt>
          </Col>
          <Col md={6} className="home-about-description">
            <p className="home-about-body">
            I’m a content creator who loves 
             <b className="purple"> programming , cats, guitars, pickles, and philosophy</b>
            … 🤷‍♂️
              <br />
              <br />In summary, I have an unhealthy obsession with  
              <i>
                <b className="purple"> cucumbers and almost always say FALOPA</b> for no reason at all.
              </i>
              <br />
             
            </p>
          </Col>
 
          <Col md={6} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MarianoVilla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Dager_32"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dager.32/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@DagerLive"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
