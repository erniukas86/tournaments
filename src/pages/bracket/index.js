import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import { bracketService } from '../../services/bracket';
import styles from './index.module.css';

function Bracket () {
  console.log(bracketService.getBracket(10));

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
            <Tab label="5th Place" />
            <Tab label="7th Place" />
            <Tab label="9th Place" />
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard currentResult={{ homeName: 'Edvinas Velicka (A5)', awayName: 'Andrejus Ivascenko (B4)' }}></VersusCard>
          <VersusCard currentResult={{ homeName: 'Paulius Vaitkevicius (B5)', awayName: 'Rokas Sidaravicius (A4)' }}></VersusCard>
        </div>
        <div className={styles.column}>
          <VersusCard currentResult={{ homeName: 'Martynas Juzaitis (A1)', awayName: 'Winner of #1 game' }}></VersusCard>
          <VersusCard currentResult={{ homeName: 'Klaidas Pilkis (B2)', homeScore: 3, awayName: 'Simas Bakus (A3)', awayScore: 0 }}></VersusCard>
          <VersusCard currentResult={{ homeName: 'Rokas Jankauskas (A2)', awayName: 'Laimonas Mikelionis (B3)' }}></VersusCard>
          <VersusCard currentResult={{ homeName: 'Winner of #2 game', awayName: 'Ernestas Burokas (B1)' }}></VersusCard>
        </div>
        <div className={styles.column} style={{ gap: '200px' }}>
          <VersusCard currentResult={{ homeName: 'Winner of #3 game', awayName: 'Klaidas Pilkis (B2)' }}></VersusCard>
          <VersusCard currentResult={{ homeName: 'Winner of #5 game', awayName: 'Winner of #6 game' }}></VersusCard>
        </div>
        <div className={styles.column}>
          <VersusCard currentResult={{ homeName: 'Winner of #7 game', awayName: 'Winner of #8 game' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard currentResult={{ homeName: 'Looser of #7 game', awayName: 'Looser of #8 game' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <div className={styles.row}>
        <div className={styles.column} style={{ gap: '200px' }}>
          <VersusCard currentResult={{ homeName: 'Looser of #3 game', awayName: 'Simas Bakus (A3)' }}></VersusCard>
          <VersusCard currentResult={{ homeName: 'Looser of #5 game', awayName: 'Looser of #6 game' }}></VersusCard>
        </div>
        <div className={styles.column}>
          <VersusCard currentResult={{ homeName: 'Winner of #11 game', awayName: 'Winner of #12 game' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard currentResult={{ homeName: 'Looser of #11 game', awayName: 'Looser of #12 game' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 4 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard currentResult={{ homeName: 'Looser of #1 game', awayName: 'Looser of #2 game' }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default Bracket;
