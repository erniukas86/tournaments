import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { groupService } from '../../services/group';
import { useParams } from 'react-router-dom';

function Groups () {
  const [groups, setGroups] = useState([]);

  const { tournamentId } = useParams();

  // TODO: Use custom hook to fetch data
  useEffect(() => { getData(); }, []);

  const getData = async () => {
    const result = await groupService.get(tournamentId);
    setGroups(result);
  };

  console.log('groups', groups);

  return (
    <Typography variant="h1">GROUPS</Typography>
  );
}

export default Groups;
