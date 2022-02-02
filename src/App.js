
import './App.css';
import { useState } from "react";


export default function App() {
  const user=[
    {
      profile:"https://www.quirkybyte.com/wp-content/uploads/2021/11/Jai_bhim_2_vkgnOcidibacj.jpeg",
      name:"1. Jai Bhim(2021)",
      rating:"9.3",
      description:"When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
      director:"T J Gnanavel",
      stars:"Suriya,Lijo Mol Jose,Manikandan,Rajsha vijayan"
    },
    {
      profile:"https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70",
      name:"2. The Shawshank Redemption",
      rating:"9.3",
      description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
      director:"Frank Darabont",
      stars:"Tim Robbins,Morgan Freeman,Bob Gunton,William sadler"
  
      
    },
    {
      profile:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name:"3. The Godfather(1972)",
      rating:"9.2",
      description:"The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
      director:"Fransis Ford Coppola",
      stars:"Marlon Bardo,AI Pacino,James Caan,Diane Keaton"
    },
    {
      profile:"https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
      name:"4. The Dark Knight(2008)",
      rating:"9.0",
      description:"When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
      director:"Christopher Nolan",
      stars:"Christian Bale,Heath Ledger,Aaron Echart,Michael Caine"
    },
    {
      profile:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name:"5. The Godfather part 2(1974)",
      rating:"9.0",
      description:"The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
      director:"Francis Ford Coppola",
      stars:"AL Pacino,Robert De Niro,Robert Duvall,Diane Keaton"
    },
  ]
  const [movies, setMovies] = useState( user);

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
    stars:moviestars,
    director:moviedirector
    };

   
    setMovies([...movies, newMovie]);
  }
    return (
      <div className="App">
       
  <nav class="navbar navbar-dark bg-dark">
      <img src='https://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/imdb.png' alt='logo'></img>
     <span class='navbar-brand'>IMDb</span>
      <form class="form-inline">
     <input class="form-control mr-sm-2" type="Text" placeholder="Search" aria-label="Search" />
     <button class="btn btn-outline-info">Search   </button>
       </form>
</nav>

    <div class="content">
        <h4 class="text-dark font-italic "> HELLO!</h4>
        <p class="lead" >Here are IMDb "Top 5" Movies(Sorted by IMDb Rating Descending)...</p>
    </div>

  
      <div class="row">

{movies.map((nm) => ( 


<Movie name={nm.name} profile={nm.profile} rating={nm.rating} description={nm.description} director={nm.director} stars={nm.stars} />
))}
</div>
<hr></hr>

<div class="content">
        <h4 class="text-dark font-italic "> HELLO!</h4>
        <p class="lead1" > If you want to add 6th rating movie to the list above, just visit our official website (https://www.imdb.com/search/title/?groups=top_250&sort=user_rating). And enter the required details in the below input...<i>ThanK YoU ❣</i></p>
    </div>




<div className="movie_form">
      <input
  
    type="text"
    onChange={(event) => setMoviePoster(event.target.value)}
    placeholder="Movie Poster(url)" />
        <input
       
          type="text"
          placeholder="Movie Name"
          onChange={(event) => setMovieName(event.target.value)}
        />
        <input
         
          type="number"
          onChange={(event) => setMovieRating(event.target.value)}
          placeholder="Movie Rating"
        />
        <input
         
          type="text"
          onChange={(event) => setMovieDes(event.target.value)}
          placeholder="Movie Description"
        />
          <input
        
            type="text"
            onChange={(event) => setMovieDirector(event.target.value)}
            placeholder="Movie Director"
          />
        <input
        
          type="text"
          onChange={(event) => setMovieStars(event.target.value)}
          placeholder="Movie Stars/Actors"
        />

        <button onClick={addMovie}>Add Movie</button>
      </div>
      </div>
    );
  }


function Movie({ name,profile,rating,description,director,stars }){
  return(


<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
  <div class="col mb-4">
    <div class="card">
      <img src={profile} class="card-img-top img-fluid img" alt="IMG"/>
      <div class="card-body">
      <h5 class="card-title text-center">{name}</h5>
      <p class="card-text"><span class="h5"> Rating : </span> <span class="pfont"> ⭐{rating}</span> </p>
                    
    <p class="card-text"><span class="h5"> Description: </span> <span class="pfont"> {description}</span> </p>
    <p class="card-text"><span class="h5">  Director: </span> <span class="pfont"> {director}</span> </p>   
        <p class="card-text"><span class="h5"> Stars: </span> <span class="pfont"> {stars}</span> </p>
        <Counter />         
   
   
 </div> 
 </div> 
 </div> 

    </div>


  )
}

function Counter() {
  const [like, setLike]= useState(0);
  const [unlike, setunLike]= useState(0);
  return(
  <div>
    <button type="button" class="btn btn1 btn-outline-success" onClick={()=> setLike(like+1)}>👍{like}</button>
<button type="button" class="btn btn-outline-danger" onClick={()=> setunLike(unlike+1)}>👎{unlike}</button>
    
  </div>
  );
}

