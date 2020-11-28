import { useEffect, useState } from 'react';

import moment from 'moment'

import NavBar from './NavBar';

function NavBarContainer() {
    const [currentTime, setCurrentTime] = useState(moment());
    let timeInterval = null;
    function setTimeInterval(intevalId) {
        timeInterval = intevalId;
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
    })
    return (
        <NavBar time={currentTime}></NavBar>
    );
}

export default NavBarContainer;