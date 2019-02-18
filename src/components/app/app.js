import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import ItemList from '../item-list';

export default class App extends Component {

    render() {
        return(
            <div>
                <Header />
                <ItemList />
            </div>
        )
    }
}