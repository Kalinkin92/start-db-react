import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {
    const { renderItem, children, data } = props;

    const items = data.map((item) => {
        const { id } = item;
        //Принимаем рендер для компонента из чайлдов или пропсов
        const label = children ? children(item) : renderItem(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => props.onItemSelected(id)}>
                {label}
            </li>
        )
    });

    return (
        <ul className="item-list list-group">
            { items }
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {
        console.log(`defaultProps`);
    }
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;
