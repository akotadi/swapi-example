import React, { Component } from "react";
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import StepperContainer from './StepperContainer';
import StarshipsModal from './StarshipsModal';

class Decorator extends Component {
    
    state = {
        isOpen: false,
        title: "",
    };

    handleStepperChange = number => {
        this.setState({ title: `Section ${number}` });
    }

    render() {
        return (
            <div>
                <Container>
                    <Navbar color="dark" dark expand="sm" className="mb-5">
                        <NavbarBrand href="/">
                            <FontAwesomeIcon icon={faJedi} />
                        </NavbarBrand>
                        <Nav className="mx-auto" navbar>
                            <NavbarBrand href="/">{this.state.title}</NavbarBrand>
                        </Nav>
                        <StarshipsModal />
                    </Navbar>
                </Container>
                <Container>
                    <StepperContainer onStepperChange={this.handleStepperChange.bind(this)}/>
                </Container>
            </div>
        );
    }
}

export default Decorator;