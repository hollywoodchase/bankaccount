import React, { Component } from "react";
import API from "../../utils/API";
import "../../style.css";
import { Col, Row, Container } from "../../components/Grid";
import {
  Photo,
  Name,
  Deposit,
  Withdraw,
  Balance,
  FormBtn,
} from "../../components/Form";

class Transactions extends Component {
  state = {
    holder: [],
    photo: "",
    name: "",
    balance: "",
    deposit: "",
    withdraw: "",
  };

  componentDidMount() {
    this.loadHolders();
  }

  loadHolders = () => {
    API.getHolders()
      .then((res) =>
        this.setState({
          holders: res.data,
          photo: "",
          name: "",
          balance: "",
          deposit: "",
          withdraw: "",
        })
      )
      .catch((err) => console.log(err));
  };

  deleteHolder = (id) => {
    API.deleteHolder(id)
      .then((res) => this.loadHolders())
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.deposit) {
      API.saveHolder({
        photo: this.state.photo,
        name: this.state.name,
        balance: this.state.balance,
        deposit: this.state.deposit,
        withdraw: this.state.withdraw,
      })
        .then((res) => this.loadHolders())
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row id="trans-row">
          <Col size="md-12">
            <form id="form">
              <Photo
                value={this.state.photo}
                src={this.state.photo}
                onChange={this.handleInputChange}
                name="photo"
                placeholder="0"
              />
            </form>
          </Col>
          <Col size="md-12">
            <form id="form">
              <Name
                innerText="Jojo"
                onChange={this.handleInputChange}
                name="name"
                placeholder="0"
              />
            </form>
          </Col>
          <Col size="md-12">
            <form id="form">
              <Balance
                value={this.state.balance}
                onChange={this.handleInputChange}
                name="balance"
                placeholder="0"
              />
            </form>
          </Col>
          <Col size="md-12">
            <form id="form">
              <Deposit
                value={this.state.deposit}
                onChange={this.handleInputChange}
                name="deposit"
                placeholder="Deposit"
              />
            </form>
          </Col>
          <Col size="md-12">
            <form id="form">
              <Withdraw
                value={this.state.withdraw}
                onChange={this.handleInputChange}
                name="withdraw"
                placeholder="Withdraw"
              />
            </form>
          </Col>
          <Col size="md-12">
            <form id="form">
              <FormBtn
                disabled={
                  !(
                    this.state.name &&
                    this.state.deposit &&
                    this.state.selection
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit Request
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Transactions;
