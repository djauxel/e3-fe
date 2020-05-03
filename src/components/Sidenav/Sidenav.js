import React, { Component } from "react";
import "./Sidenav.css";

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav">
        <ul>
          <li>
            <a href="/#">
              <i className="fas fa-file-alt sidenav-icon"></i>Assessment Forms
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fas fa-clipboard-list sidenav-icon"></i>Class
              Placements
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fas fa-book sidenav-icon"></i>Textbook Checkout
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fas fa-calendar-alt sidenav-icon"></i>Advising
              Appointments
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fas fa-cog"></i>My Account
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fas fa-sign-out-alt"></i>Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
