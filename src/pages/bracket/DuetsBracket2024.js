/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import VersusCard from "../../components/dataDisplay/VersusCard";
import styles from "./index.module.css";
import SteppedLineTo from "./SteppedLineTo";

function DuetsBracket2024() {
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
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && (
        <>
          <div className={styles.row}>
            <div className={styles.column}>
              <VersusCard
                numberOfGame={1}
                currentResult={{
                  homeName: "Justas P & Dmytro I (A1)",
                  homeScore: 1,
                  awayName: "Tomas P & Raimonda P (B4)",
                  awayScore: 3,
                }}
              ></VersusCard>
              <VersusCard
                numberOfGame={2}
                currentResult={{
                  homeName: "Carmen F & Martynas J (B2)",
                  homeScore: 0,
                  awayName: "Nedas S & Edvinas V (A3)",
                  awayScore: 3,
                }}
              ></VersusCard>
              <VersusCard
                numberOfGame={3}
                currentResult={{
                  homeName: "Lukas K & Ernestas B (A2)",
                  homeScore: 0,
                  awayName: "Mantas R & Klaidas P (B3)",
                  awayScore: 3,
                }}
              ></VersusCard>
              <VersusCard
                numberOfGame={4}
                currentResult={{
                  homeName: "Deimante S & Rokas J (A4)",
                  homeScore: 0,
                  awayName: "Tomas R & Rokas S (B1)",
                  awayScore: 3,
                }}
              ></VersusCard>
            </div>
            <div className={styles.column} style={{ gap: "200px" }}>
              <VersusCard
                numberOfGame={5}
                currentResult={{
                  homeName: "Tomas P & Raimonda P (B4)",
                  homeScore: 3,
                  awayName: "Nedas S & Edvinas V (A3)",
                  awayScore: 2,
                }}
              ></VersusCard>
              <VersusCard
                numberOfGame={6}
                currentResult={{
                  homeName: "Mantas R & Klaidas P (B3)",
                  homeScore: 1,
                  awayName: "Tomas R & Rokas S (B1)",
                  awayScore: 3,
                }}
              ></VersusCard>
            </div>
            <div className={styles.column}>
              <VersusCard
                numberOfGame={7}
                currentResult={{
                  homeName: "Tomas P & Raimonda P (B4)",
                  homeScore: 2,
                  awayName: "Tomas R & Rokas S (B1)",
                  awayScore: 3,
                }}
              ></VersusCard>
            </div>
          </div>
          <SteppedLineTo from="game1" to="game5" />
          <SteppedLineTo from="game2" to="game5" />
          <SteppedLineTo from="game3" to="game6" />
          <SteppedLineTo from="game4" to="game6" />
          <SteppedLineTo from="game5" to="game7" />
          <SteppedLineTo from="game6" to="game7" />
        </>
      )}
      {tabIndex === 1 && (
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard
              numberOfGame={8}
              currentResult={{
                homeName: "Nedas S & Edvinas V (A3)",
                homeScore: 2,
                awayName: "Mantas R & Klaidas P (B3)",
                awayScore: 3,
              }}
            ></VersusCard>
          </div>
        </div>
      )}
    </>
  );
}

export default DuetsBracket2024;
