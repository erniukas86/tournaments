import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import { bracketService } from '../../services/bracket';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';

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
      {tabIndex === 0 && <>
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Edvinas Velicka (A5)', homeScore: 3, awayName: 'Andrejus Ivascenko (B4)', awayScore: 2 }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Paulius Vaitkevicius (B5)', homeScore: 3, awayName: 'Rokas Sidaravicius (A4)', awayScore: 2 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Martynas Juzaitis (A1)', homeScore: 3, awayName: 'Edvinas Velicka (A5)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Klaidas Pilkis (B2)', homeScore: 3, awayName: 'Simas Bakus (A3)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Rokas Jankauskas (A2)', homeScore: 2, awayName: 'Laimonas Mikelionis (B3)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Paulius Vaitkevicius (B5)', homeScore: 0, awayName: 'Ernestas Burokas (B1)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Martynas Juzaitis (A1)', awayName: 'Klaidas Pilkis (B2)' }}></VersusCard>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Laimonas Mikelionis (B3)', homeScore: 1, awayName: 'Ernestas Burokas (B1)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Winner of #7 game', awayName: 'Ernestas Burokas (B1)' }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game1" to="game3" />
        <SteppedLineTo from="game2" to="game6" />
        <SteppedLineTo from="game3" to="game7" />
        <SteppedLineTo from="game4" to="game7" />
        <SteppedLineTo from="game5" to="game8" />
        <SteppedLineTo from="game6" to="game8" />
        <SteppedLineTo from="game7" to="game9" />
        <SteppedLineTo from="game8" to="game9" />
      </>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={10} currentResult={{ homeName: 'Looser of #7 game', awayName: 'Laimonas Mikelionis (B3)' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <>
        <div className={styles.row}>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={11} currentResult={{ homeName: 'Edvinas Velicka (A5)', homeScore: 1, awayName: 'Simas Bakus (A3)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={12} currentResult={{ homeName: 'Rokas Jankauskas (A2)', awayName: 'Paulius Vaitkevicius (B5)' }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={13} currentResult={{ homeName: 'Simas Bakus (A3)', awayName: 'Winner of #12 game' }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game11" to="game13" />
        <SteppedLineTo from="game12" to="game13" />
      </>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={14} currentResult={{ homeName: 'Edvinas Velicka (A5)', awayName: 'Looser of #12 game' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 4 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={15} currentResult={{ homeName: 'Andrejus Ivascenko (B4)', homeScore: 3, awayName: 'Rokas Sidaravicius (A4)', awayScore: 0 }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default Bracket;
