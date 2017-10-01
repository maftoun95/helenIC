import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    if(props.handleLogout){
        return(<Link to={props.link} style={props.style} className={props.className} onClick={props.handleLogout}>{props.link}</Link>)
    }
    return (<Link to={props.linkTo} style={props.style} className={props.className}>{props.link}</Link>)
};

export default NavLink;
