import React, { Component } from "react";
import { Table } from "reactstrap";
import NewNICModal from "./NewNICModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class NICList extends Component {
  render() {
    const nics = this.props.nics;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Server ID</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {!nics || nics.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Add a NIC !!!</b>
              </td>
            </tr>
          ) : (
            nics.map(nic => (
              <tr key={nic.pk}>
                <td>{nic.ids}</td>
                <td>{nic.size}</td>
                <td align="center">
                  <NewNICModal
                    create={false}
                    nic={nic}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={nic.pk}
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

export default NICList;
