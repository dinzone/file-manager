import HashLoader from 'react-spinners/HashLoader';

import {
    Box,
    Typography,
    makeStyles,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '0.4em',
        display: 'flex',
        flexDirection: 'column'
    },
    driveSelect: {
        display: 'flex',
        flexDirection: 'row'
    },
    formControl: {
        minWidth: 120
    }
}));

function WelcomePage({ onDriveSelect, loadOptions, options, isLoading }) {
    const classes = useStyles();
    function handleSelectChange(event) {
        if (event.target.value) {
            onDriveSelect(event.target.value);
        }
    }
    function onMenuOpen() {
        if (options.length === 0) {
            loadOptions();
        }
    }
    return (
        <Box className={classes.root}>
            <Typography color="textPrimary" variant="h4" >
                welcome to File Manager!
                </Typography>
            <Box className={classes.driveSelect}>
                <Box>
                    <Typography color="textPrimary">
                        please choose disk drive:
                </Typography>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Drive</InputLabel>
                        <Select
                            onChange={handleSelectChange}
                            onOpen={onMenuOpen}
                            value=''>
                            {options.map((o) => (<MenuItem value={o}>{o}</MenuItem>))}
                        </Select>
                    </FormControl>
                </Box>
                {isLoading && <HashLoader />}
            </Box>
        </Box>
    );
}

export default WelcomePage;