import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class Change extends Component {
  state = {};

  render() {
    let changePlaceholder = "";
    let changes = this.props.finalChange;
    if (changes.quarters != 0) {
      changePlaceholder += changes.quarters;
      changePlaceholder += " quarter ";
    }
    if (changes.dimes != 0) {
      changePlaceholder += changes.dimes;
      changePlaceholder += " dime ";
    }
    if (changes.nickels != 0) {
      changePlaceholder += changes.nickels;
      changePlaceholder += " nickel ";
    }
    if (changes.pennies != 0) {
      changePlaceholder += changes.pennies;
      changePlaceholder += " pennie";
    }
    console.log(changePlaceholder);
    return (
      <Col>
        <Row className="justify-content-center">
          <h3>Change</h3>
        </Row>
        <Row className="justify-content-center">
          <Form>
            <Form.Group controlId="showMessages">
              <Form.Control
                readOnly
                type="text"
                placeholder={changePlaceholder}
              />
            </Form.Group>
          </Form>
        </Row>

        <Row className="justify-content-center">
          <Col md={{ span: 19, offset: 1 }}>
            <Button
              variant="secondary"
              onClick={this.props.handleClearTransction}
            >
              Change return
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Change;
