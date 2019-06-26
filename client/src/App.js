import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import MoviesList from "./components/moviesList";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <MoviesList />
        </main>
        <h1 className="App-intro">{this.state.data}</h1>
      </React.Fragment>
    );
  }
}
export default App;
