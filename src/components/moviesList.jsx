import React, { Component } from "react";
import axios from "axios";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=30ade5dac6f8d31a4b3bfc2083fcb2d5&language=en-US&page=1";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ movies: data.results });
        console.log(this.state.movies);
      });
  }

  render() {
    // const image = "`${IMAGE_URL}`" + {movie.backdrop_path}
    // const movieTitle = this.state.movies.results[0].title;
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>Popular Movies</h1>
          {this.state.movies.map(movie => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
                  alt="movie image"
                />
                <h6 className="card-subtitle mb-2 text-muted">
                  {movie.overview}
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
