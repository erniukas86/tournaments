import { Box, CircularProgress, Grid } from "@mui/material";
import './styles.css';
import Card from "../../components/dataDisplay/Card";
import useGetTournaments from "../../hooks/useGetTournaments";

function Tournaments() {
  const { tournaments, isLoading } = useGetTournaments();
  
  if(isLoading){
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>
  }

  return (
    <div className="container">
      <Grid container spacing={6}>
        {tournaments.map(tournament => <Grid item md={4}>
          <Card {...tournament} />
        </Grid>)}
      </Grid>
    </div>
  );
}

export default Tournaments;
