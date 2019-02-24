import React, { Component } from 'react';

// import './people-page.css';

import { StarshipDetails, StarshipList } from '../sw-components';

const StarshipsPage = ({ history, match }) => {

    const { id } = match.params;

    return(
        <div className="row mb2">
            <div className="col-md-6">
                <StarshipList
                    onItemSelected={(id) => history.push(id)}
                />
            </div>
            <div className="col-md-6">
                {/*{ selectedPerson ? personDetails : null}*/}
                <StarshipDetails itemId={id}  />
            </div>
        </div>
    );
};

export default StarshipsPage;

