import fantasy from "../data-library/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AllTheBooks() {
  return (
    <Container fluid>
      <Row>
        {fantasy.map((book, index) => (
          <Col>
            <Card key={index} style={{ width: "18rem", height: "" }}>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {book.price}$
                </Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
