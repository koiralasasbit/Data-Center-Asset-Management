import React, { Component } from "react";
import { Table } from "reactstrap";
import NewRouterModal from "./NewRouterModal";

import RemoveRouter from "./RemoveRouter";

class RouterList extends Component {
  render() {
    const routers = this.props.routers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Router Id</th>
            <th>Location name</th>
            <th>Rack Id</th>
          </tr>
        </thead>
        <tbody>
          {!routers || routers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Add a router !!!!!!</b>
              </td>
            </tr>
          ) : (
            routers.map(router => (
              <tr key={router.pk}>
                <td>{router.routers_id}</td>
                <td>{router.location_name}</td>
                <td>{router.routers_id}</td>
                <td align="center">
                  <NewRouterModal
                    create={false}
                    router={router}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <RemoveRouter
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

export default RouterList;
