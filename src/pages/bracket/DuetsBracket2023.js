import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';

function DuetsBracket2023 () {
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
            <Tab label="3rd Place" />
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && <>
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Mantas R. & Ernestas B. (A1)', awayName: 'Justas B. & Andrejus I. (B4)' }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Levas L. & Klaidas P. (B2)', awayName: '(A3)' }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: '(A2)', awayName: 'Deimante S. & Martynas J. (B3)' }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: '(A4)', awayName: 'Nedas S. & Rokas J. (B1)' }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Winner of #1 game', awayName: 'Winner of #2 game' }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Winner of #3 game', awayName: 'Winner of #4 game' }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Winner of #5 game', awayName: 'Winner of #6 game' }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game1" to="game5" />
        <SteppedLineTo from="game2" to="game5" />
        <SteppedLineTo from="game3" to="game6" />
        <SteppedLineTo from="game4" to="game6" />
        <SteppedLineTo from="game5" to="game7" />
        <SteppedLineTo from="game6" to="game7" />
      </>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={8} currentResult={{ homeName: 'Loser of #5 game', awayName: 'Loser of #6 game' }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default DuetsBracket2023;
