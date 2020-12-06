import { useHistory, useLocation } from 'react-router-dom';
import NavRouter from './NavRouter';

function NavRouterContainer() {
    const { pathname } = useLocation(),
        history = useHistory();
    function onPathClick(name) {
        let newLocation = pathname.split('/');
        newLocation.length = newLocation.findIndex((n) => n === name) + 1;
        history.push(newLocation.join('/'));
    }
    return (
        <NavRouter onPathClick={onPathClick} path={pathname}></NavRouter>
    )
};

export default NavRouterContainer;