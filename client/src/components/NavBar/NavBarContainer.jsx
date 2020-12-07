import { useEffect, useState } from 'react';

import moment from 'moment'

import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

function NavBarContainer() {
    const [currentTime, setCurrentTime] = useState(moment());
    const history = useHistory();
    let timeInterval = null;
    function setTimeInterval(intevalId) {
        timeInterval = intevalId;
    }
    function handleHomeButton() {
        history.push('/');
    }
    useEffect(() => {
        setTimeInterval(setInterval(() => {
            setCurrentTime(moment());
        }, 1000));
        return () => {
            if (timeInterval) {
                clearInterval(timeInterval);
            }
        }
    });
    return (
        <NavBar time={currentTime} onIconClick={handleHomeButton}></NavBar>
    );
}

export default NavBarContainer;