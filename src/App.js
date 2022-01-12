import { ThemeProvider } from '@mui/material';
import Router from './routes/router';
import { theme } from './styles/theme';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/config';
import { userService } from './services/user';
import { LocaleContext, UserContext } from './context';
import { useState } from 'react';
import Layout from './components/layout';
import { IntlProvider } from 'react-intl';
import { translations } from './lang';
import { localeService } from './services/locale';

initializeApp(firebaseConfig);

function App () {
  userService.login('erniukas86@gmail.com', 'Ly2gS3UaYzRFz5x');

  const [isEmailConfirmed, setIsEmailConfirmed] = useState(true);
  const [locale, setLocale] = useState(localeService.get());

  const saveLocale = (locale) => {
    localeService.set(locale);
    setLocale(locale);
  };

  return (
    <ThemeProvider theme={theme} >
      <LocaleContext.Provider value={{ locale, saveLocale }}>
        <IntlProvider messages={translations[locale]} locale={locale}>
          <UserContext.Provider value={{ isEmailConfirmed, setIsEmailConfirmed }}>
            <Layout>
              <Router />
            </Layout>
          </UserContext.Provider>
        </IntlProvider>
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
