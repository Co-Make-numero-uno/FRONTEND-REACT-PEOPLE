import React from 'react';
import {NavLink} from "react-router-dom";

import "./nav.css";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/dashboard">
                <span className='logo'>Co-Make</span>
            </NavLink>
            <div>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to='/issue/new'>New Post</NavLink>
            </div>
        </nav>
    );
};

export default Nav;