import fantasy from "../data-library/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

function BookList() {
  return (
    <Container fluid>
      <Row className="gy-3">
        {fantasy.map((book) => (
          <SingleBook
            key={book.asin}
            asin={book.asin}
            title={book.title}
            img={book.img}
            price={book.price}
            category={book.category}
          />
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
