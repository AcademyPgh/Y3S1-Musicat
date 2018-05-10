import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { play, pause, stop, add, next, previous, configPlayer } from '../track-player/player-commands';
import CurrentTrack from './current-track';
import ProgressBar from './progress-bar';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PlayerControls extends Component {
    componentDidMount(){
        configPlayer();
    }


    render() {
      const iconSize = 22;
        return (
          <View style={styles.bottombar}>
              <View style={styles.playercontrols}>
                <Text onPress={previous}>
                  <Icon name="step-backward" size={iconSize} color="#6cc7e6" />
                </Text>  
                <Text onPress={stop}>
                  <Icon name="stop" size={iconSize} color="#6cc7e6" />
                </Text> 
                <Text onPress={play}>
                  <Icon name="play" size={iconSize} color="#6cc7e6"  />
                </Text>
                <Text onPress={pause}>
                  <Icon name="pause" size={iconSize} color="#6cc7e6" />
                </Text>
                <Text onPress={next}>
                  <Icon name="step-forward" size={iconSize} color="#6cc7e6" />
                </Text>
 
              </View>        
                <CurrentTrack store={this.props.store} />  
                <ProgressBar store={this.props.store}/>
          </View>
          );
    }
}
