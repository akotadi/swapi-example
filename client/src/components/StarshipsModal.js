import React, { Component } from 'react';
import {
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    NavbarBrand,
    Table,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getStarshipsFromDatabase } from './../actions/starshipActions';
import PropTypes from 'prop-types';

class StarshipsModal extends Component {
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.props.getStarshipsFromDatabase();
        this.setState({
            modal: !this.state.modal
        });
    };

    componentDidMount() {
        this.props.getStarshipsFromDatabase();
    };

    render() {
        const { starshipsDatabase } = this.props.starship;

        return (
            <div>
                <NavbarBrand onClick={this.toggle} className="text-white">
                    <FontAwesomeIcon icon={faWarehouse} />
                </NavbarBrand>
                <Container>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Starships from Database</ModalHeader>
                        <ModalBody>
                            <Container className="mx-auto">
                                <div className="row">
                                    <div className="col text-center">
                                        {`http:localhost:5000/starships`}
                                    </div>
                                </div>
                            </Container>
                            <Table responsive dark>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Length</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        starshipsDatabase.map(({ _id, name, length, cost_in_credits, url }) => (
                                            <tr key={_id}>
                                                <th scope="row">{name}</th>
                                                <td>{length}</td>
                                                <td>{cost_in_credits}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            <div className="row">
                                <div className="col text-center">
                                    <Button
                                        color="warning"
                                        className="select-starship-btn mx-center"
                                        onClick={this.toggle}
                                    >Close</Button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </Container>
            </div>
        );
    }
}

StarshipsModal.propTypes = {
    getStarshipsFromDatabase: PropTypes.func.isRequired,
    starship: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    starship: state.starship,
});

export default connect(
    mapStateToProps,
    { getStarshipsFromDatabase }
)(StarshipsModal);