import React, { Component } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";

let serialNo=-1;
const ProductItem = ({ item, selectItem }) => {
    
  return (
      
    <Col sm={4}>
      <Button
        variant="outline-secondary"
        size="xs"
        block
        onClick={() => selectItem(item.id)}
      >
        <Row>
          <Col md={{ span: 1, offset: 0 }}>{serialNo++}</Col>
        </Row>
        <br />
        <Row className="justify-content-center">{item.name}</Row>
        <Row className="justify-content-center">${item.price}</Row>
        <br />
        <br />
        <Row className="justify-content-center">
          Quantity Left: {item.quantity}
        </Row>
      </Button>
      <br />
    </Col>
  );
};

class ProductList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.itemData.map((item, i) => {
          return (
            <ProductItem
              item={item}
              key={i}
              selectItem={this.props.selectItem}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
