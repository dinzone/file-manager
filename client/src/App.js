import styled from 'styled-components';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import FileList from './components/FileList';
import WelcomePage from './components/WelcomePage';

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
