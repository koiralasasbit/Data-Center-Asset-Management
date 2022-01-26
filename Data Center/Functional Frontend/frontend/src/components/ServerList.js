import React, { Component } from "react";
import { Table } from "reactstrap";
import NewServerModal from "./NewServerModal";

import RemoveServer from "./RemoveServer";

class ServerList extends Component {
  render() {
    const servers = this.props.servers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Server ID</th>
            <th>PatchPanel ID</th>
            <th>Owner ID</th>
          </tr>
        </thead>
        <tbody>
          {!servers || servers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Add a Server !!!</b>
              </td>
            </tr>
          ) : (
            servers.map(server => (
              <tr key={server.pk}>
                <td>{server.ids}</td>
                <td>{server.size}</td>
                <td align="center">
                  <NewServerModal
                    create={false}
                    server={server}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <RemoveServer
                    pk={server.pk}
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

export default ServerList;
