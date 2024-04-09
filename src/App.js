import { ThemeProvider } from '@mui/material';
import Router from './routes/router';
import { theme } from './styles/theme';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/config';
import { LocaleContext, TitleContext, UserContext } from './context';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { translations } from './lang';
import { persistLocaleService } from './services/localStorage/locale';
import { persistUserService } from './services/localStorage/user';

initializeApp(firebaseConfig);

function App () {
  const [user, setUser] = useState(persistUserService.get());
  const [locale, setLocale] = useState(persistLocaleService.get());
  const [title, setTitle] = useState('');

  const saveLocale = (locale) => {
    persistLocaleService.set(locale);
    setLocale(locale);
  };

  return (
    <ThemeProvider theme={theme} >
      <LocaleContext.Provider value={{ locale, saveLocale }}>
        <IntlProvider messages={translations[locale]} locale={locale}>
          <UserContext.Provider value={{ user, setUser }}>
            <TitleContext.Provider value={{ title, setTitle }}>
              <Router />
            </TitleContext.Provider>
          </UserContext.Provider>
        </IntlProvider>
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
