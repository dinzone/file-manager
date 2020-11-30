import { useHistory, useLocation } from 'react-router-dom';
import NavRouter from './NavRouter';

function NavRouterContainer() {
    const { pathname } = useLocation(),
        history = useHistory();
    let location = pathname.split('/dirPath/')[1];
    function onPathClick(name) {
        let newLocation = location.split('/');
        newLocation.length = newLocation.findIndex((n) => n === name) + 1;
        history.push(['/dirPath', ...newLocation].join('/'));
    }
    return (
        <NavRouter onPathClick={onPathClick} path={location}></NavRouter>
    )
};

export default NavRouterContainer;