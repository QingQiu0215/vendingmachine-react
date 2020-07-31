import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class Purchase extends Component {
  state = {};
  render() {
    let itemPlaceholder = "";
    if (this.props.selectedItemId != -1) {
      itemPlaceholder = this.props.selectedItemId;
    }
    return (
      <Col>
        <Row className="justify-content-center">
          <h3>Messages</h3>
        </Row>
        <Row className="justify-content-center">
          <Form>
            <Form.Group controlId="showMessages">
              <Form.Control
                readOnly
                type="text"
                placeholder={this.props.showMessage}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 3, offset: 0 }}>
            <h3>Item:</h3>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <Form>
              <Form.Group controlId="showItemId">
                <Form.Control
                  readOnly
                  type="text"
                  placeholder={itemPlaceholder}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 6, offset: 2 }}>
            <Button variant="secondary" onClick={this.props.handleMakePurchase}>
              Make purchase
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Purchase;
