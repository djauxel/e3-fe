import React, { Component } from "react";
import "./Dashboard.css";

import Toolbar from "../Toolbar/Toolbar";
import Sidenav from "../Sidenav/Sidenav";
import Content from "../Content/Content";

<<<<<<< HEAD
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Toolbar />
=======
var user_data = {
  firstName: "William",
  lastName: "Cobb"
};

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Toolbar user={user_data}/>
>>>>>>> 83ceb0c197fa26c688e66b0756241bc77f39736b
        <div className="dashboardLayout">
          <Sidenav />
          <Content />
        </div>
      </div>
    );
  }
}

export default Dashboard;
