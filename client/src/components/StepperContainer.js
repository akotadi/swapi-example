import React, { Component } from 'react';
import Stepper from 'react-js-stepper';
import {
    Container,
} from 'reactstrap';

import FilmTable from './FilmTable';
import StarshipTable from './StarshipTable';
import StarshipForm from './StarshipForm';

const steps = [{ title: 'Section - 1' }, { title: 'Section - 2' }, { title: 'Section - 3' },]

class StepperContainer extends Component {
    constructor(props) {
        super(props);

        props.onStepperChange(1);

        this.state = {
            activeStep: 1,
            currentUrl: "",
        }
    }

    handleOnClickStepper = (step) => {
        this.setState({ activeStep: step }); 
        this.props.onStepperChange(step);
    }

    handleOnClickNext = () => {
        let nextStep = this.state.activeStep + 1;
        this.setState({ activeStep: nextStep })
        this.props.onStepperChange(nextStep);
    }

    handleFilmClick = film => {
        this.setState({ currentUrl: film });
        this.handleOnClickNext();
    }

    handleStarshipClick = starship => {
        this.setState({ currentUrl: starship });
        this.handleOnClickNext();
    }

    handleSubmitClick = value => {
        this.setState({ activeStep: value });
    }

    render() {
        
        return (
            <Container>
                <Stepper class="bg-dark"
                    steps={steps}
                    activeStep={this.state.activeStep}
                    onSelect={this.handleOnClickStepper}
                    showNumber={false}
                />

                <div style={{ marginTop: '40px' }} >
                    {this.state.activeStep === 1 ? <div> <FilmTable onFilmClick={this.handleFilmClick} /> </div> :
                        this.state.activeStep === 2 ? <div> <StarshipTable filmUrl={this.state.currentUrl} onStarshipClick={this.handleStarshipClick} /> </div> :
                            <div> <StarshipForm starshipUrl={this.state.currentUrl} onSubmitClick={this.handleSubmitClick} /> </div>
                    }
                </div>
            </Container>
        )
    }
};

export default StepperContainer;