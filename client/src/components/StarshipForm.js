import React, { Component } from 'react';
import {
    Alert,
    Container, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Col,
    Row, 
    Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getStarship, updateStarship } from './../actions/starshipActions';
import PropTypes from 'prop-types';

class StarshipForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            length: '',
            cost_in_credits: '',
            url: '',
            visible: false,
        };

        this.onDismiss = this.onDismiss.bind(this);
    }
    
    onDismiss() {
        this.setState({ visible: !(this.state.visible) });
    }

    componentDidMount() {
        this.props.getStarship(this.props.starshipUrl);
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newStarship = {
            id: this.props.starship.starships.id,
            name: (this.state.name === '') ? (this.props.starship.starships.name) : (this.state.name),
            length: (this.state.length === '') ? (this.props.starship.starships.length) : (this.state.length),
            cost_in_credits: (this.state.cost_in_credits === '') ? (this.props.starship.starships.cost_in_credits) : (this.state.cost_in_credits),
            url: this.props.starship.starships.url,
        };

        this.props.updateStarship(newStarship)
        
        this.setState({
            id: this.props.starship.id,
            name: this.props.starship.name,
            length: this.props.starship.length,
            cost_in_credits: this.props.starship.cost_in_credits,
            url: this.props.starship.url,
            visible: true,
        });
    };

    render() {
        const { starships } = this.props.starship;

        return (
            <div>
                <Container>
                    <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>Success!</Alert>
                    <br></br>
                    <Form key={starships.id} onSubmit={this.onSubmit} className="bg-dark text-white">
                        <br></br>
                        <FormGroup>
                            <Label for="exampleAddress">Name</Label>
                            <Container>
                                <Input type="text" name="name" defaultValue={(starships.name === undefined)?('Death Star'):(starships.name)} onChange={this.onChange} />
                            </Container>
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Length</Label>
                                    <Container>
                                        <Input type="text" name="length" defaultValue={(starships.length === undefined) ? ('120000') : (starships.length)} onChange={this.onChange} />
                                    </Container>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Cost</Label>
                                    <Container>
                                        <Input type="text" name="cost_in_credits" defaultValue={(starships.cost_in_credits === undefined) ? ('1000000000000') : (starships.cost_in_credits)} onChange={this.onChange} />
                                    </Container>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Container>
                            <Button
                                color="warning"
                                className="select-starship-btn"
                            >
                                Update
                            </Button>
                        </Container>
                        <br></br>
                    </Form>
                </Container>
            </div>
        );
    }
}

StarshipForm.propTypes = {
    getStarship: PropTypes.func.isRequired,
    updateStarship: PropTypes.func.isRequired,
    starship: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    starship: state.starship,
});

export default connect(
    mapStateToProps,
    { getStarship, updateStarship }
)(StarshipForm);