import styled from 'styled-components';

import folderIcon from '../../assets/folderIcon.jpg'

const NavHolder = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    padding-bottom: 0.3em;
    background-color:#c8e1f7;
`;

const TimeDiv = styled.div`
    margin-right: 1em;
`;

const IconDiv = styled.img`
    margin-left: 1em;
    width: 1.3em;
    height: 1.3em;
`;

const timeFormat = 'DD/MM/YYYY hh:mm:ss A';

function NavBar({ time }) {

    return (
        <NavHolder>
            <IconDiv src={folderIcon} />
            <div>
                File Manager
            </div>
            <TimeDiv>
                {time.format(timeFormat)}
            </TimeDiv>
        </NavHolder>
    );
}

export default NavBar;