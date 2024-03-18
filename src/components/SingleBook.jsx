import CommentArea from "./CommentArea";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleBook = (props) => {
  const { title, img, price, isSelected, onBookSelect, id } = props;
  return (
    <Col sm={6} lg={4} xl={3} key={id}>
      <Card className="m-auto shadow" style={{ height: "fit-content", width: "300px" }}>
        <Card.Img
          variant="top"
          src={img}
          alt={title}
          style={{ objectFit: "cover", height: "400px" }}
          className={isSelected ? "m-auto shadow selected-card" : "m-auto shadow "} //se la foto è selezionata aggiungi la classe selected-car, altrimenti cancellala
          onClick={() => onBookSelect(id)}
        />
        <Card.Body className="d-flex flex-column justify-content-around">
          <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {title}
          </Card.Title>
          <Card.Text>
            <p>
              <span className="fw-bold">Price:</span> {price}$
            </p>
          </Card.Text>
          {isSelected && <CommentArea elementId={id} />}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;

// function SingleBook(props) {
//   return (
//     <Col sm={6} lg={4} xl={3} key={props.asin}>
//       <Card className="m-auto" style={{ height: "fit-content", width: "300px" }}>
//         <Card.Img variant="top" src={props.img} alt={props.title} style={{ objectFit: "cover", height: "400px" }} />
//         <Card.Body className="d-flex flex-column justify-content-around">
//           <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//             {props.title}
//           </Card.Title>
//           <Card.Text>
//             <strong>Price:</strong> {props.price}$
//           </Card.Text>
//           <Button className="w-50" variant="success">
//             Buy Now
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }
