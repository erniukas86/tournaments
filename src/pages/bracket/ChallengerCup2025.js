import { Box, Tab, Tabs } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';
import { TitleContext } from '../../context';

function ChallengerCup2025 () {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('🤝 PC Table Tennis 2025 - Challenger Cup 🤝');
  }, []);

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
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Domante Zukauskaite (C6)', homeScore: 0, awayName: 'Lukas Keturakis (B6)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Greta Krisciunaite (C5)', homeScore: 0, awayName: 'Justas Pranauskis (B7)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Aurimas Dabrisius (A7)', homeScore: 3, awayName: 'Mantas Reika (D5)', awayScore: 0, isAwayDQ: true }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Deimante Simonaityte (A6)', homeScore: 1, awayName: 'Rokas Lavron Mazur (D6)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Robertas Kalninis (A5)', homeScore: undefined, awayName: 'Lukas Keturakis (B6)', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Justas Pranauskis (B7)', homeScore: 0, awayName: 'Vaiga Cecyte (D4)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Aurimas Stanaitis (C4)', homeScore: 3, awayName: 'Aurimas Dabrisius (A7)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Rokas Lavron Mazur (D6)', homeScore: undefined, awayName: 'Justinas Bliuvas (B5)', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Winner of game #5', homeScore: undefined, awayName: 'Vaiga Cecyte (D4)', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={10} currentResult={{ homeName: 'Aurimas Stanaitis (C4)', homeScore: undefined, awayName: 'Winner of game #8', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={11} currentResult={{ homeName: 'Winner of game #9', homeScore: undefined, awayName: 'Winner of game #10', awayScore: undefined }}></VersusCard>
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
    </>
  );
}

export default ChallengerCup2025;
