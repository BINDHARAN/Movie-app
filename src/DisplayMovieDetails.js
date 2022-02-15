import { useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export function DisplayMovieDetails({ list }) {

  const { id } = useParams();
  const movieList = list[id];
  const history= useHistory()

  // console.log(id,movieList)
  return (

    <div>
      <Card className="video-card">
    <iframe width="95%" height="500" className="video" src={movieList.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <CardContent >
          <h5 className="video-title">{movieList.name}</h5>
          <p className=" pfont-info ">{movieList.description}</p>
        </CardContent>
 </Card>
      <Button variant="contained" className="moredetails-btn" startIcon={<ArrowBackIosNewIcon />}
      onClick={()=>history.goBack()}>Back</Button>
    </div>



  );
}
