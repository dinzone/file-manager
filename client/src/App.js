import styled from 'styled-components';

import NavBar from './components/NavBar';
import FileList from './components/FileList';

const Div = styled.div`
  background-color:aliceblue;
`;

function App() {
  return (
    <Div className="App">
      <NavBar></NavBar>
      <FileList></FileList>
    </Div>
  );
}

export default App;
