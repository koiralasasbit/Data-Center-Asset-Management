import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="CampusLiveLogo.png"
          width="300"
          className="img-thumbnail"
          //style={{ marginTop: "20px" }}
        />
        <hr />
        <h1>Data Assests Management System</h1>
      </div>
    );
  }
}

export default Header;
