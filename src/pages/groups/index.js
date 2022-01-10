import { groupService } from '../../services/group';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import GroupTable from '../../components/dataDisplay/GroupTable';
import { Box, CircularProgress } from '@mui/material';

function Groups () {
  const { tournamentId } = useParams();

  const [groups, isLoading] = useGetData(groupService.get, [tournamentId]);

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>;
  }

  return (
    <>
      {groups.map(group => <GroupTable key={group.id} group={group}></GroupTable>)}
    </>
  );
}

export default Groups;
