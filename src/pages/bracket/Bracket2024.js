import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';

function Bracket2024 () {
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
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && <>
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Laimonas Mikelionis (B2)', homeScore: 3, awayName: 'Robertas Kalninis (C3)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Karolis Vaitele (D2)', homeScore: 3, awayName: 'Raimonda Preimonaite (A3)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Andrejus Ivascenko (A2)', homeScore: 3, awayName: 'Algirdas Kirvelaitis (D3)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Martynas Juzaitis (C2)', homeScore: 3, awayName: 'Edvinas Velicka (B3)', awayScore: 0 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Ernestas Burokas (A1)', homeScore: 3, awayName: 'Laimonas Mikelionis (B2)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Klaidas Pilkis (C1)', homeScore: 3, awayName: 'Karolis Vaitele (D2)', awayScore: 2 }}></VersusCard>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Dmytro Ivanchenko (B1)', homeScore: 3, awayName: 'Andrejus Ivascenko (A2)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Rokas Jankauskas (D1)', homeScore: 1, awayName: 'Martynas Juzaitis (C2)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Ernestas Burokas (A1)', homeScore: undefined, awayName: 'Klaidas Pilkis (C1)', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={10} currentResult={{ homeName: 'Dmytro Ivanchenko (B1)', homeScore: undefined, awayName: 'Martynas Juzaitis (C2)', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={11} currentResult={{ homeName: 'Winner of #9', homeScore: undefined, awayName: 'Winner of #10', awayScore: undefined }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game1" to="game5" />
        <SteppedLineTo from="game2" to="game6" />
        <SteppedLineTo from="game3" to="game7" />
        <SteppedLineTo from="game4" to="game8" />
        <SteppedLineTo from="game5" to="game9" />
        <SteppedLineTo from="game6" to="game9" />
        <SteppedLineTo from="game7" to="game10" />
        <SteppedLineTo from="game8" to="game10" />
        <SteppedLineTo from="game9" to="game11" />
        <SteppedLineTo from="game10" to="game11" />
      </>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={12} currentResult={{ homeName: 'Loser of #9', homeScore: undefined, awayName: 'Loser of #10', awayScore: undefined }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <>
        <div className={styles.row}>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={13} currentResult={{ homeName: 'Laimonas Mikelionis (B2)', homeScore: 1, awayName: 'Karolis Vaitele (D2)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={14} currentResult={{ homeName: 'Andrejus Ivascenko (A2)', homeScore: undefined, awayName: 'Rokas Jankauskas (D1)', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={15} currentResult={{ homeName: 'Karolis Vaitele (D2)', homeScore: undefined, awayName: 'Winner of #14', awayScore: undefined }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game13" to="game15" />
        <SteppedLineTo from="game14" to="game15" />
      </>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={16} currentResult={{ homeName: 'Laimonas Mikelionis (B2)', homeScore: undefined, awayName: 'Loser of #14', awayScore: undefined }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default Bracket2024;
