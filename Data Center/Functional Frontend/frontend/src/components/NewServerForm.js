import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL1 } from "../constants";

class NewServerForm extends React.Component {
  state = {
    pk: 0,
    servers_id: 0,
    patchpanel_id: 0,
    //location_name: 0
  };

  componentDidMount() {
    if (this.props.router) {
      const { pk, servers_id, server_id} = this.props.router;
      this.setState({ pk, servers_id, server_id});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createServer = e => {
    e.preventDefault();
    axios.post(API_URL1, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editServer = e => {
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
      <Form onSubmit={this.props.router ? this.editServer : this.createServer}>
        <FormGroup>
          <Label for="servers_id">Server Id:</Label>
          <Input
            type="number"
            name="servers_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.servers_id)}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="patchpanel_id">Patchpanel Id:</Label>
          <Input
            type="number"
            name="patchpanel_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.patchpanel_id)}
          />
        </FormGroup> 
        <FormGroup>
          <Label for="owner_id">Owner Id:</Label>
          <Input
            type="number"
            name="owner_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.patchpanel_id)}
          />
        </FormGroup>
        
        <Button>Add Server</Button>
      </Form>
    );
  }
}

export default NewServerForm;
