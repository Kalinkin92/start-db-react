import React, { Component } from 'react';

import './item-details.css';

import Spinner from '../spinner';

import { doHelloMsg } from '../../actions';
import { connect } from 'react-redux';

class PersonDetails extends Component {

    state = {
        item: null,
        loading: false,
    };

    componentDidMount() {
        // console.log(this.props.msg);
        this.updatePerson();
        this.props.doHelloMsg('COCKSUCKER');
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        });

        getData(itemId)
            .then((item) => {
                item.imageUrl = getImageUrl(item);

                this.setState({
                    item,
                    loading: false
                })
            })
    };

    componentDidUpdate(prevProps) {
        if ( prevProps.itemId !== this.props.itemId ||
            prevProps.getData !== this.props.getData) {
            this.updatePerson();
        }
    }

    render() {
        const { item, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;

        if (!item) {
            return (
                loading ?
                    <div className="item-details card">{spinner}</div>
                  : <span className="item-details">Выберете персонажа из списка</span>
            );
        }

        const content = !loading ? <ItemCard item={item} children={this.props.children} /> : null;

        return(
            <div className="item-details card">
                <h2>{this.props.msg}</h2>
                {spinner}
                {content}
            </div>
        )
    }
};

const ItemCard = ({ item: { name, imageUrl }, children, item}) => {

    return (
        <React.Fragment>
            <img className="item-image"
                 src={imageUrl}
            />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child, idx) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
};

const Record = ({ item, field, label}) => {

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    )

};

export {
    Record
};

const mapStateToProps = (state) => {
    return {
        msg: state.msg
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        doHelloMsg: (msg) => dispatch(doHelloMsg(msg))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);
