import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL1 } from "../constants";

class NewNICForm extends React.Component {
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

  createNIC = e => {
    e.preventDefault();
    axios.post(API_URL1, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editNIC = e => {
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
      <Form onSubmit={this.props.router ? this.editNIC : this.createNIC}>
        <FormGroup>
          <Label for="id">NIC ID:</Label>
          <Input
            type="number"
            name="nic_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.nic_id)}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="server_id">Server ID:</Label>
          <Input
            type="number"
            name="server_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.server_id)}
          />
        </FormGroup>
         <FormGroup>
          <Label for="ip_address">IP Address:</Label>
          <Input
            type="number"
            name="ip_address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ip_address)}
          />
        </FormGroup>
        
        <Button>Add Network Interface Card</Button>
      </Form>
    );
  }
}

export default NewNICForm;
