import { createTheme } from '@mui/material/styles';

export const PRIMARY_COLOR = '#ff8414';
export const SECONDARY_COLOR = '#3b8864';
const PRIMARY_SHADOW = '5px 7px #000';

export const theme = createTheme({
  typography: {
    h1: {
      color: PRIMARY_COLOR,
      textShadow: '7px 5px #000'
    },
    fontFamily: 'BlackHanSansRegular, Helvetica'
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR
    },
    secondary: {
      main: '#3b8864'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: PRIMARY_SHADOW,
          textShadow: '2px 2px #000',
          marginRight: '10px',
          '&:hover': {
            backgroundColor: 'black',
            boxShadow: 'unset'
          }
        },
        containedPrimary: {
          color: PRIMARY_COLOR,
          backgroundColor: SECONDARY_COLOR
        },
        containedSecondary: {
          color: SECONDARY_COLOR,
          backgroundColor: PRIMARY_COLOR
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: PRIMARY_SHADOW
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: PRIMARY_SHADOW,
          border: '5px solid #000'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: PRIMARY_SHADOW
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: PRIMARY_SHADOW,
          marginTop: '50px'
        }
      }
    }
  }
});
