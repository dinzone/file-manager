import Path from 'path';
import _ from 'lodash';
import styled from 'styled-components';

import * as faIcons from 'react-icons/fa';

const LineDiv = styled.div`
    display:flex;
    flex-direction:row;
    cursor:pointer;
    user-select:none;
    width:fit-content;
    &:hover{
        color:#5d5dac;
        text-decoration:underline;
    }
`;

function ListItem({ className, path: { path, type }, pathClickFunc, path: pathObject }) {
    let Icon;
    if (type === 'dir') {
        Icon = faIcons['FaFolder'];
    } else if (type === 'file') {
        const camelCaseExtname = _.capitalize(Path.extname(path).split('.')[1])
        Icon = faIcons['Fa' + camelCaseExtname] || faIcons['FaFile' + camelCaseExtname] || faIcons['FaFileAlt'];
    } else {
        Icon = faIcons['FaQuestion'];
    }

    const StyleIcon = styled(({ className }) => <Icon className={className} />)`
        margin-right:1em;
    `;
    return (
        <div className={className} onClick={() => pathClickFunc(pathObject)}>
            <LineDiv>
                <StyleIcon />
                <div>
                    {path}
                </div>
            </LineDiv>
        </div>
    );
}

export default ListItem;