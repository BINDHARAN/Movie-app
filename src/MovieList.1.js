import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from "@mui/material/Badge";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const api = "https://zenmovies.herokuapp.com/movies"
// export const api = "http://localhost:5000/movies"

export function MovieList() {
  const history = useHistory()
  const [movies, setMovies] = useState([]);

  const getMovies = () => {

    fetch(`${api}`, {
      method: "GET"
    })
      .then(data => data.json())
      .then((movies) => setMovies(movies))

  }

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`${api}/${id}`, {
      method: "DELETE"
    }).then(() => getMovies())
  }

  return (
    <div className="card-container">
      {movies.map(
        ({ name, profile, rating, description, director, stars, _id }, index) => (
          <Movie
            key={index}
            name={name}
            profile={profile}
            rating={rating}
            description={description}
            director={director}
            stars={stars}
            // delete
            deleteButton={

              <Tooltip title="Delete">

                <IconButton aria-label="delete"
                  style={{ marginLeft: "auto" }}
                  onClick={() => {
                    deleteMovie(_id)
                  }}
                  color="error">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>

            }
            editButton={
              <Tooltip title="Edit">
                <IconButton aria-label="edit button"
                  onClick={() => history.push(`./movies/edit/${_id}`)}
                  color="secondary">
                  <EditIcon />
                </IconButton>
              </Tooltip>

            }
            id={_id}

          />
        )
      )}
    </div>
  );
}
function Movie({ name, profile, rating, description, director, stars, deleteButton, editButton, id }) {
  const styles = {
    color: rating > 9 ? "green" : "red",
  };
  const history = useHistory()
  return (
    <Card className="cards">

      <img src={profile} className="img" alt="IMG" />
      <CardContent>
        <div className="cardtitle"> <span>{name} </span>
          <Tooltip title="Info">
            <IconButton>
              <InfoOutlinedIcon className="infoOutlineIcon" onClick={() => history.push(`/movies/${id}`)} />
            </IconButton>
          </Tooltip>
        </div>
        <div className="cardtext">
          <span className="rating"> Rating : </span>
          <span className="pfont" style={styles}>⭐{rating}</span>
        </div>
        <div className="cardtext">
          <Des props={description} />
        </div>
        <div className="cardtext">
          <span className="sub-title"> Director: </span>
          <span className="pfont"> {director}</span>
        </div>
        <div className="cardtext">
          <span className="sub-title">Stars: </span>
          <span className="pfont">{stars}</span>
        </div>
      </CardContent>

      <Counter deleteBtn={deleteButton} editButton={editButton} />


    </Card>
  );
}
const Des = ({ props }) => {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div className="description">
        <span> Description: </span>
        <IconButton color="primary" onClick={() => setShowText(!showText)}>

          <span className="primary">{showText ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span>
        </IconButton>
      </div>
      {!showText ? <p className="pfont"> {props} </p> : ""}
    </div>
  );
};
function Counter({ deleteBtn, editButton }) {
  const [like, setLike] = useState(0);
  const [unlike, setunLike] = useState(0);
  return (
    <div className="button-group">
      <IconButton
        color="primary"
        className="btn1"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="secondary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        color="primary"
        className="btn"
        onClick={() => setunLike(unlike + 1)}
      >
        <Badge badgeContent={unlike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* delete btn and edit btn */}
      {deleteBtn} {editButton}
    </div>
  );
}
