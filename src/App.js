import React, { Component } from 'react';
import MainScreen from './components/main-screen';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import TrackPlayer from 'react-native-track-player';
import createEventHandler from './track-player/event-handler';

const store = createStore(reducers);
TrackPlayer.registerEventHandler(createEventHandler(store));

export default class App extends Component {
  constructor(props) {
    super(props);

    setInterval(this.getTrackInfo, 500);
  }

  async getTrackInfo() {
    let trackId = await TrackPlayer.getCurrentTrack();
    let track = await TrackPlayer.getTrack(trackId);
    store.dispatch({
      type: 'PLAYBACK_TRACK',
      state: track
    });
  }

  render() {
    return (
      <MainScreen store={store} />
    );
  }
}
