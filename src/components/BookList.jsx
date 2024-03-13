import fantasy from "../data-library/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    searchName: "",
  };

  handleSearch = (e) => {
    this.setState({ searchName: e.target.value });
  };

  render() {
    const { searchName } = this.state;
    const filteredBooks = fantasy.filter((book) => book.title.toLowerCase().includes(searchName.toLowerCase()));

    return (
      <Container fluid>
        <Form.Group className="py-3">
          <Form.Label className="ps-1 fs-4">Search Your Book!</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search books..."
            value={searchName}
            onChange={this.handleSearch}
            className=" w-50 border-3 border-black"
          />
        </Form.Group>
        <Row className="gy-3">
          {filteredBooks.map((book) => (
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
}
export default BookList;

// function BookList() {
//     return (
//       <Container fluid>
//         <Row className="gy-3">
//           {fantasy.map((book) => (
//             <SingleBook
//               key={book.asin}
//               asin={book.asin}
//               title={book.title}
//               img={book.img}
//               price={book.price}
//               category={book.category}
//             />
//           ))}
//         </Row>
//       </Container>
//     );
//   }
