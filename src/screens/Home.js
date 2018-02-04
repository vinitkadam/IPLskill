import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Header, Body, Left, Right, Icon, Title } from 'native-base';
import { testing } from '../actions/AlexaActions';

class Home extends Component {

    onPhoneChange(text) {
        this.props.phoneChanged(text);
    }

    render() {
        return (
            <ImageBackground
            style={{
                backgroundColor: '#ccc',
                flex: 1,
                position: 'relative',
                width: '100%',
                height: '100%',
                justifyContent: 'center'
            }}
            source={require('../images/bg.png')}
            >
            <Header style={{ backgroundColor: '#637ba8' }}>
                <Left>
                    <Icon name="ios-ionitron" style={{ color: '#ededed', fontSize: 40 }}/>
                </Left>
                <Body>
                    <Title>Alexa IPL skill</Title>
                </Body>
            </Header>
            <ScrollView>
                <Text>
                    Home Screen
                    {`${this.props.test}`}
                </Text>
            </ScrollView>
            <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.inputContainer, { flex: 9}]}>
                    <TextInput
                        //onChangeText={(text) => this.setState({userInput: text})}
                        //value={this.state.userInput}
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        autoCorrect
                        placeholder={'Type here to chat!'}
                        autoFocus
                        //   onSubmitEditing={this.handleTextSubmit.bind(this)}
                    />
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10, 
                        marginBottom: 5,
                        width: 54,
                        borderRadius: 30,
                        padding: 2,
                        backgroundColor: '#6575ce'
                        }}>
                        <TouchableOpacity>
                            <Icon name="send" style={{ fontSize: 30, color: '#ffffff' }}/>
                        </TouchableOpacity>
                    </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = {
    inputContainer: {
        borderRadius: 100,
        bottom: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
        margin: 5
    },
    textInput: {
        paddingLeft: 15,
        fontSize: 16
    },
};

const mapStateToProps = state => {
    return {
        test: state.alexa.test
    };
};

export default connect(mapStateToProps, { testing })(Home);
