import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';

function Bracket2023 () {
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
            <Tab label="11th Place" />
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && <>
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Rokas Sidaravicius (A5)', homeScore: 3, awayName: 'Justinas Mikalauskas (B4)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Martynas Juzaitis (A3)', homeScore: 3, awayName: 'Raimonda Preimonaite (B6)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Karolis Vaitele (A6)', homeScore: 0, awayName: 'Rokas Jankauskas (B3)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Andrejus Ivascenko (A4)', homeScore: 3, awayName: 'Robertas Kalninis (B5)', awayScore: 0 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Ernestas Burokas (A1)', homeScore: 3, awayName: 'Rokas Sidaravicius (A5)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Klaidas Pilkis (B2)', homeScore: 3, awayName: 'Martynas Juzaitis (A3)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Dmytro Ivanchenko (A2)', homeScore: 2, awayName: 'Rokas Jankauskas (B3)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Andrejus Ivascenko (A4)', homeScore: 1, awayName: 'Laimonas Mikelionis (B1)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Ernestas Burokas (A1)', homeScore: 3, awayName: 'Klaidas Pilkis (B2)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={10} currentResult={{ homeName: 'Rokas Jankauskas (B3)', homeScore: 1, awayName: 'Laimonas Mikelionis (B1)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={11} currentResult={{ homeName: 'Ernestas Burokas (A1)', homeScore: '-', awayName: 'Laimonas Mikelionis (B1)', awayScore: '-' }}></VersusCard>
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
          <VersusCard numberOfGame={12} currentResult={{ homeName: 'Klaidas Pilkis (B2)', homeScore: '-', awayName: 'Rokas Jankauskas (B3)', awayScore: '-' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <>
        <div className={styles.row}>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={13} currentResult={{ homeName: 'Rokas Sidaravicius (A5)', homeScore: '-', awayName: 'Martynas Juzaitis (A3)', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={14} currentResult={{ homeName: 'Dmytro Ivanchenko (A2)', homeScore: 3, awayName: 'Andrejus Ivascenko (A4)', awayScore: 2 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={15} currentResult={{ homeName: 'Winner of #13', homeScore: '-', awayName: 'Dmytro Ivanchenko (A2)', awayScore: '-' }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game13" to="game15" />
        <SteppedLineTo from="game14" to="game15" />
      </>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={16} currentResult={{ homeName: 'Looser of #13', homeScore: '-', awayName: 'Andrejus Ivascenko (A4)', awayScore: '-' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 4 && <div className={styles.row}>
        <>
          <div className={styles.row}>
            <div className={styles.column} style={{ gap: '200px' }}>
              <VersusCard numberOfGame={17} currentResult={{ homeName: 'Justinas Mikalauskas (B4)', homeScore: 3, awayName: 'Raimonda Preimonaite (B6)', awayScore: 0 }}></VersusCard>
              <VersusCard numberOfGame={18} currentResult={{ homeName: 'Karolis Vaitele (A6)', homeScore: 3, awayName: 'Robertas Kalninis (B5)', awayScore: 0 }}></VersusCard>
            </div>
            <div className={styles.column}>
              <VersusCard numberOfGame={19} currentResult={{ homeName: 'Justinas Mikalauskas (B4)', homeScore: 0, awayName: 'Karolis Vaitele (A6)', awayScore: 3 }}></VersusCard>
            </div>
          </div>
          <SteppedLineTo from="game17" to="game19" />
          <SteppedLineTo from="game18" to="game19" />
        </>
      </div>}
      {tabIndex === 5 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={20} currentResult={{ homeName: 'Raimonda Preimonaite (B6)', homeScore: '-', awayName: 'Robertas Kalninis (B5)', awayScore: '-' }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default Bracket2023;
