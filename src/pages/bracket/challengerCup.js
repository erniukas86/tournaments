import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';

// TODO: Remove this  hardcoded page with proper logic
function ChallengerCup () {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
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
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Tadas Kucinskas (A7)', homeScore: 3, awayName: 'Deividas Knoraitis (B8)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Henrikas Miliunas (B7)', homeScore: 0, awayName: 'Karolis Vaitele (A8)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Robertas Kalninis (B9)', awayName: 'Audrius Lukosevicius (A6)' }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Arnoldas Drapanauskis (B6)', isHomeDQ: true, awayName: 'Tadas Kucinskas (A7)' }}></VersusCard>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Karolis Vaitele (A8)', awayName: 'Winner of #3 game' }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Tadas Kucinskas (A7)', awayName: 'Winner of #5 game' }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game1" to="game4" />
        <SteppedLineTo from="game2" to="game5" />
        <SteppedLineTo from="game3" to="game5" />
        <SteppedLineTo from="game4" to="game6" />
        <SteppedLineTo from="game5" to="game6" />
      </>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={7} currentResult={{ homeName: 'Arnoldas Drapanauskis (B6)', isHomeDQ: true, awayName: 'Looser of #5 game' }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default ChallengerCup;
