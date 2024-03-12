import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyFooter() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col>
            <p>Footer della pagina</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
