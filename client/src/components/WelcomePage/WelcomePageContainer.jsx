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

function getMockDrivers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ value: 'D:', label: 'D' }, { value: 'C:', label: 'C' }]);
        }, 2000);
    });
}

export default WelcomePageContainer;