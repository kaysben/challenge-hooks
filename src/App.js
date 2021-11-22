import  { useState } from 'react';
import './App.css';
import Addmovie from './components/addmovie';
import MovieList from './components/movielist';
import Searchbox from './components/SearchBox';


const App = () => {
	const [movies, setMovies] = useState([        {
            Title: "Star Wars: Episode IV - A New Hope",
            Year: "1977",
            rating:"5",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode V - The Empire Strikes Back",
            Year: "1980",
            rating:"3",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode VI - Return of the Jedi",
            Year: "1983",
            rating:"4",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }]);
		const [searchtTerm,setSearchtTerm]=useState("");
        const [searchRating,setSearchRatig]=useState("");
        const [rating, setRating] = useState(0)
     
           
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
            <MovieList movies={movies}   searchtTerm={searchtTerm} />
           
			</div>
            <Addmovie movies={movies} setMovies={setMovies} />
            <Searchbox  movies={movies} setSearchtTerm={setSearchtTerm} ratingChanged={ratingChanged} />
            
		</div>
	);
};

export default App;