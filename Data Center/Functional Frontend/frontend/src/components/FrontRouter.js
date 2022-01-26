import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RouterList from "./RouterList";
import NewRouterModal from "./NewRouterModal";

import axios from "axios";

import { API_URL1 } from "../constants";

class FrontRouter extends Component {
  state = {
    routers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getRouters = () => {
    axios.get(API_URL1).then(res => this.setState({ routers: res.data }));
  };

  resetState = () => {
    this.getRouters();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <RouterList
              routers={this.state.routers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewRouterModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
    
  }
}

export default FrontRouter;
