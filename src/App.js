import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import MoneyInput from "./components/MoneyInput";
import Purchase from "./components/Purchase";
import Change from "./components/Change";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SERVICE_URL = "http://tsg-vending.herokuapp.com";

class App extends Component {
  state = {
    total: 0,
    selectedItemId: -1,
    Message: "",
    itemData: [
      {
        id: 1,
        name: "3D Printer - PLA",
        price: 749.99,
        quantity: 6,
      },
    ],
    finalChange: {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    },
  };

  handleAddDeposit = (value) => {
    let temp = this.state.total + value;
    this.setState({ total: temp });
  };

  componentDidMount() {
    console.log("App is now mounted.");
    this.loadProductData();
  }

  loadProductData() {
    this.setState({ loading: true });
    console.log("Loading product data");
    fetch(SERVICE_URL + "/items")
      .then((data) => data.json())
      .then((data) => this.setState({ itemData: data }));
  }

  selectItem = (value) => {
    console.log(value);
    this.setState({ selectedItemId: value });
  };

  handleClearTransction = () => {
    this.setState({
      total: 0,
      selectedItemId: -1,
      Message: "",
      finalChange: { quarters: 0, dimes: 0, nickels: 0, pennies: 0 },
    });
  };

  handleMakePurchase = (event) => {
    console.log("make purchase");
    let amount = this.state.total.toFixed(2);
    let id = this.state.selectedItemId;
    fetch(SERVICE_URL + "/money/" + amount + "/item/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status!=200) {
          response.json().then((data) => {
            console.log( data.message);
            this.setState({ Message: data.message });
          });
          throw Error("");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          finalChange: data,
          selectedItemId: -1,
          total: 0,
          Message: "Thank You!!!",
        });
        this.loadProductData();
      })
      .catch((error) => {
        console.log("Purchase error:", error.message);
      });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1>Vending Machine</h1>
        </Row>
        <hr />
        <Row>
          <hr />
        </Row>
        <Row>
          <Col sm={8}>
            <ProductList
              itemData={this.state.itemData}
              selectItem={this.selectItem}
            />
          </Col>
          <Col sm={4}>
            <Row>
              <MoneyInput
                totalMoney={this.state.total}
                handleAddDeposit={this.handleAddDeposit}
              />
            </Row>
            <hr />
            <Row>
              <Purchase
                selectedItemId={this.state.selectedItemId}
                handleMakePurchase={this.handleMakePurchase}
                showMessage={this.state.Message}
              />
            </Row>
            <hr />
            <Row>
              <Change
                finalChange={this.state.finalChange}
                handleClearTransction={this.handleClearTransction}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
