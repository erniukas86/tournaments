import { groupService } from '../../services/group';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import { Box, CircularProgress } from '@mui/material';
import Table from '../../components/dataDisplay/Table';
import Place from './Place';

function Groups () {
  const { tournamentId } = useParams();

  const [groups, isLoading] = useGetData(groupService.get, [tournamentId]);

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>;
  }

  const getData = (group) => {
    return group.participants.map((participant, index) => ({
      Place: <Place numberOfGroupQualifiers={group.tournament.numberOfGroupQualifiers} index={index}></Place>,
      Name: `${participant.firstName} ${participant.lastName}`,
      Won: participant.won,
      Lost: participant.lost,
      For: participant.score,
      Against: participant.against,
      Diff: participant.difference,
      Points: participant.points
    }));
  };

  return (
    <>
      {groups.map(group => <Table key={group.id} data={getData(group)} title={group.name}></Table>)}
    </>
  );
}

export default Groups;
