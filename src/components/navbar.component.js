import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {UncontrolledDropdown,DropdownToggle,DropdownMenu, DropdownItem,} from 'reactstrap';
import Logo from '../assets/logo/new-logo.png'
import '../index.css';

const Navbar = () => {
    
        return (
            // start of navbar - cc
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* logo */}
                    <div className="navbar-brand">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"      aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end"    id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Home</Link>
                            </li>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Things To Do
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Nav.Link href="/todo">Things To Do</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Nav.Link href="/eat">Eat</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Nav.Link href="/shop">Shop</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem />
                                    <DropdownItem>
                                        <Nav.Link href="/play">Play</Nav.Link>
                                 </DropdownItem>
                                </DropdownMenu>
                             </UncontrolledDropdown>
                            <li className="nav-item">
                                <Link to='/blog' className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className="nav-link">Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <i className="fas fa-search search"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    
}

export default Navbar