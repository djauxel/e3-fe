<<<<<<< HEAD
import React, { Component } from 'react';
import './Sidenav.css'

class Sidenav extends Component {
    render() {
        return (
            <div className="sidenav">
                <ul>
                    <li><a href="/#"><i className="fas fa-file-alt sidenav-icon"></i>Assessment Forms</a></li>
                    <li><a href="/#"><i className="fas fa-clipboard-list sidenav-icon"></i>Class Placements</a></li>
                    <li><a href="/#"><i className="fas fa-book sidenav-icon"></i>Textbook Inventory</a></li>
                    <li><a href="/#"><i className="fas fa-calendar-alt sidenav-icon"></i>Advising Appointments</a></li>
                    <li><a href="/#"><i class="fas fa-cog"></i>My Account</a></li>
                    <li><a href="/#"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
                </ul>
            </div>
        );
    }
=======
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
>>>>>>> 83ceb0c197fa26c688e66b0756241bc77f39736b
}

export default Sidenav;
