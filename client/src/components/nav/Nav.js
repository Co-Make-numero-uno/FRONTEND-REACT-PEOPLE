import React from 'react';
import {NavLink} from "react-router-dom";

import "./nav.css";

const Nav = () => {
    return (
        <nav>
            <span className='logo'>Co-Make</span>
            <div>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </div>
        </nav>
    );
};

export default Nav;