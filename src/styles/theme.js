import { createTheme } from '@mui/material/styles';

const PRIMARY_COLOR =  '#ff8414';
const SECONDARY_COLOR = '#3b8864';

export const theme = createTheme({
    typography: {
        h1: {
            color: PRIMARY_COLOR,
            textShadow: '7px 5px #000'
        },
        fontFamily: 'BlackHanSansRegular, Helvetica',
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
                  boxShadow: '5px 7px #000',
                  textShadow: '2px 2px #000'
                },
                containedPrimary: {
                    color: 'red'
                },
                containedSecondary: {
                    color: PRIMARY_COLOR
                }
              },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '5px 7px #000',
                }
            }
        }
    }
  });