import { ThemeProvider } from '@mui/material';
import Header from './components/layout/Header';
import Router from './routes/router';
import { theme } from './styles/theme';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/config';
import { userService } from './services/user';

initializeApp(firebaseConfig);

function App () {
  userService.login('erniukas86@gmail.com', 'Ly2gS3UaYzRFz5x');
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
    </ThemeProvider>
  );
}

export default App;
