import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RackList from "./RackList";
import NewRackModal from "./NewRackModal";

import axios from "axios";

import { API_URL } from "../constants";

class FrontRack extends Component {
  state = {
    racks: []
  };

  componentDidMount() {
    this.resetState();
  }

  getRacks = () => {
    axios.get(API_URL).then(res => this.setState({ racks: res.data }));
  };

  resetState = () => {
    this.getRacks();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <RackList
              racks={this.state.racks}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewRackModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
    
  }
}

export default FrontRack;
