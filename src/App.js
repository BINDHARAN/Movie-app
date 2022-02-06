import "./App.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Switch, Route, Link } from "react-router-dom";
// import { drawerClasses } from "@mui/material";
import { TicTacToe } from "./TicTacToe";





export default function App() {
  const list = [
    {
      profile:
        "https://www.quirkybyte.com/wp-content/uploads/2021/11/Jai_bhim_2_vkgnOcidibacj.jpeg",
      name: "1. Jai Bhim(2021)",
      rating: "9.3",
      description:
        "When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
      director: "T J Gnanavel",
      stars: "Suriya,Lijo Mol Jose,Manikandan,Rajsha vijayan",
    },
    {
      profile:
        "https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70",
      name: "2. The Shawshank Redemption",
      rating: "9.3",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
      director: "Frank Darabont",
      stars: "Tim Robbins,Morgan Freeman,Bob Gunton,William sadler",
    },
    {
      profile:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name: "3. The Godfather(1972)",
      rating: "9.2",
      description:
        "The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
      director: "Fransis Ford Coppola",
      stars: "Marlon Bardo,AI Pacino,James Caan,Diane Keaton",
    },
    {
      profile:
        "https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
      name: "4. The Dark Knight(2008)",
      rating: "9.0",
      description:
        "When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
      director: "Christopher Nolan",
      stars: "Christian Bale,Heath Ledger,Aaron Echart,Michael Caine",
    },
    {
      profile:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name: "5. The Godfather part 2(1974)",
      rating: "9.0",
      description:
        "The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
      director: "Francis Ford Coppola",
      stars: "AL Pacino,Robert De Niro,Robert Duvall,Diane Keaton",
    },
  ];
  const [movies, setMovies] = useState(list);

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDes, setMovieDes] = useState("");
  const [moviestars, setMovieStars] = useState("");
  const [moviedirector, setMovieDirector] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: movieName,
      profile: moviePoster,
      rating: movieRating,
      description: movieDes,
      stars: moviestars,
      director: moviedirector,
    };

    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">



      <div className="list">
        <ul>
          <li>
            {/* Change the url bar but dont refresh */}
            <Link to="/movies" >Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
          {/* <li>
            <Link to="/fun">Wowwww</Link>
          </li> */}
          <li>
            <Link to="/TicTacToe">TicTacToe</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>


        </ul>
      </div>

      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/movies">
          {/* Match url display the below component */}

          <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">

              <img
                src="https://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/imdb.png"
                className="logo"
                alt="logo"
              ></img>
              <span className="title">IMDb</span>
            </div>
          </nav>

          <div className="content">
            <h4 className="text-dark font-italic "> HELLO!</h4>
            <p className="lead">
              Here are IMDb "Top 5" Movies(Sorted by IMDb Rating Descending)...
            </p>
          </div>

          <div className="row">
            {movies.map(({ name, profile, rating, description, director, stars }, index) => (
              <Movie
                key={index}
                name={name}
                profile={profile}
                rating={rating}
                description={description}
                director={director}
                stars={stars}
              />
            ))}
          </div>
          <hr></hr>

          <div className="content">
            <h4 className="text-dark font-italic "> HELLO!</h4>
            <p className="lead1">

              If you want to add 6th rating movie to the list above, just visit our
              official website
              (https://www.imdb.com/search/title/?groups=top_250&sort=user_rating).
              And enter the required details in the below input...<i>ThanK YoU ❣</i>
            </p>
          </div>

          <div className="movie_form">
            <TextField id="outlined-basic" label="Movie Poster(url)" variant="outlined" onChange={(event) => setMoviePoster(event.target.value)} />
            <TextField id="outlined-basic" label="Movie Name" variant="outlined" onChange={(event) => setMovieName(event.target.value)} />
            <TextField id="outlined-basic" label="Movie Rating" variant="outlined" onChange={(event) => setMovieRating(event.target.value)} />
            <TextField id="outlined-basic" label="Movie Description" variant="outlined" onChange={(event) => setMovieDes(event.target.value)} />
            <TextField id="outlined-basic" label="Movie Director" variant="outlined" onChange={(event) => setMovieDirector(event.target.value)} />
            <TextField id="outlined-basic" label="Movie Stars/Actors" variant="outlined" onChange={(event) => setMovieStars(event.target.value)} />

            <Button variant="contained" className="button" onClick={addMovie}>   Add Movie</Button>
          </div>
        </Route>

        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/TicTacToe">
          <TicTacToe />
        </Route>

        <Route path="/">
          < Msg />
        </Route>


      </Switch>

    </div>
  );
}

function Movie({ name, profile, rating, description, director, stars }) {
  const styles = {
    color: rating > 9 ? "green" : "red"
  }
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="col mb-4">
        <div className="card">
          <img src={profile} className="card-img-top img-fluid img" alt="IMG" />
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text">
              <span className="h5"> Rating : </span>
              <span className="pfont" style={styles}> ⭐{rating}</span>
            </p>

            <p className="card-text">
              <Des props={description} />
            </p>
            <p className="card-text">
              <span className="h5"> Director: </span>
              <span className="pfont"> {director}</span>
            </p>
            <p className="card-text">
              <span className="h5"> Stars: </span>
              <span className="pfont"> {stars}</span>
            </p>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}
const Des = ({ props }) => {
  const [showText, setShowText] = useState(false);
  return (
    <div >

      <div className="description">
        <span > Description: </span>  <IconButton color="primary" onClick={() => setShowText(!showText)} > <span className="primary">{showText ? "🔼" : "🔽"}</span>
        </IconButton>
      </div>
      {showText ? <p className="pfont"> {props}  </p> : ""}

    </div>
  );
};


function Counter() {
  const [like, setLike] = useState(0);
  const [unlike, setunLike] = useState(0);
  return (
    <div className="button-group">
      <IconButton color="primary" className="btn1"
        onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="secondary">
          👍
        </Badge>

      </IconButton>
      <IconButton color="primary" className="btn"
        onClick={() => setunLike(unlike + 1)}>
        <Badge badgeContent={unlike} color="error">
          👎
        </Badge>

      </IconButton>


    </div>
  );

}

function AddColor() {
  const [color, setColor] = useState("pink")

  const sytles = {
    backgroundColor: color
  }

  const [colorlist, setColorList] = useState(["red", "teal", "skyblue"])
  return (
    <div className="total-colorbox">
      <div className="coloritems">

        <input style={sytles} value={color} className="colorbox-input" placeholder="Enter a color" onChange={(event) => setColor(event.target.value)} />
        <button  onClick={() => setColorList([...colorlist, color])  }className="color-btn" >Add Color</button>

      </div>
      {colorlist.map((clr, index) => <ColorBox key={index} color={clr} />)}
    </div>
  )

}


function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "40px",
    width: "510px",
    marginTop: "10px",
    borderRadius: "10px"

  }
  return (<div className="addcolors">
    <div style={styles}>
    </div>

  </div>
  )
};

function Msg() {
  return (
    <h2 className="text-center home"> Welcome to  My app 🎬🎮✨⚡</h2>
  )
}

