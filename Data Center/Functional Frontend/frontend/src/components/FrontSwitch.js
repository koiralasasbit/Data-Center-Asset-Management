import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SwitchList from "./SwitchList";
import NewSwitchModal from "./NewSwitchModal";

import axios from "axios";

import { API_URL } from "../constants";

class FrontSwitch extends Component {
  state = {
    switchs: []
  };

  componentDidMount() {
    this.resetState();
  }

  getSwitchs = () => {
    axios.get(API_URL).then(res => this.setState({ switchs: res.data }));
  };

  resetState = () => {
    this.getSwitchs();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <SwitchList
              switchs={this.state.switchs}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewSwitchModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
    
  }
}

export default FrontSwitch;
