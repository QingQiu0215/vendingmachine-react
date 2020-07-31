import React, { Component } from "react";

import { Button, Row, Col, Form } from "react-bootstrap";

class MoneyInput extends Component {
  state = {};
  render() {
    let amountPlaceholder = "";
    if (this.props.totalMoney != 0) {
      amountPlaceholder = this.props.totalMoney.toFixed(2);
    }
    return (
      <Col>
        <Row className="justify-content-center">
          <h3>Total $ In</h3>
        </Row>
        <Row className="justify-content-center">
          <Form>
            <Form.Group controlId="showTotalMoney">
              <Form.Control
                readOnly
                type="text"
                placeholder={amountPlaceholder}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 5, offset: 2 }}>
            <Button
              variant="secondary"
              onClick={() => this.props.handleAddDeposit(1)}
            >
              Add Dollar
            </Button>
          </Col>
          <Col md={{ span: 5, offset: 0 }}>
            <Button
              variant="secondary"
              onClick={() => this.props.handleAddDeposit(0.25)}
            >
              Add Quarter
            </Button>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center">
          <Col md={{ span: 5, offset: 2 }}>
            <Button
              variant="secondary"
              onClick={() => this.props.handleAddDeposit(0.1)}
            >
              Add Dime
            </Button>
          </Col>
          <Col md={{ span: 5, offset: 0 }}>
            <Button
              variant="secondary"
              onClick={() => this.props.handleAddDeposit(0.5)}
            >
              Add Nickel
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default MoneyInput;
