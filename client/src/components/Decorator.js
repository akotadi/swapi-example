import React, { Component } from "react";
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import SidenavContainer from './SidenavContainer';
import StarshipsModal from './StarshipsModal';

class Decorator extends Component {
    
    state = {
        isOpen: false,
        title: "",
    };

    handleSidenavChange = number => {
        this.setState({ title: `Section ${number}` });
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="row">
                        <div className="col">
                            <Navbar color="dark" dark expand="sm" className="mb-5">
                                <NavbarBrand href="/">
                                    <FontAwesomeIcon icon={faJedi} />
                                </NavbarBrand>
                                <Nav className="mx-auto" navbar>
                                    <NavbarBrand href="/">{this.state.title}</NavbarBrand>
                                </Nav>
                                <StarshipsModal />
                            </Navbar>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <SidenavContainer onSidenavChange={this.handleSidenavChange.bind(this)} />
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Decorator;