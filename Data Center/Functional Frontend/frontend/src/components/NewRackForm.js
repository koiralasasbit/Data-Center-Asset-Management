import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewRackForm extends React.Component {
  state = {
    pk: 0,
    ids: 0,
    size: 0
  };

  componentDidMount() {
    if (this.props.rack) {
      const { pk, ids, size} = this.props.rack;
      this.setState({ pk, ids, size});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createRack = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editRack = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.rack ? this.editRack : this.createRack}>
        <FormGroup>
          <Label for="ids">Id:</Label>
          <Input
            type="number"
            name="ids"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ids)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="size">Size:</Label>
          <Input
            type="number"
            name="size"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.size)}
          />
        </FormGroup>
        
        <Button>Add Rack</Button>
      </Form>
    );
  }
}

export default NewRackForm;
