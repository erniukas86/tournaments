import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '.';
import Bracket from '../pages/bracket';
import ChallengerCup from '../pages/bracket/challengerCup';
import Groups from '../pages/groups';
import Standings from '../pages/standings';
import Tournaments from '../pages/tournaments';

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<Tournaments />} />
        <Route path={ROUTES.GROUPS} element={<Groups />} />
        <Route path={ROUTES.BRACKET} element={<Bracket />} />
        <Route path={ROUTES.CHALLENGER_BRACKET} element={<ChallengerCup />} />
        <Route path={ROUTES.STANDINGS} element={<Standings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
