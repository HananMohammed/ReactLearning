import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar"> 
            <div className="container">
                <a href="#"className="logo" >Logo </a>
                <ul>
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                    <NavLink activeClassName="active" to="/about">About</NavLink>
                    <NavLink activeClassName="active" to="/blog">Blog</NavLink>
                    <NavLink activeClassName="active" to="/fragement">Fragement</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar