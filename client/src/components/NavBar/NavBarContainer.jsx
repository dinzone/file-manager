import { Component } from 'react';

import Moment from 'moment'

import NavBar from './NavBar';

class NavBarContainer extends Component {
    state = {
        currentTime: Moment()
    }
    render() {
        return (
            <NavBar time={this.state.currentTime}></NavBar>
        );
    }
    componentDidMount() {
        let self = this;
        setInterval(() => {
            self.setState({
                ...self.state,
                currentTime: Moment()
            })
        }, 1000);
    }
}

export default NavBarContainer;