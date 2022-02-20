import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import {api} from  "./MovieList.1";
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from "formik";
import { formValidationSchema } from "./AddMovie";

export function EditMovie() {
  
    const { id } = useParams();
   
    const [movie, setMovie] = useState(null);

useEffect(() => {
    fetch(`${api}/${id}`)
  .then(data=>data.json())
  .then((movies)=>setMovie(movies))
   },[id]);   
  
return ( 
    <div>{movie ? <MovieForm movie={movie} /> : <h2 className="edit-loadmsg"> Loading... <CircularProgress /></h2>} </div>
 );
}

function MovieForm({movie}){
  const history = useHistory()

  const formik = useFormik({
  
    initialValues: { 
      profile:movie.profile , 
      name:movie.name, 
      rating:movie.rating, 
      description:movie.description, 
      director:movie.director,
      stars:movie.stars,
      trailer:movie.trailer
    },
    validationSchema: formValidationSchema,
    onSubmit: (editedMovie) => editMovie(editedMovie),
    });
    
    const editMovie=(editedMovie)=>{
      fetch(`${api}/${movie.id}`, {
        method: "PUT",
        body: JSON.stringify(editedMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => history.push("/movies"));
  }


    return(
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className="movie_form">
        <TextField
          label="Movie Poster(url)"
          variant="outlined"
          id="profile" 
          name="profile" 
          value={formik.values.profile} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.profile && formik.errors.profile}
          helperText={formik.touched.profile && formik.errors.profile ? formik.errors.profile : ""}

           />
        <TextField
          label="Movie Name"
          id="name" 
          name="name" 
          value={formik.values.name} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
           />
        <TextField
          label="Movie Rating"
          id="rating" 
          name="rating" 
          value={formik.values.rating} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          error={formik.touched.rating && formik.errors.rating}
          helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
          />
        
        <TextField
          label="Movie Description"
          id="description" 
          name="description" 
          value={formik.values.description} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          error={formik.touched.description && formik.errors.description}
          helperText={formik.touched.description && formik.errors.description ? formik.errors.description : ""}
          />
        <TextField
         label="Movie Director"
          id="director" 
          name="director" 
          value={formik.values.director} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          error={formik.touched.director && formik.errors.director}
          helperText={formik.touched.director && formik.errors.director ? formik.errors.director : ""}
           />
        <TextField
          label="Movie Stars/Actors"
          id="stars"
          name="stars"
          value={formik.values.stars} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          error={formik.touched.stars && formik.errors.stars}
          helperText={formik.touched.stars && formik.errors.stars ? formik.errors.stars : ""}
           />
        <TextField
          label="Trailer"
          id="trailer"
          name="trailer"
          variant="outlined"
          value={formik.values.trailer} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.trailer && formik.errors.trailer}
          helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
          />

        <Button variant="contained" color="success" className="button" type="submit" >
         Save
        </Button>
        
      </div>
      </form>

    </div>
  )
}