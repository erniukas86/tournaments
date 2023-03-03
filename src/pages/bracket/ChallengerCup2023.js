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
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Mantas Reika (A11)', homeScore: '-', awayName: '(B10)', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: '(A9)', homeScore: '-', awayName: 'Deimante Simonaityte (B12)', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: '(A10)', homeScore: '-', awayName: '(B11)', awayScore: '-' }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={5} currentResult={{ homeName: '(A7)', homeScore: '-', awayName: 'Winner of #1', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: '(B8)', homeScore: '-', awayName: 'Winner of #2', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={7} currentResult={{ homeName: '(A8)', homeScore: '-', awayName: '(B9)', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Winner of #4', homeScore: '-', awayName: '(B7)', awayScore: '-' }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Winner of #5', homeScore: '-', awayName: 'Winner of #6', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={10} currentResult={{ homeName: 'Winner of #7', homeScore: '-', awayName: 'Winner of #8', awayScore: '-' }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={11} currentResult={{ homeName: 'Winner of #9', homeScore: '-', awayName: 'Winner of #10', awayScore: '-' }}></VersusCard>
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
          <VersusCard numberOfGame={12} currentResult={{ homeName: 'Looser of #9', homeScore: '-', awayName: 'Looser of #10', awayScore: '-' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <>
        <div className={styles.row}>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={13} currentResult={{ homeName: 'Looser of #5', homeScore: '-', awayName: 'Looser of #6', awayScore: '-' }}></VersusCard>
            <VersusCard numberOfGame={14} currentResult={{ homeName: 'Looser of #7', homeScore: '-', awayName: 'Looser of #8', awayScore: '-' }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={15} currentResult={{ homeName: 'Winner of #13', homeScore: '-', awayName: 'Winner of #14', awayScore: '-' }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game13" to="game15" />
        <SteppedLineTo from="game14" to="game15" />
      </>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={16} currentResult={{ homeName: 'Looser of #13', homeScore: '-', awayName: 'Looser of #14', awayScore: '-' }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 4 && <div className={styles.row}>
        <>
          <div className={styles.row}>
            <div className={styles.column} style={{ gap: '200px' }}>
              <VersusCard numberOfGame={17} currentResult={{ homeName: 'Looser of #1', homeScore: '-', awayName: 'Looser of #2', awayScore: '-' }}></VersusCard>
              <VersusCard numberOfGame={18} currentResult={{ homeName: 'Looser of #3', homeScore: '-', awayName: 'Looser of #4', awayScore: '-' }}></VersusCard>
            </div>
            <div className={styles.column}>
              <VersusCard numberOfGame={19} currentResult={{ homeName: 'Winner of #17', homeScore: '-', awayName: 'Winner of #18', awayScore: '-' }}></VersusCard>
            </div>
          </div>
          <SteppedLineTo from="game17" to="game19" />
          <SteppedLineTo from="game18" to="game19" />
        </>
      </div>}
    </>
  );
}

export default Bracket2023;
