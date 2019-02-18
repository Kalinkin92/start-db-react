import React from 'react';

import './random-planet.css';

const RandomPlanet = () => {
    return(
        <div className="random-planet jumbotron rounded">
            <img className="planet-image"
                 src="http://lurkmore.so/images/5/54/Peka_namekaet.jpg" />
            <div>
                <h4>Planet Name</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>12345</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period</span>
                        <span>43</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>106</span>
                    </li>
                </ul>
            </div>

        </div>
    )
};

export default RandomPlanet;