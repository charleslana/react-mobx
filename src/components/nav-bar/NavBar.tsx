import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to={'/'} className={'navBar'}>List</Link>
                <Link to={'/add'} className={'navBar'}>Add</Link>
            </div>
        );
    }
}

export default NavBar;