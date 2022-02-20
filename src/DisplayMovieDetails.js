import { useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState,useEffect } from "react";
import { api } from "./MovieList.1";

export function DisplayMovieDetails() {

  const { id } = useParams();
  
  const history= useHistory()


  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${api}/${id}`)
  .then(data=>data.json())
  .then((movies)=>setMovie(movies))
   },[id]);   
  


  // console.log(id,movieList)
  return (

    <div>
      <Card className="video-card">
    <iframe width="95%" height="500" className="video" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <CardContent >
          <h5 className="video-title">{movie.name}</h5>
          <p className=" pfont-info ">{movie.description}</p>
        </CardContent>
 </Card>
      <Button variant="contained" className="moredetails-btn" startIcon={<ArrowBackIosNewIcon />}
      onClick={()=>history.goBack()}>Back</Button>
    </div>



  );
}
