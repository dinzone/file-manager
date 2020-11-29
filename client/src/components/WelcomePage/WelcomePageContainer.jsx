import WelcomePage from './WelcomePage';

import { useHistory } from "react-router-dom";

const FILE_LIST_ROUTE = '/dirPath';

function WelcomePageContainer() {
    const history = useHistory();
    function onDriveSelect(selectedDiskDrive) {
        history.push(`${FILE_LIST_ROUTE}/${selectedDiskDrive}`);
    }
    return (
        <WelcomePage onDriveSelect={onDriveSelect}></WelcomePage>
    );
}

export default WelcomePageContainer;