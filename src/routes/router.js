/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from ".";
import Bracket from "../pages/bracket";
import Bracket2023 from "../pages/bracket/Bracket2023";
import ChallengerCup from "../pages/bracket/challengerCup";
import ChallengerCup2023 from "../pages/bracket/ChallengerCup2023";
import Groups from "../pages/groups";
import Standings from "../pages/standings";
import Standings2023 from "../pages/standings/2023";
import Tournaments from "../pages/tournaments";
import DuetsBracket2023 from "../pages/bracket/DuetsBracket2023";
import DuetsStandings2023 from "../pages/standings/duets2023";
import Bracket2024 from "../pages/bracket/Bracket2024";
import ChallengerCup2024 from "../pages/bracket/ChallengerCup2024";
import Layout from "../components/layout";
import Standings2024 from "../pages/standings/2024";
import DuetsBracket2024 from "../pages/bracket/DuetsBracket2024";
import DuetsStandings2024 from "../pages/standings/duets2024";
import Bracket2025 from "../pages/bracket/Bracket2025";
import ChallengerCup2025 from "../pages/bracket/ChallengerCup2025";
import Standings2025 from "../pages/standings/2025";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.DEFAULT} element={<Tournaments />} />
          <Route path={ROUTES.GROUPS} element={<Groups />} />
          <Route path={ROUTES.BRACKET} element={<Bracket />} />
          <Route path={ROUTES.BRACKET_2023} element={<Bracket2023 />} />
          <Route path={ROUTES.CHALLENGER_BRACKET} element={<ChallengerCup />} />
          <Route
            path={ROUTES.CHALLENGER_BRACKET_2023}
            element={<ChallengerCup2023 />}
          />
          <Route path={ROUTES.STANDINGS} element={<Standings />} />
          <Route path={ROUTES.STANDINGS_2023} element={<Standings2023 />} />
          <Route
            path={ROUTES.DUETS_BRACKET_2023}
            element={<DuetsBracket2023 />}
          />
          <Route
            path={ROUTES.DUETS_STANDINGS_2023}
            element={<DuetsStandings2023 />}
          />
          <Route path={ROUTES.BRACKET_2024} element={<Bracket2024 />} />
          <Route path={ROUTES.BRACKET_2025} element={<Bracket2025 />} />
          <Route
            path={ROUTES.CHALLENGER_BRACKET_2024}
            element={<ChallengerCup2024 />}
          />
          <Route
            path={ROUTES.CHALLENGER_BRACKET_2025}
            element={<ChallengerCup2025 />}
          />
          <Route path={ROUTES.STANDINGS_2024} element={<Standings2024 />} />
          <Route
            path={ROUTES.DUETS_BRACKET_2024}
            element={<DuetsBracket2024 />}
          />
          <Route
            path={ROUTES.DUETS_STANDINGS_2024}
            element={<DuetsStandings2024 />}
          />
          <Route path={ROUTES.STANDINGS_2025} element={<Standings2025 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
