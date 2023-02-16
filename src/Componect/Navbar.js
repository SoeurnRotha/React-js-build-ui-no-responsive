import { Button } from 'bootstrap';
import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './../style/navbar.css'
class Navbar extends Component {
    render() {
        return (
            <header>

                <div className='logo'>
                    <h1>Blog</h1>
                </div>

                <div className='list'>

                    <ul>
                        <li>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Product"
                            menuVariant="dark"
                                >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Resources"
                            menuVariant="dark"
                                >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Education"
                            menuVariant="dark"
                                >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </li>

                        <li>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Pricing"
                            menuVariant="dark"
                                >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    </ul>


                </div>

                <div className='list-button'>
                    <button id='get'>Get a demo</button>
                    <button id='free'>Free Trial</button>
                  
                </div>
            </header>
        );
    }
}

export default Navbar;