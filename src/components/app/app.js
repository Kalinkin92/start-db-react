import React, { Component } from 'react';

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

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
}