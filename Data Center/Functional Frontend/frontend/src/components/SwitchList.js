import React, { Component } from "react";
import { Table } from "reactstrap";
import NewSwitchModal from "./NewSwitchModal";

import RemoveSwitch from "./RemoveSwitch";

class SwitchList extends Component {
  render() {
    const routers = this.props.routers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Switch Id</th>
            <th>Router Id</th>
            <th>Network Name</th>
          </tr>
        </thead>
        <tbody>
          {!routers || routers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Add a switch !!!!!!</b>
              </td>
            </tr>
          ) : (
            routers.map(router => (
              <tr key={router.pk}>
                <td>{router.routers_id}</td>
                <td>{router.location_name}</td>
                <td>{router.routers_id}</td>
                <td align="center">
                  <NewSwitchModal
                    create={false}
                    router={router}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <RemoveSwitch
                    pk={router.pk}
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

export default SwitchList;
