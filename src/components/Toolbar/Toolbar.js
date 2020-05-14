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
<<<<<<< HEAD
            Hi, Alexander!
            <Emoji symbol="👋" />
=======
            Hi, {this.props.user.firstName}! <Emoji symbol="👋" />
>>>>>>> 83ceb0c197fa26c688e66b0756241bc77f39736b
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
