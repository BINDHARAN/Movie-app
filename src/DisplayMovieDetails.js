import { useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";


export function DisplayMovieDetails({ list }) {

  const { id } = useParams();
  const movieList = list[id];
  const history= useHistory()

  // console.log(id,movieList)
  return (

    <div>
      <div className="card mb-3 ">
    <iframe width="95%" height="500" className="mx-auto d-block" src={movieList.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="card-body">
          <h5 className="card-title  text-center">{movieList.name}</h5>
          <p className="card-text pfont-info text-center">{movieList.description}</p>
        </div>
 </div>
      <Button variant="contained" className="moredetails-btn" startIcon={<ArrowBackIosNewIcon />}
      onClick={()=>history.goBack()}>Back</Button>
    </div>



  );
}
