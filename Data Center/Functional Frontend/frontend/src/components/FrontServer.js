import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ServerList from "./ServerList";
import NewServerModal from "./NewServerModal";

import axios from "axios";

import { API_URL } from "../constants";

class FrontServer extends Component {
  state = {
    servers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getServers = () => {
    axios.get(API_URL).then(res => this.setState({ servers: res.data }));
  };

  resetState = () => {
    this.getServers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ServerList
              servers={this.state.servers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewServerModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
    
  }
}

export default FrontServer;
