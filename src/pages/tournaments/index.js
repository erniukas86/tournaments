import { Box, CircularProgress, Grid } from '@mui/material';
import './styles.css';
import Card from '../../components/dataDisplay/Card';
import useGetTournaments from '../../hooks/useGetTournaments';
import { TOURNAMENT_STATE } from '../../constants/enums';
import { useNavigate } from 'react-router-dom';

function Tournaments () {
  const { tournaments, isLoading } = useGetTournaments();
  const navigate = useNavigate();

  const getActionButtons = (tournament) => {
    const actions = [];

    const { state, id } = tournament;

    if (state === TOURNAMENT_STATE.GROUPS) {
      // TODO: Make path resolver
      actions.push({ title: 'Groups', onClick: () => navigate(`${id}/groups`) });
    }

    return actions;
  };

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>;
  }

  return (
    <div className="container">
      <Grid container spacing={6}>
        {tournaments.map(tournament => <Grid key={tournament.id} item md={4}>
          <Card {...tournament} actions={getActionButtons(tournament)} />
        </Grid>)}
      </Grid>
    </div>
  );
}

export default Tournaments;
