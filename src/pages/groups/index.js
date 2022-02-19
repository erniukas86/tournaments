import { groupService } from '../../services/group';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import { Box, CircularProgress, Tab, Tabs } from '@mui/material';
import Table from '../../components/dataDisplay/Table';
import Place from './Place';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';

function Groups () {
  const { tournamentId } = useParams();
  const [tabIndex, setTabIndex] = useState(0);

  const [groups, isLoading, reload] = useGetData(groupService.get, [tournamentId]);

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>;
  }

  const getData = (group) => {
    return group.participants.map((participant, index) => ({
      '#': <Place numberOfGroupQualifiers={group.tournament.numberOfGroupQualifiers} index={index}></Place>,
      Name: `${participant.firstName} ${participant.lastName}`,
      Won: participant.won,
      Lost: participant.lost,
      For: participant.score,
      Against: participant.against,
      Diff: participant.difference,
      Points: participant.points
    }));
  };

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const saveResult = async (result) => {
    await groupService.saveResult(result);
    await reload();
  };

  return (
    <>
      <Box>
        <Box>
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Groups" />
            <Tab label="Pending" />
            <Tab label="Finished" />
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && groups.map(group => <Table key={group.id} data={getData(group)} title={group.name}></Table>)}
      <div className={styles.matches}>
        {tabIndex === 1 && groupService.getPendingResults(groups).map((result, index) => <VersusCard
          key={index}
          currentResult={result}
          save={saveResult}
        >
        </VersusCard>)}
      </div>
      <div className={styles.matches}>
        {tabIndex === 2 && groupService.getFinishedResults(groups).map((result, index) => <VersusCard
          key={index}
          currentResult={result}
        >
        </VersusCard>)}
      </div>
    </>
  );
}

export default Groups;
