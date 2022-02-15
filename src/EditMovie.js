import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";



export function EditMovie({movies,setMovies}) {
  
    const { id } = useParams();
    const movieList = movies[id];

  const history = useHistory()
  const [movieName, setMovieName] = useState(movieList.name);
  const [moviePoster, setMoviePoster] = useState(movieList.profile);
  const [movieRating, setMovieRating] = useState(movieList.rating);
  const [movieDes, setMovieDes] = useState(movieList.description);
  const [moviestars, setMovieStars] = useState(movieList.director);
  const [moviedirector, setMovieDirector] = useState(movieList.stars);
  const [movietrailer, setMovieTrailer] = useState(movieList.trailer);
  return (
    <div>
      <div className="movie_form">
        <TextField
        value={moviePoster}
          label="Movie Poster(url)"
          variant="outlined"
          onChange={(event) => setMoviePoster(event.target.value)} />
        <TextField
         value={movieName}
          label="Movie Name"
          variant="outlined"
          onChange={(event) => setMovieName(event.target.value)} />
        <TextField
         value={movieRating}
          label="Movie Rating"
          variant="outlined"
          onChange={(event) => setMovieRating(event.target.value)} />
        <TextField
         value={movieDes}
          label="Movie Description"
          variant="outlined"
          onChange={(event) => setMovieDes(event.target.value)} />
        <TextField
         value={moviedirector}
          label="Movie Director"
          variant="outlined"
          onChange={(event) => setMovieDirector(event.target.value)} />
        <TextField
         value={moviestars}
          label="Movie Stars/Actors"
          variant="outlined"
          onChange={(event) => setMovieStars(event.target.value)} />
        <TextField
         value={movietrailer}
          label="Trailer"
          variant="outlined"
          onChange={(event) => setMovieTrailer(event.target.value)} />

        <Button variant="contained" className="button" color="success" onClick={()=>{
           const updatedMovie = {
             name: movieName,
             profile: moviePoster,
             rating: movieRating,
             description: movieDes,
             stars: moviestars,
             director: moviedirector,
             trailer:movietrailer
           };
           const copyMovieList=[...movies]
           copyMovieList[id]=updatedMovie
       
           setMovies(copyMovieList);
           history.push("/movies")

        }} 
        >
       Save Movie
        </Button>
      </div>
    </div>
  );
}
