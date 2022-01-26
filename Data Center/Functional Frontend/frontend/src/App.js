import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import FrontRack from "./components/FrontRack";
import FrontRouter from "./components/FrontRouter";
import FrontSwitch from "./components/FrontSwitch";
import FrontServer from "./components/FrontServer";
import FrontNIC from "./components/FrontNIC";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <FrontRack />
        <FrontRouter />
        <FrontSwitch />
        <FrontServer />
        <FrontNIC />
      </Fragment>  
      
    );
  }
  
  
   
    
 
}

export default App;
