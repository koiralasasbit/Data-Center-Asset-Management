import React, { Component } from "react";
import { Table } from "reactstrap";
import NewRackModal from "./NewRackModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class RackList extends Component {
  render() {
    const racks = this.props.racks;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Id</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {!racks || racks.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Add a Rack !!!</b>
              </td>
            </tr>
          ) : (
            racks.map(rack => (
              <tr key={rack.pk}>
                <td>{rack.ids}</td>
                <td>{rack.size}</td>
                <td align="center">
                  <NewRackModal
                    create={false}
                    rack={rack}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={rack.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default RackList;
