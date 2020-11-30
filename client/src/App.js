import styled from 'styled-components';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import FileList from './components/FileList';
import WelcomePage from './components/WelcomePage';
import NavRouter from './components/NavRouter';

const Div = styled.div`
  background-color:aliceblue;
`;

function App() {
  return (
    <Div className="App">
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
    </Div>
  );
}

export default App;
