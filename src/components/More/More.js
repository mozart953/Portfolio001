import {React, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Particle from "../Particle";
import Github from "./Github";
import TypeZwei from "../Home/TypeZwei";
//import Game from "../Game/Game";
import EmbeddedPage from "../Game/EmbeddedPage";
import {
  AiFillPlayCircle

} from "react-icons/ai";

function  More() {
  const [show, setShow] = useState(false);
  return (
    <Container fluid className="about-section">
      <Particle />
      
      <Container>
      <Row className="d-flex justify-content-center mt-2">
        <Col md={7} className="home-header">
               <div style={{ padding: 50, textAlign: "center" }}>
                <TypeZwei />
              </div>
        </Col>
      </Row>
      <Button 
          variant="primary"
          className="mb-5"
          onClick={() => setShow(true)}
          style={{
            position: 'relative',   // Asegura que el botón sea parte del flujo normal y esté encima de otros elementos
            zIndex: 10,             // Le da una prioridad sobre otros elementos con menor z-index
            pointerEvents: 'auto',  // Asegura que el botón sea clickeable
          }}
        >
          <AiFillPlayCircle />
           <strong> Let's Play LumberJack</strong>
      </Button>
        <Github />
        
        {/* <Game /> */}
       
        
      </Container>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="primary"
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
            <EmbeddedPage />

        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default More;
