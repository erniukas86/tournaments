import { groupService } from '../../services/group';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import { Box, CircularProgress, Grid, Tab, Tabs, TextField } from '@mui/material';
import Table from '../../components/dataDisplay/Table';
import Place from './Place';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import useScreenSize from '../../hooks/useScreenSize';

function Groups () {
  const { tournamentId } = useParams();
  const [tabIndex, setTabIndex] = useState(0);
  const [pendingMatches, setPendingMatches] = useState([]);
  const [finishedMatches, setFinishedMatches] = useState([]);
  const [groups, isLoading, reload] = useGetData(groupService.get, [tournamentId]);

  const isLarger = useScreenSize(1700);

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Box>;
  }

  const handleSearch = (e) => {
    const { value } = e.target;
    setPendingMatches(groupService.getPendingResults(groups, value));
    setFinishedMatches(groupService.getFinishedResults(groups, value));
  };

  const getData = (group) => {
    return group.participants.map((participant, index) => ({
      '#': <Place numberOfGroupQualifiers={group.nrOfQualifiers || group.tournament.numberOfGroupQualifiers} index={index}></Place>,
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
    handleSearch({ target: {} });
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
      {tabIndex > 0 && <TextField
        onChange={handleSearch}
        margin="dense"
        label="Search..."
        fullWidth
      />}
      {tabIndex === 0 && !isLarger && groups.map(group => <Table key={group.id} data={getData(group)} title={group.name}></Table>)}
      {tabIndex === 0 && isLarger && <Grid container spacing={2}>
        {groups.map(group => <Grid item xs={12} sm={6} md={6} key={group.id}>
          <Table data={getData(group)} title={group.name}></Table>
        </Grid>)}
      </Grid>}
      <div className={styles.matches}>
        {tabIndex === 1 && pendingMatches.map((result, index) => <VersusCard
          key={index}
          currentResult={result}
          save={saveResult}
        >
        </VersusCard>)}
      </div>
      <div className={styles.matches}>
        {tabIndex === 2 && finishedMatches.map((result, index) => <VersusCard
          key={index}
          currentResult={result}
        >
        </VersusCard>)}
      </div>
    </>
  );
}

export default Groups;
