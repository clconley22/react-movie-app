import React, { Component } from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <a className="navbar-brand" href="#">
        {totalCounters}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
        <MDBCol md="3">
          <MDBFormInline className="md-form mr-auto">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search Movies"
              aria-label="Search"
            />
            <MDBBtn rounded size="sm" type="submit" className="mr-auto">
              Search
            </MDBBtn>
          </MDBFormInline>
        </MDBCol>
      </div>
    </nav>
  );
};

export default NavBar;
