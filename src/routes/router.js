import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '.';
import Bracket from '../pages/bracket';
import Groups from '../pages/groups';
import Tournaments from '../pages/tournaments';

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<Tournaments />} />
        <Route path={ROUTES.GROUPS} element={<Groups />} />
        <Route path={ROUTES.BRACKET} element={<Bracket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
