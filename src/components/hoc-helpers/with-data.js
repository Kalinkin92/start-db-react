import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {

        state = {
            data: null,
            error: false,
            loading: false
        };

        update() {
            this.setState({
                loading: true,
                error: false,
            });
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
                .catch((err) => {
                    console.error(err);
                    this.setState({
                        error: true
                    })
                })
        };

        componentDidMount() {
            this.update();
        };

        componentDidUpdate(prevProps) {
            if ( prevProps.getData !== this.props.getData) {
                this.update();
            }
        };

        render() {
            const { data, error, loading } = this.state;

            if (error) return <ErrorIndicator />;
            if (loading || !data) return <Spinner />;

            return (
                <View
                    {...this.props}
                    data={data}
                />
            )
        };
    };
};

export default withData;