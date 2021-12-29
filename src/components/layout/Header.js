import { AppBar, TextField, Toolbar, Typography } from '@mui/material';
import Dialog from '../dialog';

export default function Header () {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TOURNAMENTS
        </Typography>
        <Dialog
          activatorTitle="Login"
          title="Login"
          sumbit={() => console.log('submit')}
        >
          <TextField margin="dense" label="User Name" fullWidth></TextField>
          <TextField margin="dense" type="password" label="Password" fullWidth></TextField>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}
