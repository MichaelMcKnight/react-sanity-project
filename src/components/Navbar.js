import React from 'react';
import { NavLink } from 'react-router-dom';
import { DiReact } from 'react-icons/di';
import $ from "jquery";

const burgerNav = () => {
    $('#burger-nav').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
    $('body').toggleClass('no-scroll');
}

export default function Navbar() {
    return (
        <header className="dark-bg">
            <div className="d-flex container justify-content-between align-items-center py-3">
                <nav className="navigation-menu">
                    <NavLink to='/' 
                    exact 
                    activeClassName=""
                    className="white-txt uppercase p-3">
                        Home
                    </NavLink>
                    <NavLink to='/post'
                    activeClassName=""
                    className="white-txt uppercase p-3">
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project'
                    activeClassName=""
                    className="white-txt uppercase p-3"> 
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    activeClassName=""
                    className="white-txt uppercase p-3">
                        About Me
                    </NavLink>
                </nav>
                <div id="burger-nav" role="button" onClick={ burgerNav } >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
                <nav className="mobile-menu">
                    <NavLink to='/' 
                    exact 
                    activeClassName=""
                    className="white-txt uppercase p-3">
                        Home
                    </NavLink>
                    <NavLink to='/post'
                    activeClassName=""
                    className="white-txt uppercase p-3">
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project'
                    activeClassName=""
                    className="white-txt uppercase p-3"> 
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    activeClassName=""
                    className="white-txt uppercase p-3">
                        About Me
                    </NavLink>
                </nav>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <DiReact style={{fill:'#61DBFB', fontSize:'2rem'}} />
                </a>
            </div>
        </header>
    )
}