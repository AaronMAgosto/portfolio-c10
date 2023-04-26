import { Col, Container, Row } from "react-bootstrap";


export default function About() {

  return(
    <section>
      <Container>
        <Row className="bg-danger">
          <Col>
          <img src="https://picsum.photos/300/300"
          alt="profile pict"/>  
         </Col>

         <Col>
         <h1>Hey I'm Aaron </h1>
         <p>I cant type as fast as jiho</p>
         <p>contact me at 954-701-5274</p>
         
         </Col>
        </Row>
      </Container>
   </section>
 ) 
}