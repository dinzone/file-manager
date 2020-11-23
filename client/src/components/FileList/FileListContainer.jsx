import { Component } from 'react';

import FileList from './FileList';

class FileListContainer extends Component {
    state = {
        filePaths: ['/a/b/c', '/a/b/c/d.js']
    }
    render() {
        return (
            <FileList paths={this.state.filePaths}></FileList>
        )
    }
};

export default FileListContainer;