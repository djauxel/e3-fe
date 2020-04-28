import React, { Component } from "react";
import "./Dashboard.css";

import Toolbar from "../Toolbar/Toolbar";
import Sidenav from "../Sidenav/Sidenav";
import Content from "../Content/Content";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <div className="dashboardLayout">
          <Sidenav />
          <Content />
        </div>
      </div>
    );
  }
}

export default Dashboard;
