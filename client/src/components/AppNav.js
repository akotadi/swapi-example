import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';

class AppNav extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({ 
            isOpen: !this.state.isOpen 
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Star Wars logo"
                        />
                    </NavbarBrand>
                    <Nav className="mx-auto" navbar>
                        <NavbarBrand href="/">Swapi Example</NavbarBrand>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNav;