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
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && <>
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Mantas Reika (A11)', homeScore: 3, awayName: 'Justinas Lazauninkas (B10)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Liudvikas Griskus (A9)', homeScore: 3, awayName: 'Deimante Simonaityte (B12)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Tadas Seniunas (A10)', homeScore: 3, awayName: 'Egidijus Rubys (B11)', awayScore: 0 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Tadas Kucinskas (A7)', homeScore: 3, awayName: 'Mantas Reika (A11)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Airidas Setkus (B8)', homeScore: 1, awayName: 'Liudvikas Griskus (A9)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Deividas Knoraitis (A8)', homeScore: 3, awayName: 'Levas Lavrentjevas (B9)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Tadas Seniunas (A10)', homeScore: 1, awayName: 'Nedas Simoliunas (B7)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Tadas Kucinskas (A7)', homeScore: 3, awayName: 'Liudvikas Griskus (A9)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Deividas Knoraitis (A8)', homeScore: 3, awayName: 'Nedas Simoliunas (B7)', awayScore: 0 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={10} currentResult={{ homeName: 'Tadas Kucinskas (A7)', homeScore: 2, awayName: 'Deividas Knoraitis (A8)', awayScore: 3 }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game1" to="game4" />
        <SteppedLineTo from="game2" to="game5" />
        <SteppedLineTo from="game3" to="game7" />
        <SteppedLineTo from="game4" to="game8" />
        <SteppedLineTo from="game5" to="game8" />
        <SteppedLineTo from="game6" to="game9" />
        <SteppedLineTo from="game7" to="game9" />
        <SteppedLineTo from="game8" to="game10" />
        <SteppedLineTo from="game9" to="game10" />
      </>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={11} currentResult={{ homeName: 'Liudvikas Griskus (A9)', homeScore: 3, awayName: 'Nedas Simoliunas (B7)', awayScore: 0 }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <>
        <div className={styles.row}>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={12} currentResult={{ homeName: 'Mantas Reika (A11)', homeScore: 2, awayName: 'Airidas Setkus (B8)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={13} currentResult={{ homeName: 'Levas Lavrentjevas (B9)', homeScore: '-', awayName: 'Tadas Seniunas (A10)', awayScore: '-', isAwayDQ: true }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={14} currentResult={{ homeName: 'Airidas Setkus (B8)', homeScore: '-', awayName: 'Levas Lavrentjevas (B9)', awayScore: '-', isAwayDQ: true }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game12" to="game14" />
        <SteppedLineTo from="game13" to="game14" />
      </>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={15} currentResult={{ homeName: 'Mantas Reika (A11)', homeScore: '-', awayName: 'Tadas Seniunas (A10)', awayScore: '-', isAwayDQ: true }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 4 && <div className={styles.row}>
        <>
          <div className={styles.row}>
            <div className={styles.column} style={{ gap: '200px' }}>
              <VersusCard numberOfGame={16} currentResult={{ homeName: 'Justinas Lazauninkas (B10)', homeScore: 3, awayName: 'Deimante Simonaityte (B12)', awayScore: 1 }}></VersusCard>
            </div>
            <div className={styles.column}>
              <VersusCard numberOfGame={17} currentResult={{ homeName: 'Justinas Lazauninkas (B10)', homeScore: 3, awayName: 'Egidijus Rubys (B11)', awayScore: 2 }}></VersusCard>
            </div>
          </div>
          <SteppedLineTo from="game16" to="game17" />
        </>
      </div>}
    </>
  );
}

export default Bracket2023;
