import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";



export function AddMovie({movies,setMovies}) {
  
  const history = useHistory()
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDes, setMovieDes] = useState("");
  const [moviestars, setMovieStars] = useState("");
  const [moviedirector, setMovieDirector] = useState("");
  const [movietrailer, setMovieTrailer] = useState("");
  

  
  
  return (
    <div>
      <div className="movie_form">
        <TextField
          label="Movie Poster(url)"
          variant="outlined"
          onChange={(event) => setMoviePoster(event.target.value)} />
        <TextField
          label="Movie Name"
          variant="outlined"
          onChange={(event) => setMovieName(event.target.value)} />
        <TextField
          label="Movie Rating"
          variant="outlined"
          onChange={(event) => setMovieRating(event.target.value)} />
        <TextField
          label="Movie Description"
          variant="outlined"
          onChange={(event) => setMovieDes(event.target.value)} />
        <TextField
          label="Movie Director"
          variant="outlined"
          onChange={(event) => setMovieDirector(event.target.value)} />
        <TextField
          label="Movie Stars/Actors"
          variant="outlined"
          onChange={(event) => setMovieStars(event.target.value)} />
        <TextField
          label="Trailer"
          variant="outlined"
          onChange={(event) => setMovieTrailer(event.target.value)} />

        <Button variant="contained" className="button" onClick={()=>{
           

           const newMovie = {
             name: movieName,
             profile: moviePoster,
             rating: movieRating,
             description: movieDes,
             stars: moviestars,
             director: moviedirector,
             trailer:movietrailer
           };
       
           setMovies([...movies, newMovie]);
           history.push("/movies")

        }} 
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
