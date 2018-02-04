import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { testing } from '../actions/AlexaActions';

class Home extends Component {
    render() {
        return (
            <View>
                <Text>
                    Home Screen
                    {`${this.props.testing}`}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        testing: state.alexa.testing
    };
};

export default connect(mapStateToProps, { testing })(Home);
