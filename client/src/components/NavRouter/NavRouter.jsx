import styled from "styled-components";
import { Breadcrumbs, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    breadCrumbsSeparator: {
        fontSize: '26px',
        marginBottom: '5px'
    },
    breadCrumbs: {
        marginLeft: '0.5em'
    },
    breadCrumbsLink: {
        marginRight: '0.2em',
        marginLeft: '0.2em',
        color: 'green',
        cursor: 'pointer',
        userSelect: 'none',
        '&hover': {
            color: '#5bd45b',
            textDecoration: 'underline',
        }
    }
}));

function NavRouter({ onPathClick, path }) {
    const { breadCrumbsSeparator, breadCrumbs, breadCrumbsLink } = useStyles();
    return (
        <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            classes={{ separator: breadCrumbsSeparator }}
            className={breadCrumbs}>
            {
                path.split('/').splice(1).map((n) => (
                    <Link
                        key={`route_${n}`}
                        onClick={() => onPathClick(n)}
                        className={breadCrumbsLink}
                    > {n} </Link>
                ))
            }
        </Breadcrumbs>
    )
};

export default NavRouter;