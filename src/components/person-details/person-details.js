import React from 'react';

import './person-details.css';

const PersonDetails = () => {
    return(
        <div className="person-details card">
            <img className="person-image"
                src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                />

        <div className="card-body">
            <h4>R2-D2</h4>

        </div>
        </div>

    )
};

export default PersonDetails;