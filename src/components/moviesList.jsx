import React, { Component } from "react";
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";
// "https://api.themoviedb.org/3/movie/popular?api_key=30ade5dac6f8d31a4b3bfc2083fcb2d5&language=en-US&page=1";

class MoviesList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    const url = `${API_URL}`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ persons: data });
        console.log(this.state.persons);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>React Axios Example</h1>
          {this.state.persons.map(person => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {person.email}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MoviesList;
