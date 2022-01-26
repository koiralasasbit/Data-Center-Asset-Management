import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NICList from "./NICList";
import NewNICModal from "./NewNICModal";

import axios from "axios";

import { API_URL } from "../constants";

class FrontNIC extends Component {
  state = {
    nics: []
  };

  componentDidMount() {
    this.resetState();
  }

  getNICs = () => {
    axios.get(API_URL).then(res => this.setState({ nics: res.data }));
  };

  resetState = () => {
    this.getNICs();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <NICList
              nics={this.state.nics}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewNICModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
    
  }
}

export default FrontNIC;
