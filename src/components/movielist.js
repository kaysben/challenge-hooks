import React from "react";
import ReactStars from "react-rating-stars-component";

const MovieList = ({ ratingChanged, movies, searchtTerm,rating }) => {
  return (
    <div   className='box' >
    
      {movies
        .filter((el) =>
          el.title.toLowerCase().includes(searchtTerm.toLowerCase().trim()) && el.rating>=rating
        )
        .map((movie) => (
          <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.poster} alt="movie"></img>
            <p>
            <p className="title">{movie.title}</p>
            
			<ReactStars
        count={5}
        value={movie.rating}
       
      />
       <p  > {movie.description}  </p>
      
       
       </p>
       <video src={movie.trailer} />
          </div>
        ))}
       
    </div>
  );
};

export default MovieList;
