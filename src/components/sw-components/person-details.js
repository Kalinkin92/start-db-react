import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="gender" label="Gender"/>
            <Record field="birthYear" label="Birth Year"/>
            <Record field="eyeColor" label="Eye color"/>
        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    const {
        getPerson: getData,
        getPersonImage: getImageUrl
    } = swapiService;
    return {
        getData,
        getImageUrl
    };
};

export default withSwapiService(PersonDetails, mapMethodToProps);