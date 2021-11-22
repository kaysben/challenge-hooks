import React from "react";
import ReactStars from "react-rating-stars-component";

const MovieList = ({ ratingChanged, movies, searchtTerm }) => {
  return (
    <div>
    
      {movies
        .filter((el) =>
          el.Title.toLowerCase().includes(searchtTerm.toLowerCase())
        )
        .map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="movie"></img>
            <p>Titel :{movie.Title}</p>
			<ReactStars
        count={5}
        value={movie.rating}
      />
          </div>
        ))}
    </div>
  );
};

export default MovieList;
