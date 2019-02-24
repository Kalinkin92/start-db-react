import React, { Component } from 'react';

// import './people-page.css';

import { PlanetDetails, PlanetList } from '../sw-components';

const PlanetsPage = ({ history, match }) => {

    const { id } = match.params;

    return(
        <div className="row mb2">
            <div className="col-md-6">
                <PlanetList
                    onItemSelected={(id) => history.push(id)}
                />
            </div>
            <div className="col-md-6">
                {/*{ selectedPerson ? personDetails : null}*/}
                <PlanetDetails itemId={id}  />
            </div>
        </div>
    );
};

export default PlanetsPage;



