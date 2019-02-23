import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="model" label="Model"/>
            <Record field="costInCredits" label="Cost"/>
            <Record field="manufacturer" label="Manufacturer"/>
        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
};

export default withSwapiService(PersonDetails, mapMethodToProps);