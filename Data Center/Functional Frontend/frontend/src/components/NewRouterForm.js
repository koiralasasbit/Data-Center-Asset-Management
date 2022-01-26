import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL1 } from "../constants";

class NewRouterForm extends React.Component {
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

  createRouter = e => {
    e.preventDefault();
    axios.post(API_URL1, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editRouter = e => {
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
      <Form onSubmit={this.props.router ? this.editRouter : this.createRouter}>
        <FormGroup>
          <Label for="rack_id">Rack Id:</Label>
          <Input
            type="number"
            name="rack_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.rack_id)}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="routers_id">Router Id:</Label>
          <Input
            type="number"
            name="routers_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.routers_id)}
          />
        </FormGroup>
        
        <Button>Add Router</Button>
      </Form>
    );
  }
}

export default NewRouterForm;
