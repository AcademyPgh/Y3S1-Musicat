import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import { play, pause, stop, add, configPlayer } from '../track-player/player-commands';
import CurrentTrack from './current-track';
import ProgressBar from './progress-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/reducers';
import createEventHandler from '../track-player/event-handler';
import styles from '../styles/styles'

const store = createStore(reducers);

TrackPlayer.registerEventHandler(createEventHandler(store));

export default class PlayerControls extends Component {

    static store = null;
    

    componentDidMount(){

        const track = {
        id: '1',
        url: 'https://mms.yaharamusic.org/tc?src=https%3A%2F%2Fjsfs.yaharamusic.org%2Fcomplete-submission%2Fthe-hussy-pagan-hiss%2F1-02-right-quick--1480427107000.wav&fmt=mp3&auth=foo',
        title: 'Title1',
        artist: 'artist1'
        };
        const track2 = {
        id: '2',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        title: 'Title2',
        artist: 'artist1'
        };

        configPlayer();
    }


    render() {
        return (
            <View>
              <Text style={styles.welcome} onPress={play}>
                Play!
              </Text>
              <Text style={styles.instructions} onPress={pause}>
                Pause!
              </Text>
              <Text style={styles.instructions} onPress={stop}>
                Stop!
              </Text>                
              <CurrentTrack store={store} />  
              <ProgressBar store={store}/>
            </View>
          );
    }
}
