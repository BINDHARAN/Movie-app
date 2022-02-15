import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { TicTacToe } from "./TicTacToe";
import { AddColor } from "./AddColor";
import { NotFound } from "./NotFound";
import { Msg } from "./Msg";
import { list } from "./list";
import { DisplayMovieDetails } from "./DisplayMovieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { MovieList } from "./MovieList.1";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export default function App() {
  const [movies, setMovies] = useState(list);
  const history = useHistory();

  const [mode,setMode]=useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
<Paper elevation={4} style={{borderRadius:"0px", minHeight:"100vh"}} >
 <div className="App">

      <AppBar position="static">
        <Toolbar>

          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
          <Button color="inherit" onClick={() => history.push("/movies/add")}>Add Movies</Button>
          <Button color="inherit" onClick={() => history.push("/color-game")}>Color Game</Button>
          <Button color="inherit" onClick={() => history.push("/TicTacToe")}>TicTacToe</Button>
          <Button color="inherit" 
          style={{marginLeft:"auto"}}
              startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              onClick={()=>setMode(mode==="light"? "dark" : "light")} >
              {mode==="light"? "dark" : "light"} Mode
         </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route >

        <Route path="/movies/add">
          <div className="movies-page">
            <AddMovie movies={movies} setMovies={setMovies} />
          </div>
        </Route>

        <Route path="/movies/edit/:id">
          <div className="movies-page">
            <EditMovie movies={movies} setMovies={setMovies} />
          </div>
        </Route>

        <Route path="/movies/:id">
          <div className="movies-page">
            <DisplayMovieDetails list={list} />
          </div>
        </Route>


        <Route path="/movies">
          <div className="movies-page">
            <MovieList movies={movies} setMovies={setMovies} />
          </div>
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
    </Paper>  
  </ThemeProvider>
  );
}


