import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Image from 'react-bootstrap/Image'
import logo_transparent from '../assets/Logo-Transparent.svg';

const NavMenu = (props) => {
    const [collapsed, toggleNavbar] = useState(true);

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                <NavbarBrand className="logo-text" tag={Link} to="/">
                    <Image src={logo_transparent} alt="TCC" className='logo'></Image>
                    <strong>Topeka</strong> Chess Club
                </NavbarBrand>
                <NavbarToggler onClick={() => toggleNavbar(!collapsed)} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/about-us">About Us</NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default NavMenu;