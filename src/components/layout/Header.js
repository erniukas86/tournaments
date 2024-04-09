import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { TitleContext, UserContext } from '../../context';
// import { LocaleContext } from '../../context';
import { translationKeys } from '../../lang/keys';
import { userService } from '../../services/user';
import Dialog from '../dialog';
import { Home } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';

const routeTitles = {
  [ROUTES.BRACKET_2024]: 'PC Table Tennis 2024 CHAMPIONS CUP',
  [ROUTES.CHALLENGER_BRACKET_2024]: 'PC Table Tennis 2024 CHALLENGERS CUP'
};

export default function Header () {
  const intl = useIntl();
  const [loginData, setLoginData] = useState({});
  const { user, setUser } = useContext(UserContext);
  const { title, setTitle } = useContext(TitleContext);

  const navigate = useNavigate();

  const logout = async () => {
    await userService.logout();
    setUser(undefined);
  };

  const login = async () => {
    const response = userService.login(loginData.userName, loginData.password);

    if (response) {
      setUser(response);
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const routeTitleKey = Object.keys(routeTitles).find(key => pathname.includes(key));

    setTitle(routeTitles[routeTitleKey] || '');
  }, [pathname]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // TODO: REFACTOR THIS COMPONENT, TO MUCH OF RESPONSIBILITIES
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => navigate('/')}>
          <Home/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FormattedMessage id={translationKeys.HEADER_TOURNAMENTS}></FormattedMessage>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {!user && <Dialog
          activatorTitle={intl.formatMessage({ id: translationKeys.HEADER_LOGIN })}
          title="Login"
          sumbit={login}
        >
          <TextField
            onChange={handleInputChange}
            margin="dense"
            name="userName"
            label="User Name"
            fullWidth
          >
          </TextField>
          <TextField
            onChange={handleInputChange}
            margin="dense"
            name="password"
            type="password"
            label="Password"
            fullWidth
          >
          </TextField>
        </Dialog>}
        {user && <Button onClick={logout} variant="contained" color="primary">LOGOUT</Button>}
        {/* <Button
          onClick={() => saveLocale('en')}
          variant="contained"
          color="primary"
        >
          en
        </Button>
        <Button
          onClick={() => saveLocale('lt')}
          variant="contained"
          color="primary"
        >
          lt
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}
