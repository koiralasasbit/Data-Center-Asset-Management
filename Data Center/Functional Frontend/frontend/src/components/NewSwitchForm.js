import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL1 } from "../constants";

class NewSwitchForm extends React.Component {
  state = {
    pk: 0,
    routers_id: 0,
    rack_id: 0,
    //location_name: 0
  };

  componentDidMount() {
    if (this.props.router) {
      const { pk, routers_id, rack_id} = this.props.router;
      this.setState({ pk, routers_id, rack_id});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSwitch = e => {
    e.preventDefault();
    axios.post(API_URL1, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSwitch = e => {
    e.preventDefault();
    axios.put(API_URL1 + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.router ? this.editSwitch : this.createSwitch}>
        <FormGroup>
          <Label for="switch_id">Switch Id:</Label>
          <Input
            type="number"
            name="switch_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.switch_id)}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="router_id">Router Id:</Label>
          <Input
            type="number"
            name="router_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.router_id)}
          />
        </FormGroup>
         <FormGroup>
          <Label for="network_name">Network Name:</Label>
          <Input
            type="number"
            name="network_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.router_id)}
          />
        </FormGroup>
        
        <Button>Add Switch</Button>
      </Form>
    );
  }
}

export default NewSwitchForm;
