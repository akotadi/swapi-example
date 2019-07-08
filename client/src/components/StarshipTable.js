import React, { Component } from 'react';
import {
    Container,
    Table,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { getStarships, updateStarship } from './../actions/starshipActions';
import PropTypes from 'prop-types';

class StarshipTable extends Component {

    componentDidMount() {
        this.props.getStarships(this.props.filmUrl);
    };

    render() {
        const { onStarshipClick } = this.props;
        const { starships } = this.props.starship;

        return (
            <div>
                <Container>
                    <Table responsive dark>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Length</th>
                                <th>Cost</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                starships.map(({ name, length, cost_in_credits, url }) => (
                                    <tr key={name}>
                                        <th scope="row">{name}</th>
                                        <td>{length}</td>
                                        <td>{cost_in_credits}</td>
                                        <td><Button
                                            color="warning"
                                            className="select-starship-btn"
                                            onClick={() => onStarshipClick(url)} 
                                        >Select</Button>{' '}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

StarshipTable.propTypes = {
    filmUrl: PropTypes.string.isRequired,
    getStarships: PropTypes.func.isRequired,
    updateStarship: PropTypes.func.isRequired,
    starship: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    starship: state.starship,
});

export default connect(
    mapStateToProps,
    { getStarships, updateStarship }
)(StarshipTable);