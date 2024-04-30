import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './Navbar.css';
import NavLink from './NavbarElements';

class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="nav">
                    <NavLink key={1} exact to={`/`} ><li>HOME</li></NavLink>
                    <NavLink key={3} exact to={`/Detect`} ><li>DETECT</li></NavLink>
                </ul>
            </React.Fragment>
        );
    }
}

export default Navbar;