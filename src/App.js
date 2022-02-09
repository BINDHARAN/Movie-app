import "./App.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { TicTacToe } from "./TicTacToe";
import { AddColor } from "./AddColor";
import { NotFound } from "./NotFound";
import { Msg } from "./Msg";
import { InitialDetails } from "./InitialDetails";
import { list } from "./list";
import { DisplayMovieDetails } from "./DisplayMovieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { useState } from "react";


export default function App() {
  const [movies, setMovies] = useState(list);

 return (
    <div className="App">
  <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Change the url bar but dont refresh */}
            <Link to="/movies" >Movies</Link>
          </li>
          <li>
            {/* Change the url bar but dont refresh */}
            <Link to="/movies/add" >Add-Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color-Game</Link>
          </li>

          <li>
            <Link to="/TicTacToe">TicTacToe-Game</Link>
          </li>
        </ul>
      </div>

      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/films">
          <Redirect to="/movies" />
        </Route >

        <Route path="/movies/add">
          <AddMovie movies={movies} setMovies={setMovies}  />
        </Route>

        <Route path="/movies/edit/:id">
        <EditMovie movies={movies} setMovies={setMovies}  />
        </Route>

        <Route path="/movies/:id">
            <DisplayMovieDetails list={list}/>
        </Route>

        {/* Match url display the below component */}
        <Route path="/movies">
            <InitialDetails movies={movies} setMovies={setMovies}/>
        </Route>
        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/TicTacToe">
          <TicTacToe />
        </Route>

        <Route exact path="/">
          < Msg />
        </Route>
        <Route path="**"> <NotFound /> </Route>
 </Switch>
    </div>
  );
}

 

