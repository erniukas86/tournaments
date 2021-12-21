import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../../components/dataDisplay/Card.js";
import { imageService } from "../../services/image.js";
import { tournamentService } from "../../services/tournament.js";
import './styles.css';

function Tournaments() {

  const [tournaments, setTournamnets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const response = await tournamentService.getAll();
    setTournamnets(response);
    setIsLoading(false);
  }

  if(isLoading){
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    <CircularProgress />
  </Box>
  }

  return (
    <div className="container">
      <Grid container spacing={6}>
        {tournaments.map(tournament => <Grid item md={4}>
          <Card
            title={tournament.name}
            actions={[]}
            description={tournament.description}
            imagePath={imageService.getUrl(tournament.imageName)}
          />
        </Grid>)}
      </Grid>
    </div>
  );
}

export default Tournaments;
