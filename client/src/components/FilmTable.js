import React, { Component } from 'react';
import { 
    Container,
    Table,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { getFilms } from './../actions/filmActions';
import PropTypes from 'prop-types';

class FilmTable extends Component {

    componentDidMount() {
        this.props.getFilms();
    };

    render() {
        const { onFilmClick } = this.props;
        const { films } = this.props.film;

        return (
            <div>
                <Container>
                    <Table responsive dark>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Director</th>
                                <th>Release Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                films.map(({ title, director, episode_id, release_date, url }) => (
                                    <tr key={episode_id}>
                                        <th scope="row">{episode_id}</th>
                                        <td>{title}</td>
                                        <td>{director}</td>
                                        <td>{release_date}</td>
                                        <td><Button 
                                            color="warning" 
                                            className="select-film-btn" 
                                            onClick={() => onFilmClick(url)} 
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

FilmTable.propTypes = {
    getFilms: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    film: state.film,
});

export default connect(
    mapStateToProps, 
    { getFilms }
)(FilmTable);