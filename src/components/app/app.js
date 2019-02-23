import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
} from '../pages';


import {
    StarshipList,
    StarshipDetails
} from '../sw-components';



// import { PersonList } from '../sw-components';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet updateInterval={4000}/>

                            <Route path="/" render={() => <h2>Welcome to StarDb</h2>} exact/>
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage}
                                   // render={() => <StarshipList />}
                            />
                            {/*<Route path="/starships/:id"
                                   render={({match, location, history}) => {
                                       const { id } = match.params;
                                       return <StarshipDetails itemId={id}/>
                                   }}
                            />*/}

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
}