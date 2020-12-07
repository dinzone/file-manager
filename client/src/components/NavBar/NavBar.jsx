import { Folder } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        justifyContent: 'space-between',
        marginBottom: '1em',
        paddingBottom: '0.5em',
        paddingTop: '0.7em',
        userSelect: 'none',
        display: 'flex',
    },
    folderIcon: {
        marginLeft: '0.3em',
        cursor: 'pointer'
    },
    time: {
        marginRight: '1em'
    }
}));

const timeFormat = 'DD/MM/YYYY hh:mm:ss A';

function NavBar({ time, onIconClick }) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Folder className={classes.folderIcon} onClick={onIconClick} />
            <Typography>
                File Manager
            </Typography>
            <Typography className={classes.time}>
                {time.format(timeFormat)}
            </Typography>
        </Box>
    );
}

export default NavBar;