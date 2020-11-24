import React from 'react';
import { Link } from "react-router-dom";


class Movie extends React.Component {
  render() {
    const { id, title, director, imdb_score, genre, popularity } = this.props;

    return (
      <div className="movie">


        {
          sessionStorage.getItem("isAdmin") ? (<Link className="list-item" to={{
            pathname: `/edit/${id}`,
            state: {
              movie: this.props
            }
          }}>
            <div className="title-year">
              <h2 className="title">Title: {title}</h2>
              <h4 className="year">IMDB Score :  {imdb_score}</h4>
              <h4 className="year">Director: {director}</h4>
              <h4 className="year">Genre: {genre}</h4>
              <h4 className="year">99Popularity: {popularity}</h4>
            </div>
          </Link>) : (
              <div className="title-year">
                <h2 className="title">Title: {title}</h2>
                <h4 className="year">IMDB Score :  {imdb_score}</h4>
                <h4 className="year">Director: {director}</h4>
                <h4 className="year">Genre: {genre}</h4>
                <h4 className="year">99Popularity: {popularity}</h4>
              </div>
            )

        }
      </div>

    )
  }
}

export default Movie;