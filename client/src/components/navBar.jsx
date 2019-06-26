import React, { Component } from "react";
import { MDBCol, MDBIcon } from "mdbreact";

class navBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
    console.log(this.state.search);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
        <a className="navbar-brand" href="#" />
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
        </div>
        <MDBCol md="4">
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span
                className="input-group-text blue lighten-3"
                id="basic-text1"
              >
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Seach Movies"
              aria-label="Search"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
        </MDBCol>
      </nav>
    );
  }
}

export default navBar;
