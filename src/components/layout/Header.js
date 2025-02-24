import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { TitleContext, UserContext } from '../../context';
// import { LocaleContext } from '../../context';
import { translationKeys } from '../../lang/keys';
import { userService } from '../../services/user';
import Dialog from '../dialog';
import { Home } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Header () {
  const intl = useIntl();
  const [loginData, setLoginData] = useState({});
  const { user, setUser } = useContext(UserContext);
  const { title } = useContext(TitleContext);

  const [searchParams] = useSearchParams();
  const isForTV = searchParams.get('isForTV');

  console.log(isForTV);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // TODO: REFACTOR THIS COMPONENT, TO MUCH OF RESPONSIBILITIES
  return (
    <AppBar position="static">
      <Toolbar>
        {!isForTV && <IconButton onClick={() => navigate('/')}>
          <Home/>
        </IconButton>
        }
        {!title &&
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FormattedMessage id={translationKeys.HEADER_TOURNAMENTS}></FormattedMessage>
        </Typography>
        }
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {!user && !isForTV && <Dialog
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
