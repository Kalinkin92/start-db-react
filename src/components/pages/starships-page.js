import React, { Component } from 'react';

// import './people-page.css';

import { StarshipDetails, StarshipList } from '../sw-components';

export default class StarshipsPage extends Component {

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
                    <StarshipList
                        onItemSelected={this.onItemSelected}
                    />
                </div>
                <div className="col-md-6">
                    {/*{ selectedPerson ? personDetails : null}*/}
                    <StarshipDetails itemId={selectedPerson}  />
                </div>
            </div>
        );
    };
}

/*const StarshipsPage = () => {

    return(
        <div className="row mb2">
            <div className="col-md-6">
                <StarshipList
                    onItemSelected={(itemId) => {
                        const newPath = `/starships/${itemId}`;
                    }}
                />
            </div>
            <div className="col-md-6">
                {/!*{ selectedPerson ? personDetails : null}*!/}
                {/!*<StarshipDetails itemId={selectedPerson}  />*!/}
            </div>
        </div>
    );
};*/

// export default StarshipsPage;
