import React, { Component } from "react";
import "./Toolbar.css";
import Emoji from "../Emoji/Emoji";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-left">
          <header>E3 Platform</header>
        </div>
        <div className="toolbar-right">
          <div className="greeting">
            Hi, {this.props.user.firstName}! <Emoji symbol="👋" />
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
