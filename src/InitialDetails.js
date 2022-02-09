import { MovieList } from "./MovieList.1";


export function InitialDetails({movies ,setMovies}) {

  return (
    <div>
      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">
          <img
            src="https://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/imdb.png"
            className="logo"
            alt="logo"
          />
          <span className="title">IMDb</span>
        </div>
      </nav>

      <div className="content">
        <h4 className="text-dark font-italic "> HELLO!</h4>
        <p className="lead">
          {" "}
          Here are IMDb "Top 5" Movies(Sorted by IMDb Rating Descending)...
        </p>
      </div> */}
      <MovieList movies={movies}  setMovies={setMovies}/>

   
    </div>
  );
}

