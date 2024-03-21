import { Box, CircularProgress, Grid } from '@mui/material';
import Card from '../../components/dataDisplay/Card';
import { TOURNAMENT_STATE } from '../../constants/enums';
import { useNavigate } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import { tournamentService } from '../../services/tournament';
import { ROUTES } from '../../routes';

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
      actions.push({ title: '🏆 Cup', onClick: () => navigate(ROUTES.BRACKET) });
      actions.push({ title: '🤝 Cup', onClick: () => navigate(ROUTES.CHALLENGER_BRACKET) });
      actions.push({ title: 'Standings', onClick: () => navigate(ROUTES.STANDINGS) });
    }

    if (tournament.name === 'PC Table Tennis 2023') {
      actions.push({ title: '🏆 Cup', onClick: () => navigate(ROUTES.BRACKET_2023) });
      actions.push({ title: '🤝 Cup', onClick: () => navigate(ROUTES.CHALLENGER_BRACKET_2023) });
      actions.push({ title: 'Standings', onClick: () => navigate(ROUTES.STANDINGS_2023) });
    }

    if (tournament.name === 'PC Table Tennis Duets 2023') {
      actions.push({ title: '🏆 Cup', onClick: () => navigate(ROUTES.DUETS_BRACKET_2023) });
      actions.push({ title: 'Standings', onClick: () => navigate(ROUTES.DUETS_STANDINGS_2023) });
    }

    if (tournament.name === 'PC Table Tennis 2024') {
      actions.push({ title: '🏆 Cup', onClick: () => navigate(ROUTES.BRACKET_2024) });
      actions.push({ title: '🤝 Cup', onClick: () => navigate(ROUTES.CHALLENGER_BRACKET_2024) });
    }

    return actions;
  };

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>;
  }

  return (
    <Grid container wrap='wrap' spacing={6}>
      {tournaments.map(tournament => <Grid key={tournament.id} item md={4}>
        <Card {...tournament} actions={getActionButtons(tournament)} />
      </Grid>)}
    </Grid>
  );
}

export default Tournaments;
