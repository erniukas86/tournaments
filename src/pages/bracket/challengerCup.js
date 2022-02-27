import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';

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
      {tabIndex === 0 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={1} currentResult={{ homeName: 'Tadas Kucinskas (A7)', awayName: 'Deividas Knoraitis (B8)' }}></VersusCard>
          <VersusCard numberOfGame={2} currentResult={{ homeName: 'Henrikas Miliunas (B7)', awayName: 'Karolis Vaitele (A8)' }}></VersusCard>
          <VersusCard numberOfGame={3} currentResult={{ homeName: 'Robertas Kalninis (B9)', awayName: 'Audrius Lukosevicius (A6)' }}></VersusCard>
        </div>
        <div className={styles.column} style={{ gap: '200px' }}>
          <VersusCard numberOfGame={4} currentResult={{ homeName: 'Arnoldas Drapanauskis (B6)', isHomeDQ: true, awayName: 'Winner of #1 game' }}></VersusCard>
          <VersusCard numberOfGame={5} currentResult={{ homeName: 'Winner of #2 game', awayName: 'Winner of #3 game' }}></VersusCard>
        </div>
        <div className={styles.column}>
          <VersusCard numberOfGame={6} currentResult={{ homeName: 'Winner of #4 game', awayName: 'Winner of #5 game' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={7} currentResult={{ homeName: 'Arnoldas Drapanauskis (B6)', isHomeDQ: true, awayName: 'Looser of #5 game' }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default ChallengerCup;
