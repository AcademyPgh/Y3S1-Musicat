import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import PlayerControls from './player-controls'
import Albums from './albums'
import styles from '../styles/styles'

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.mainscreen}>
      <View style={{flex:1,alignItems:'center'}}>
        <Image source={require('../../musicat_logo.jpeg')} style={styles.logo}></Image>
      </View>
          <Albums store={this.props.store} />
          <PlayerControls store={this.props.store} />
      </View>
    );
  }
}
