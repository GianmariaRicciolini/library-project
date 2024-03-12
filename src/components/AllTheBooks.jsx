import fantasy from "../data-library/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AllTheBooks() {
  return (
    <Container fluid>
      <Row className="gy-3">
        {fantasy.map((book, index) => (
          <Col xs={6} md={4} lg={3} xl={2} key={index}>
            <Card style={{ height: "20rem" }}>
              <Card.Img
                variant="top"
                src={book.img}
                alt={book.title}
                style={{ objectFit: "contain", height: "50%", width: "100%" }}
              />
              <Card.Body>
                <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {book.title}
                </Card.Title>
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
