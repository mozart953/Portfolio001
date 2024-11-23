import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dotDogger from "../../Assets/dot-doger.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import RandomCard from "./RandomCard";
import Programador from "../../Assets/programador.png";
import Cat from "../../Assets/gato.png";
import Guitar from "../../Assets/guitarrista.png";
import Pickles from "../../Assets/pepino.png";
import philosopher from "../../Assets/filosofo.png";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                
                <strong className="main-name"> Dot Dager</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={dotDogger}
                alt="Dager"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <RandomCard 
              title1={"WHY"} 
              title2={"HAIRY CATS?"} 
              text={"I love cats because of their independence and unique personalities. They can be aloof, doing their own thing, but then come over for affection when they feel like it. I appreciate how they balance being self-sufficient with moments of warmth and connection. Their graceful movements and soft fur are soothing to me, and I find their quiet, subtle ways of communicating—whether through a purr or a look—really intriguing. Cats are mysterious but comforting, and that mix makes them so special."} 
              image={Cat} 
            />
          </div>
          <div className="col-md-6 mb-4">
            <RandomCard 
              title1={"WHY"} 
              title2={"PROGRAMMING?"} 
              text={"I love programming because it feels like solving puzzles. There's something incredibly satisfying about breaking down a problem into smaller parts and figuring out how to make everything work together. It's like having a toolset that lets me build anything from scratch, whether it’s a small script or a complex application. The challenge of debugging and improving code also keeps me engaged—it’s a constant learning process where you’re always getting better. Plus, the impact is real; seeing something you’ve created actually run and be useful feels incredibly rewarding. The creativity, logic, and endless possibilities are what keep me hooked."} 
              image={Programador} 
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <RandomCard 
              title1={"WHY"} 
              title2={"GUITARS?"} 
              text={"I love guitars because they’re incredibly versatile and expressive. You can create such a wide range of sounds, from soft, melodic tunes to powerful, energetic riffs. It’s an instrument that strikes a perfect balance between technique and emotion—you can study music theory and hone your skills, but you can also play more instinctively, letting the music flow. What I really enjoy is how the guitar lets you connect directly with the music. Holding it and playing, you feel like every note is in your hands; it’s a very personal way to express yourself. The guitar also has this power to connect you with others, whether it’s in a band or just jamming with friends. For me, it always feels like a tool for freedom and creativity."} 
              image={Guitar} 
            />
          </div>
          <div className="col-md-6 mb-4">
            <RandomCard 
              title1={"WHY"} 
              title2={"PHILOSOPHY?"} 
              text={"I love philosophy because it challenges me to think deeply and question everything around me. It’s like an endless exploration of ideas, pushing me to understand not just what things are, but why they are the way they are. Philosophy forces me to look at life from different angles and consider perspectives I might never have thought of on my own. What really draws me in is the pursuit of meaning and truth. Whether it’s exploring ethics, existence, or the nature of knowledge, philosophy helps me understand the bigger picture. It’s not just about finding answers, but about the process of questioning and reflecting that makes it so engaging. Philosophy encourages curiosity and fosters a mindset of continuous learning. It feels like a constant conversation with the great thinkers of history, helping me refine my own beliefs and see the world in new, more thoughtful ways."} 
              image={philosopher} 
            />
          </div>
        </div>
      </div>


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
    </section>
  );
}

export default Home;
