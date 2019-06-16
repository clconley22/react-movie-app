import React, { Component } from "react";
import axios from "axios";

class MoviesList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=30ade5dac6f8d31a4b3bfc2083fcb2d5&language=en-US&page=1`
      )
      .then(res => {
        // console.log(res.data.results[0].title);
        this.setState({ persons: res.data });
        console.log(this.state.persons);
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => {
          <li> {(this.persons = person.name)} </li>;
        })}
      </ul>
    );
    console.log(this.state.persons);
  }
}

export default MoviesList;
