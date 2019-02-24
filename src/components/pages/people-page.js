import React from 'react';

// import './people-page.css';

import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return(
        <div className="row mb2">
            <div className="col-md-6">
                <PersonList
                    onItemSelected={(id) => history.push(id)}
                />
            </div>
            <div className="col-md-6">
                {/*{ selectedPerson ? personDetails : null}*/}
                <PersonDetails itemId={id}  />
            </div>
        </div>
    );
};

export default PeoplePage;


