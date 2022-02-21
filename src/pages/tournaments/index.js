import { Box, CircularProgress, Grid } from '@mui/material';
import Card from '../../components/dataDisplay/Card';
import { TOURNAMENT_STATE } from '../../constants/enums';
import { useNavigate } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import { tournamentService } from '../../services/tournament';

function Tournaments () {
  const [tournaments, isLoading] = useGetData(tournamentService.getAll);
  const navigate = useNavigate();

  const getActionButtons = (tournament) => {
    const actions = [];

    const { state, id } = tournament;

    if (state === TOURNAMENT_STATE.GROUPS) {
      // TODO: Make path resolver
      actions.push({ title: 'Groups', onClick: () => navigate(`${id}/groups`) });
    }

    // TODO REMOVE THIS HARDCODED STUFF WITH PROPER LOGIC
    if (tournament.name === 'PC Table Tennis 2022') {
      actions.push({ title: '🏆 Cup', onClick: () => navigate('/bracket') });
      actions.push({ title: '🤝 Cup', onClick: () => navigate('/challengerbracket') });
    }

    return actions;
  };

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>;
  }

  return (
    <Grid container spacing={6}>
      {tournaments.map(tournament => <Grid key={tournament.id} item md={4}>
        <Card {...tournament} actions={getActionButtons(tournament)} />
      </Grid>)}
    </Grid>
  );
}

export default Tournaments;
