import React from 'react';

import './item-list.css';

/*
import React, { Component } from 'react';
export default class App extends Component {

    render() {
        return(
            <div>
                <h1>STAR DB</h1>
            </div>
        )
    }
}*/

const ItemList = () => {
    return(
        <ul className="item-list list-group">
            <li className="list-group-item">
                Luke Skywalker
            </li>
            <li className="list-group-item">
                Darth Vader
            </li>
            <li className="list-group-item">
                R2-D2
            </li>
        </ul>
    )
};

export default ItemList;