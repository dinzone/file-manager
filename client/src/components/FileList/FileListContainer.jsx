import { useState } from 'react';

import FileList from './FileList';

function FileListContainer() {
    const [filePaths, setFilePaths] = useState([
        {
            path: '/a/b/c',
            type: 'dir'
        }, {
            path: '/a/b/c/d.js',
            type: 'file'
        },
        {
            path: '/a/b/c/e.txt',
            type: 'file'
        },
        {
            path: '/a/b/c/f.csv',
            type: 'file'
        }
    ]);
    const onFileClick = (pathObject) => {
        if (pathObject.type === 'file') {
            alert(pathObject.path);
        } else {
            setFilePaths(generateRandomPathObjectsArray());
        }
    };
    return (
        <FileList paths={filePaths} pathClickFunc={onFileClick}></FileList>
    )
}

function generateRandomPathObjectsArray() {
    let numberOfPaths = Array(Math.floor(Math.random() * 9) + 1).fill(undefined);
    let types = ['file', 'dir'];
    return numberOfPaths.map(() => {
        return {
            path: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            type: types[Math.floor(Math.random() * 2)]
        }
    });
}

export default FileListContainer;
