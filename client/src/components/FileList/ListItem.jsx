import {
    makeStyles,
    TableRow,
    TableCell
} from '@material-ui/core';

import {
    DescriptionTwoTone,
    FolderTwoTone,
    HelpTwoTone
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    fileName: {
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        },
        maxWidth: 'fit-content'
    }
}));

function ListItem({ path, pathClickFunc }) {
    const { fileName } = useStyles();
    const {
        name,
        type,
        size,
        createTime,
        lastUpdate
    } = path;

    const displayIfExist = (i) => (i === undefined || i === null) ? '-' : i;
    return (
        <TableRow>
            <TableCell>
                {(type === 'folder') ?
                    <FolderTwoTone /> :
                    (type === 'file') ?
                        <DescriptionTwoTone /> :
                        <HelpTwoTone />}
            </TableCell>
            <TableCell
                className={fileName}
                onClick={() => pathClickFunc(path)}
            >{displayIfExist(name)}</TableCell>
            <TableCell>{displayIfExist(size)}</TableCell>
            <TableCell>{displayIfExist(createTime)}</TableCell>
            <TableCell>{displayIfExist(lastUpdate)}</TableCell>
        </TableRow>
    )
}

export default ListItem;