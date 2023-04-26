import { Col, Container, Row } from "react-bootstrap";

export default function Skill() {

  return(
    <Container>
      <Row>
        <Col className="text-center">
        <h2>Skills that pay the bills</h2>
        </Col>
      </Row>

      <Row>
        <Col>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>React Native</li>
          <li>CSS</li>
          <li>Express.js</li>
          <li>Firestore Data Bases</li>
        </ul>
        </Col>
      </Row>
    </Container>
  )

}