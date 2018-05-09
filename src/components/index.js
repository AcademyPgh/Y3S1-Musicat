import { AppRegistry } from 'react-native';
import App from './src/components/App';

import { createStore, applyMiddleware } from 'redux';
import createEventHandler from './src/track-player/player-handler';


AppRegistry.registerComponent('musicat', () => App);