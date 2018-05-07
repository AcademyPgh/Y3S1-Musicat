import React, { Component } from 'react';
import MainScreen from './components/main-screen';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import TrackPlayer from 'react-native-track-player';
import createEventHandler from './track-player/event-handler';

const store = createStore(reducers);
TrackPlayer.registerEventHandler(createEventHandler(store));

export default class App extends Component {
  render() {
    return (
      <MainScreen store={store} />
    );
  }
}
