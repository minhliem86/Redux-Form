/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store';
import ContactContainer from './containers/ContactContainer';

export default class App extends Component{

    _handleSubmit = (value) => {
        alert(value);
    }
    render() {
        return (
            <Provider store = {store}>
                <ContactContainer handleSubmit = {this._handleSubmit} />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
