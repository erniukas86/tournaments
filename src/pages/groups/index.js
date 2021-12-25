import { Typography } from '@mui/material';
import { groupService } from '../../services/group';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

function Groups () {
  const { tournamentId } = useParams();

  const [groups] = useGetData(groupService.get, [tournamentId]);
  console.log('groups', groups);

  return (
    <Typography variant="h1">GROUPS</Typography>
  );
}

export default Groups;
