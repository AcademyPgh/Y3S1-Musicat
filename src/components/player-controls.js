import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import { play, pause, stop, add, next, previous, configPlayer } from '../track-player/player-commands';
import CurrentTrack from './current-track';
import ProgressBar from './progress-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/reducers';
import createEventHandler from '../track-player/event-handler';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class PlayerControls extends Component {    
    constructor(props) {
      super(props);
      this.getCurrentInfo = this.getCurrentInfo.bind(this);  
    }
    componentDidMount(){
      configPlayer();
      this.getCurrentInfo();S
      setInterval(this.getCurrentInfo, 500);
    }
  
    getCurrentInfo() {
      let track = TrackPlayer.getCurrentTrack()
      this.props.store.dispatch({
        type: "PLAYBACK_TRACK"
      });
    }

    render() {
        return (
          <View style={styles.bottombar}>
              <View style={styles.playercontrols}>
                <Text onPress={previous}>
                  <Icon name="step-backward" size = {30} color = "#6cc7e6"/>
                </Text>
                <Text onPress={stop}>
                  <Icon name="stop" size = {30} color = "#6cc7e6"/>
                </Text>  
                <Text onPress={play}>
                  <Icon name="play" size = {30} color = "#6cc7e6"/>
                </Text>
                <Text onPress={pause}>
                  <Icon name="pause" size = {30} color = "#6cc7e6"/>
                </Text>
   
                <Text onPress={next}>
                  <Icon name="step-forward" size = {30} color = "#6cc7e6"/>
                </Text>
                   
              </View>        
                <CurrentTrack store={this.props.store} />  
                <ProgressBar store={this.props.store}/>
          </View>
          );
    }
}
