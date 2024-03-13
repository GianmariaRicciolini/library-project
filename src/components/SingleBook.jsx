import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function SingleBook(props) {
  return (
    <Col sm={6} lg={4} xl={3} key={props.asin}>
      <Card className="m-auto" style={{ height: "fit-content", width: "300px" }}>
        <Card.Img variant="top" src={props.img} alt={props.title} style={{ objectFit: "cover", height: "400px" }} />
        <Card.Body className="d-flex flex-column justify-content-around">
          <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {props.title}
          </Card.Title>
          <Card.Text>
            <strong>Price:</strong> {props.price}$
          </Card.Text>
          <Button className="w-50" variant="success">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
