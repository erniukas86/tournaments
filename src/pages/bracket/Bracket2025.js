import { Box, Tab, Tabs } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';
import { TitleContext } from '../../context';

function Bracket2025 () {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('🏆 PC Table Tennis 2025 - Champions Cup 🏆');
  }, []);

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
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Edvinas Velicka (C3)', homeScore: 3, awayName: 'Rokas Jankauskas (B2)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Laimonas Mikelionis (C2)', homeScore: 0, awayName: 'Tomas Plavskis (B3)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Juste Gudaite (A4)', homeScore: 0, awayName: 'Klaidas Pilkis (D1)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Ernestas Burokas (C1)', homeScore: 3, awayName: 'Rokas Sidaravicius (B4)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Karolis Vaitele (A3)', homeScore: 3, awayName: 'Mindaugas Naravas (D2)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Tomas Rentelis (A2)', homeScore: 0, awayName: 'Raimonda Preimonaite (D3)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Dmytro Ivanchenko (A1)', homeScore: 3, awayName: 'Edvinas Velicka (C3)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Tomas Plavskis (B3)', homeScore: 0, awayName: 'Klaidas Pilkis (D1)', awayScore: 3 }}></VersusCard>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Ernestas Burokas (C1)', homeScore: 3, awayName: 'Karolis Vaitele (A3)', awayScore: 2 }}></VersusCard>
            <VersusCard numberOfGame={10} currentResult={{ homeName: 'Raimonda Preimonaite (D3)', homeScore: 0, awayName: 'Martynas Juzaitis (B1)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={11} currentResult={{ homeName: 'Dmytro Ivanchenko (A1)', homeScore: 3, awayName: 'Klaidas Pilkis (D1)', awayScore: 0 }}></VersusCard>
            <VersusCard numberOfGame={12} currentResult={{ homeName: 'Ernestas Burokas (C1)', homeScore: 3, awayName: 'Martynas Juzaitis (B1)', awayScore: 0 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={13} currentResult={{ homeName: 'Dmytro Ivanchenko (A1)', homeScore: 2, awayName: 'Ernestas Burokas (C1)', awayScore: 3 }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game2" to="game8" />
        <SteppedLineTo from="game3" to="game8" />
        <SteppedLineTo from="game4" to="game9" />
        <SteppedLineTo from="game5" to="game9" />

        <SteppedLineTo from="game7" to="game11" />
        <SteppedLineTo from="game8" to="game11" />
        <SteppedLineTo from="game9" to="game12" />
        <SteppedLineTo from="game10" to="game12" />

        <SteppedLineTo from="game11" to="game13" />
        <SteppedLineTo from="game12" to="game13" />
      </>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={14} currentResult={{ homeName: 'Klaidas Pilkis (D1)', homeScore: 3, awayName: 'Martynas Juzaitis (B1)', awayScore: 1 }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <>
        <div className={styles.row}>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={15} currentResult={{ homeName: 'Edvinas Velicka (C3)', homeScore: 3, awayName: 'Tomas Plavskis (B3)', awayScore: 1 }}></VersusCard>
            <VersusCard numberOfGame={16} currentResult={{ homeName: 'Karolis Vaitele (A3)', homeScore: 0, isHomeDQ: true, awayName: 'Raimonda Preimonaite (D3)', awayScore: 3 }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={17} currentResult={{ homeName: 'Edvinas Velicka (C3)', homeScore: 3, awayName: 'Raimonda Preimonaite (D3)', awayScore: 2 }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game15" to="game17" />
        <SteppedLineTo from="game16" to="game17" />
      </>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={18} currentResult={{ homeName: 'Tomas Plavskis (B3)', homeScore: 3, awayName: 'Karolis Vaitele (A3)', awayScore: 0, isAwayDQ: true }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default Bracket2025;
