import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './app.css';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage,
    LoginPage,
} from '../pages';


import {
    StarshipList,
    StarshipDetails
} from '../sw-components';



// import { PersonList } from '../sw-components';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({isLoggedIn: true})
    };

    render() {

        const { isLoggedIn } = this.state;

        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet updateInterval={4000}/>

                            <Switch >
                                <Route path="/" render={() => <h2>Welcome to StarDb</h2>} exact/>
                                <Route path="/login"
                                       render={() => (
                                           <LoginPage
                                               onLogin={this.onLogin}
                                               isLoggedIn={isLoggedIn}
                                           />
                                       )}
                                />
                                <Route path="/secret"
                                       render={() => (
                                           <SecretPage
                                               isLoggedIn={isLoggedIn}
                                           />
                                       )}
                                />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets/:id?" component={PlanetsPage} />
                                <Route path="/starships/:id?" component={StarshipsPage}/>
                                <Route render={() => <h3>Страница не найдена</h3>} />
                            </Switch>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
}