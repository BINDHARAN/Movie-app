import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { api } from "./MovieList.1";
import { useFormik } from "formik";
import * as yup from "yup";





export const formValidationSchema = yup.object({
  profile: yup.string()
    .required("Why not fill this poster? 😉")
    .min(5, "Need a longer poster 😄"),

  name: yup.string()
    .required("Why not fill this name? 😉")
    .min(1, "Need a longer name 😄"),

  rating: yup.number()
    .required("Why not fill this rating? 😉")
    .min(0).max(10),

  description: yup.string()
    .required("Why not fill this description? 😉")
    .min(20, "Need a longer description 😄"),

  director: yup.string()
    .required("Why not fill this director? 😉")
    .min(2, "Need a longer director 😄"),

  stars: yup.string()
    .required("Why not fill this stars? 😉")
    .min(2, "Need a longer stars 😄"),

  trailer: yup.string()
    .required("Why not fill this trailer? 😉")
    .min(8, "Need a longer trailer 😄"),
});


export function AddMovie() {

  const history = useHistory()


  const formik = useFormik({
    initialValues: {
      profile: "",
      name: "",
      rating: "",
      description: "",
      director: "",
      stars: "",
      trailer: ""
    },
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => addMovie(newMovie),
  });

  const addMovie = (newMovie) => {
    fetch(`${api}`, {
      method: "POST",
      body: JSON.stringify([newMovie]),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
  }

  return (
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

          <Button variant="contained" className="button" type="submit" >
            Add Movie
          </Button>

        </div>
      </form>

    </div>
  );
}
