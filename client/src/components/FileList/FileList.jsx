import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';

import ListItem from './ListItem';


function FileList({ paths, pathClickFunc }) {
    const fileList = paths.map((p, i) => <ListItem key={i} path={p} pathClickFunc={pathClickFunc}></ListItem>);
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>type</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell>CreatedAt</TableCell>
                        <TableCell>UpdatedAt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fileList}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default FileList;