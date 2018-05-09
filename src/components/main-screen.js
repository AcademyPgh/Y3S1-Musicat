import React, { Component } from 'react';
import { View } from 'react-native';
import PlayerControls from './player-controls'
import Albums from './albums'
import styles from '../styles/styles'

export default class MainScreen extends Component {
  render() {
    return (
      <View>
        <Albums store={this.props.store} />
        <PlayerControls store={this.props.store} />
      </View>
    );
  }
}
