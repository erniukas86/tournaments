import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
      <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TOURNAMENTS
          </Typography>
          <Button color="secondary" variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
  );
}
