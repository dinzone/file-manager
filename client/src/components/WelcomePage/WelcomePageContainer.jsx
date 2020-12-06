import WelcomePage from './WelcomePage';

import { useHistory } from "react-router-dom";
import { useState } from 'react';

function WelcomePageContainer() {
    const history = useHistory();
    let [drives, setDrives] = useState(undefined),
        [isLoading, setIsLoading] = useState(false);
    function onDriveSelect(selectedDiskDrive) {
        history.push(`/${selectedDiskDrive}`);
    }
    async function fetchDriver() {
        setIsLoading(true);
        try {
            setDrives(await getMockDrivers());
        } catch (err) {
            // toast here
            console.log(err);
            alert('somthing went wrong, please try again');
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <WelcomePage
            onDriveSelect={onDriveSelect}
            loadOptions={fetchDriver}
            options={drives}
            isLoading={isLoading}>
        </ WelcomePage>
    );
}

async function getMockDrivers() {
    let drives = await fetch('/api/drives')
        .then((res) => res.json());
    return drives.map((d) => {
        return {
            label: d,
            value: d
        };
    })
}

export default WelcomePageContainer;