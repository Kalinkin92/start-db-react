import React, { Component } from 'react';

// import './people-page.css';

import { PlanetDetails, PlanetList } from '../sw-components';

export default class PlanetsPage extends Component {

    state = {
        selectedPerson: null,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        const { selectedPerson } = this.state;

        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <PlanetList
                        onItemSelected={this.onItemSelected}
                    />
                </div>
                <div className="col-md-6">
                    {/*{ selectedPerson ? personDetails : null}*/}
                    <PlanetDetails itemId={selectedPerson}  />
                </div>
            </div>
        );
    };
}


