import {Provider} from 'react-redux';

import store from './redux/store';

import styled from 'styled-components';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import FileList from './components/FileList';
import WelcomePage from './components/WelcomePage';
import NavRouter from './components/NavRouter';

const StyledDiv = styled.div`
  background-color:aliceblue;
`;

function App() {
  return (
    <Provider store={store}>
    <StyledDiv>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route path='/dirPath/:dirPath'>
            <NavRouter></NavRouter>
            <FileList></FileList>
          </Route>
          <Route path='/'>
            <WelcomePage></WelcomePage>
          </Route>
        </Switch>
      </Router>
    </StyledDiv>
    </Provider>
  );
}

export default App;
