import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

import FileList from './FileList';

function FileListContainer() {
    const { pathname: location } = useLocation();

    const [filePaths, setFilePaths] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();
    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                setFilePaths([]);
                setFilePaths(await fetchFilesFromServer(location.substring(1) + '/'));
            } catch (err) {
                // toast here
                console.log(err);
                alert('something went wrong, please try again');
                setFilePaths([]);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [location]);
    const onFileClick = (pathObject) => {
        if (pathObject.type === 'file') {
            alert(pathObject.name);
        } else if (pathObject.type === 'folder') {
            history.push(`${location}/${pathObject.name}`);
        } else {
            alert('unkown file type!');
        }
    };
    return (
        <>
            <FileList paths={filePaths} pathClickFunc={onFileClick}></FileList>
            {isLoading && <HashLoader></HashLoader>}
        </>
    )
}

function fetchFilesFromServer(routePath) {
    return fetch(`/api/files?path=${routePath}`)
        .then((res) => res.json());
}

export default FileListContainer;
