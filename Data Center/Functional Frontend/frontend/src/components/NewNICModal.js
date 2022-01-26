import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewNICForm from "./NewNICForm";

class NewNICModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing NIC";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New NIC";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New NIC
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewNICForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              rack={this.props.rack}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewNICModal;
