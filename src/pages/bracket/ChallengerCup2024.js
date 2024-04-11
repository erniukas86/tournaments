import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';

function ChallengerCup2024 () {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    // TODO: REMOVE THIS HARDCODED STUFF WITH PROPER LOGIC
    <>
      <Box marginBottom={1}>
        <Box>
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Main" />
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && <>
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Justas Baniulis (C5)', homeScore: 0, awayName: 'Deimante Simonaityte (D6)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Nedas Simoliunas (A4)', homeScore: 3, awayName: 'Justas Pranauskis (B5)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Tadas Turskis (C4)', homeScore: 1, awayName: 'Mantas Reika (D5)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Mindaugas Naravas (B4)', homeScore: 3, awayName: 'Tomas Rentelis (A5)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Justinas Lazauninkas (D4)', homeScore: 3, awayName: 'Deimante Simonaityte (D6)', awayScore: 0 }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Nedas Simoliunas (A4)', homeScore: 3, awayName: 'Mantas Reika (D5)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Mindaugas Naravas (B4)', homeScore: undefined, awayName: 'Justinas Lazauninkas (D4)', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Nedas Simoliunas (A4)', homeScore: undefined, awayName: 'Winner of #7', awayScore: undefined }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game1" to="game5" />
        <SteppedLineTo from="game2" to="game6" />
        <SteppedLineTo from="game3" to="game6" />
        <SteppedLineTo from="game4" to="game7" />
        <SteppedLineTo from="game5" to="game7" />
        <SteppedLineTo from="game6" to="game8" />
        <SteppedLineTo from="game7" to="game8" />
      </>}
    </>
  );
}

export default ChallengerCup2024;
