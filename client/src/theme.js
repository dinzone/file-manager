import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bbdefb',
      light:'#eeffff',
      dark:'#8aacc8',
      contrastText:'#000000'
    },
    secondary: {
      main: '#26a69a',
      light:'#64d8cb',
      dark:'#00766c',
      contrastText:'#000000'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;