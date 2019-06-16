import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import MoviesList from "./components/moviesList";

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
