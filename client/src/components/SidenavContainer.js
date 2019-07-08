import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faRocket, faEdit } from '@fortawesome/free-solid-svg-icons';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import FilmTable from './FilmTable';
import StarshipTable from './StarshipTable';
import StarshipForm from './StarshipForm';

class SidenavContainer extends Component {
    constructor(props) {
        super(props);

        props.onSidenavChange('1');

        this.state = {
            activeStep: '1',
            selected: 'film'
        }
    }

    handleFilmClick = film => {
        this.setState({ 
            currentUrl: film,
            activeStep: '2'
        });
        this.enableTwo();
        this.props.onSidenavChange('2');
    }

    handleStarshipClick = starship => {
        this.setState({
            currentUrl: starship,
            activeStep: '3',
            enableTwo: false,
            enableThree: false,
        });
        this.enableThree();
        this.props.onSidenavChange('3');
    }

    handleSubmitClick = value => {
        this.setState({ activeStep: value });
    }

    renderMainContainer() {
        return (
            <Container>
                {this.state.activeStep === '1' ? <div> <FilmTable onFilmClick={this.handleFilmClick} /> </div> :
                    this.state.activeStep === '2' ? <div> <StarshipTable filmUrl={this.state.currentUrl} onStarshipClick={this.handleStarshipClick} /> </div> :
                        <div> <StarshipForm starshipUrl={this.state.currentUrl} onSubmitClick={this.handleSubmitClick} /> </div>}
            </Container>
        );
    }

    onSelectedItem = (selected) => {
        console.log(selected);
        this.setState({ activeStep: selected });
        this.props.onSidenavChange(selected);
    }

    enableTwo = () => {
        const newValue = !this.state.enableTwo;
        this.setState({ enableTwo: newValue})
    };

    enableThree = () => {
        const newValue = !this.state.enableThree;
        this.setState({ enableTwo: newValue })
    };

    render() {

        return (
            <Container>
                <div className="col-1">
                    <SideNav
                        onSelect={this.onSelectedItem}
                        className="sidenav-container"
                    >
                        <SideNav.Nav defaultSelected={this.state.activeStep} style={{ background: '#212529' }} >
                            <NavItem eventKey="1">
                                <NavIcon>
                                    <FontAwesomeIcon icon={faFilm} style={{ fontSize: '1.75em', color: 'yellow' }} />
                                </NavIcon>
                                <NavText>
                                    Section 1
                            </NavText>
                            </NavItem>
                            <NavItem eventKey="2" disabled={this.state.enableTwo}>
                                <NavIcon>
                                    <FontAwesomeIcon icon={faRocket} style={{ fontSize: '1.75em', color: 'yellow' }} />
                                </NavIcon>
                                <NavText>
                                    Section 2
                            </NavText>
                            </NavItem>
                            <NavItem eventKey="3" disabled={this.state.enableThree}>
                                <NavIcon>
                                    <FontAwesomeIcon icon={faEdit} style={{ fontSize: '1.75em', color: 'yellow' }} />
                                </NavIcon>
                                <NavText>
                                    Section 3
                            </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                <div className="col-11" className='main-container'>
                    {this.renderMainContainer()}
                </div>
            </Container>
        )
    }
};

export default SidenavContainer;