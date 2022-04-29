import React from 'react';
import s from './Nav.module.css'
const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">Main</a>
            <a href="">Login</a>
            <a href="">Register</a>
            <a href="">Forgot</a>
            <a href="">SetPass</a>
            <a href="">Profile</a>
            <a href="">Packs</a>
            <a href="">Cards</a>
            <a href="">Error404</a>
        </div>
    );
};

export default Nav;