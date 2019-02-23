import React from 'react';
import { withData, withChild, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list';

const PersonListWithChildren = withChild(
    ItemList,
    (({ name, birthYear}) => `${name} (${birthYear})`)
);

const PersonList = withSwapiService(
    withData(PersonListWithChildren),
    (swapiService) => {
        return {
            getData: swapiService.getAllPeople
        };
    }
);

const PlanetListWithChildren = withChild(
    ItemList,
    (({ name }) => `${name}`)
);

const PlanetList = withSwapiService(
    withData(PlanetListWithChildren),
    (swapiService) => {
        return {
            getData: swapiService.getAllPlanets
        };
    }
);

const StarshipListWithChildren = withChild(
    ItemList,
    (({ name, model }) => `${name} (${model})`)
);

const StarshipList = withSwapiService(
    withData(StarshipListWithChildren),
    (swapiService) => {
        return {
            getData: swapiService.getAllStarships
        };
    }
);

export {
    PersonList,
    PlanetList,
    StarshipList
};