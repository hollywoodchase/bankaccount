import React from "react";
import "../../style.css";

function Nav(props) {
  return (
    <div className="navbar-container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/requests">Signup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/calendar">Calendar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-selection" href="#" aria-haspopup="true" aria-expanded="false">
              <select class="form-control" id="select-list" {...props}>
        <option>CHASE</option>
      </select>
      </a>
            </li>
          </ul>
        </div>   
      </nav>
    </div>
  );
}

export default Nav;
