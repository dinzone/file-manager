import styled from 'styled-components';

import ListItem from './ListItem';

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
`;

const StyledListItem = styled(ListItem)`
    margin:0.2em;
    margin-left:0.5em;
`;


function FileList({ paths, pathClickFunc }) {
    const fileList = paths.map((p, i) => <StyledListItem key={i} path={p} pathClickFunc={pathClickFunc}></StyledListItem>);
    return (
        <StyledDiv>
            {fileList}
        </StyledDiv>
    );
}

export default FileList;