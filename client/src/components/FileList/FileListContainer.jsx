import { useHistory, useLocation } from 'react-router-dom';

import FileList from './FileList';

function FileListContainer() {
    const { pathname: location } = useLocation();
    const history = useHistory();
    let filePaths;
    try {
        filePaths = getFilesByPath(location.split('/dirPath/')[1], mockData);
    } catch (err) {
        alert('not found');
        filePaths = [];
    }
    const onFileClick = (pathObject) => {
        if (pathObject.type === 'file') {
            alert(pathObject.name);
        } else {
            history.push(`${location}/${pathObject.name}`);
        }
    };
    return (
        <FileList paths={filePaths} pathClickFunc={onFileClick}></FileList>
    )
}

function getFilesByPath(routePath, dataTree) {
    if (!dataTree) throw 'NOT_FOUND';
    if (routePath === '') return dataTree;

    let splitRoute = routePath.split('/');
    let treeNode = dataTree.find(({ type, name }) => type === 'dir' && name === splitRoute[0]);
    splitRoute.splice(0, 1);
    return getFilesByPath(splitRoute.join('/'), treeNode?.files);
}

const mockData = [{
    name: 'D:',
    type: 'dir',
    files: [
        {
            name: 'a.js',
            type: 'file'
        },
        {
            name: 'b.js',
            type: 'file'
        },
        {
            name: 'dirA',
            type: 'dir',
            files: [
                {
                    name: 'c.js',
                    type: 'file'
                }
            ]
        }
    ],
}, {
    name: 'C:',
    type: 'dir',
    files: [
        {
            name: 'dirB',
            type: 'dir',
            files: [
                {
                    name: 'dirC',
                    type: 'dir',
                    files: [
                        {
                            name: 'd.js',
                            type: 'file'
                        },
                        {
                            name: 'e.js',
                            type: 'file'
                        },
                    ]
                }
            ]
        }
    ]
}];

export default FileListContainer;
