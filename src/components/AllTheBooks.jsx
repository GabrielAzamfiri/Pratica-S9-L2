import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/books/fantasy.json";
import { Row, Col } from "react-bootstrap";
import TopBar from "./TopBar";
console.log(TopBar)
class AllTheBooks extends Component  {
  state = {
    category: fantasy
  };
  render() {
    return (
      <Row>
        {this.state.category.map(book => {
            console.log(book)
          return (
            <Col sm={4} md={3} lg={2} key={`book-${book.asin}`}>
              <Card >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Price: {book.price}$ </Card.Text>
                  <Button variant="primary">Take a look</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}
export default AllTheBooks;
