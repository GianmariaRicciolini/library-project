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
        {fantasy.map((book) => (
          <Col sm={6} lg={4} xl={3} key={book.asin}>
            <Card className="m-auto" style={{ height: "fit-content", width: "300px" }}>
              <Card.Img variant="top" src={book.img} alt={book.title} style={{ objectFit: "cover", height: "400px" }} />
              <Card.Body className="d-flex flex-column justify-content-around">
                <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {book.title}
                </Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {book.price}$
                </Card.Text>
                <Button className="w-50" variant="success">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
