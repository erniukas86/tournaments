import { ThemeProvider } from '@mui/material';
import Router from './routes/router';
import { theme } from './styles/theme';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/config';
import { userService } from './services/user';
import { UserContext } from './context';
import { useState } from 'react';
import Layout from './components/layout';

initializeApp(firebaseConfig);

function App () {
  userService.login('erniukas86@gmail.com', 'Ly2gS3UaYzRFz5x');

  const [isEmailConfirmed, setIsEmailConfirmed] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ isEmailConfirmed, setIsEmailConfirmed }}>
        <Layout>
          <Router />
        </Layout>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
