import React, { Component } from 'react';

// import './people-page.css';

import { PersonList, PersonDetails } from '../sw-components';

export default class PeoplePage extends Component {

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
                    <PersonList
                        onItemSelected={this.onItemSelected}
                    />
                </div>
                <div className="col-md-6">
                    {/*{ selectedPerson ? personDetails : null}*/}
                    <PersonDetails itemId={selectedPerson}  />
                </div>
            </div>
        );
    };
}


