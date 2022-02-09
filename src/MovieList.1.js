import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from "@mui/material/Badge";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

export function MovieList({ movies,setMovies }) {
  const history=useHistory()

  return (
    <div className="row">
      {movies.map(
        ({ name, profile, rating, description, director, stars }, index) => (
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
                onClick={()=>{
                    const copyMovies=[...movies] 
             copyMovies.splice(index,1)
                setMovies(copyMovies)
             }}
             color="error">
                <DeleteIcon />
              </IconButton>
</Tooltip>
            
            }
            editButton={
         <Tooltip title="Edit">
            <IconButton aria-label="edit button"
                          onClick={()=>  history.push(`./movies/edit/${index}`)}
                       color="secondary">
                          <EditIcon />
              </IconButton>
            
              
            </Tooltip>
              
              
            }
            id={index}
       
        />
        )
      )}
    </div>
  );
}
function Movie({ name, profile, rating, description, director, stars,deleteButton,editButton,id}) {
  const styles = {
    color: rating > 9 ? "green" : "red",
  };
  const history=useHistory()
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="col mb-4">
        <div className="card">
          <img src={profile} className="card-img-top img-fluid img" alt="IMG" />
          <div className="card-body">           
              {/* title with info button and logic */}
       <h5 className="card-title text-center">{name} 
       <Tooltip title="Info">
  <IconButton>
  <InfoOutlinedIcon className="infoOutlineIcon" onClick={() => history.push(`/movies/${id}`)}/>
  </IconButton>
</Tooltip>
      </h5> 
               <p className="card-text">
                <span className="rating"> Rating : </span>
                <span className="pfont" style={styles}>⭐{rating}</span>
               </p>
          <div className="card-text">
              <Des props={description} />
            </div>
            <p className="card-text">
              <span className="h5"> Director: </span>
              <span className="pfont"> {director}</span>
            </p>
            <p className="card-text">
              <span className="h5">Stars: </span>
              <span className="pfont">{stars}</span>
            </p>
            <Counter deleteBtn={deleteButton} editButton={editButton}/> 
          </div>
        </div>
      </div>
    </div>
  );
}
const Des = ({ props }) => {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div className="description">
        <span> Description: </span>
        <IconButton color="primary" onClick={() => setShowText(!showText)}>
        
          <span className="primary">{showText ? <ArrowDropUpIcon />: <ArrowDropDownIcon />}</span>
        </IconButton>
      </div>
      {!showText ? <p className="pfont"> {props} </p> : ""}
    </div>
  );
};
function Counter({deleteBtn,editButton}) {
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
          <ThumbUpOutlinedIcon />
        </Badge>
      </IconButton>
      {/* delete btn and edit btn */}
      {deleteBtn} {editButton}
      <IconButton
        color="primary"
        className="btn"
        onClick={() => setunLike(unlike + 1)}
      >
        <Badge badgeContent={unlike} color="error">
      <ThumbDownOutlinedIcon />
        </Badge> 
      </IconButton>
    </div>
  );
}
