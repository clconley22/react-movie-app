import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import MoviesList from "./components/moviesList";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <MoviesList />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
