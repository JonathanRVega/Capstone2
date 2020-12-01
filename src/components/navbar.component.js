import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
        return (
            // start of navbar - cc
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* logo */}
                    <div className="navbar-brand">Logo</div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"      aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end"    id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/thingsToDo' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Things To Do</Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/eat">Eat</a>
                                    <a class="dropdown-item" href="/shop">Shop</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/play">Play</a>
                                </div>
                            </li>
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
                                <i class="fas fa-search"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    
}

export default Navbar