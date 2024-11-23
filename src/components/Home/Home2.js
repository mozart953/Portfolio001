import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/falopa2.jpg";
import pepinoxd from "../../Assets/Rick-cucumber.png";
import Tilt from "react-parallax-tilt";
import falopa02 from "../../Assets/falopa02.jpg";


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
              LET ME <b className="purple"> INTRODUCE </b> MYSELF
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
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={falopa02} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={7} className="home-about-description">
            <p className="home-about-body">
              <br />
              This space is designed to inspire those interested in <b className="purple">technology</b>, especially <b className="purple">programming</b>, because I believe <b className="purple">technology</b> has the power to <b className="purple">transform</b> the world. <b className="purple">Programming</b> is not just a <b className="purple">technical skill</b>; it’s a gateway to <b className="purple">creativity</b>, <b className="purple">problem-solving</b>, and <b className="purple">innovation</b>. Through <b className="purple">code</b>, we can build <b className="purple">solutions</b> that improve lives, <b className="purple">automate tasks</b>, and <b className="purple">connect people globally</b>.

              <b className="purple">Programming</b> also encourages <b className="purple">logical thinking</b> while fueling <b className="purple">curiosity</b> and <b className="purple">imagination</b>. It’s about more than just writing <b className="purple">code</b>—it’s about understanding the world and finding new ways to solve everyday challenges. This space aims to <b className="purple">motivate</b> and <b className="purple">connect</b> those passionate about <b className="purple">learning</b>, <b className="purple">growing</b>, and using <b className="purple">technology</b> to create <b className="purple">change</b>. The ever-evolving nature of <b className="purple">tech</b> offers endless opportunities to <b className="purple">innovate</b>, and <b className="purple">programming</b> is the key to unlocking those possibilities.
            </p>
          </Col>

        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
