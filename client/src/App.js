import { Provider } from 'react-redux';
import store from './redux/store';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import FileList from './components/FileList';
import WelcomePage from './components/WelcomePage';
import NavRouter from './components/NavRouter';

const useStyles = makeStyles((theme)=>({
  root:{
    background: theme.palette.primary.light,
    width: '100%',
    height: '100%'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Box className={classes.root}>
        <Router>
        <NavBar/>
          <Switch>
            <Route path='/:dirPath'>
              <NavRouter></NavRouter>
              <FileList></FileList>
            </Route>
            <Route path='/'>
              <WelcomePage></WelcomePage>
            </Route>
          </Switch>
        </Router>
      </Box>
    </Provider>
  );
}

export default App;
