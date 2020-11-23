import ListItem from './ListItem';

function FileList({ paths }) {
    const fileList = paths.map((p, i) => <ListItem key={i} path={p}></ListItem>);
    return fileList;
}

export default FileList;