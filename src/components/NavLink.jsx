import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    return (<Link to={props.linkTo} style={props.style} className={props.className}>{props.link}</Link>)
};

export default NavLink;
