import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { LocaleContext } from '../../context';
import { translationKeys } from '../../lang/keys';
import Dialog from '../dialog';

export default function Header () {
  const intl = useIntl();

  const { saveLocale } = useContext(LocaleContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FormattedMessage id={translationKeys.HEADER_TOURNAMENTS}></FormattedMessage>
        </Typography>
        {process.env.REACT_APP_API_URL}
        <Dialog
          activatorTitle={intl.formatMessage({ id: translationKeys.HEADER_LOGIN })}
          title="Login"
          sumbit={() => console.log('submit')}
        >
          <TextField margin="dense" label="User Name" fullWidth></TextField>
          <TextField margin="dense" type="password" label="Password" fullWidth></TextField>
        </Dialog>
        <Button
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
        </Button>
      </Toolbar>
    </AppBar>
  );
}
