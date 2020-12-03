import WelcomePage from './WelcomePage';

import { useHistory } from "react-router-dom";
import { useState } from 'react';

const FILE_LIST_ROUTE = '/dirPath';

function WelcomePageContainer() {
    const history = useHistory();
    let [drives, setDrives] = useState(undefined),
        [isLoading, setIsLoading] = useState(false);
    function onDriveSelect(selectedDiskDrive) {
        history.push(`${FILE_LIST_ROUTE}/${selectedDiskDrive}`);
    }
    async function fetchDriver() {
        setIsLoading(true);
        setDrives(await getMockDrivers());
        setIsLoading(false);
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
    let drives = await fetch('/drives')
        .then((res) => res.json());
    return drives.map((d) => {
        return {
            label: d,
            value: d
        };
    })
}

export default WelcomePageContainer;