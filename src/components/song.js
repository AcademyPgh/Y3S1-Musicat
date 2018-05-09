import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { add } from '../track-player/player-commands';
import styles from '../styles/styles';

export default class Song extends Component{
  constructor(props) {
    super(props);

    this.addToPlaylist = this.addToPlaylist.bind(this);
  }

  addToPlaylist() {
    const track = {
      id: this.props.song.access_token,
      url: this.props.song.url,
      title: this.props.song.title,
      artist: this.props.artist
    };

    add(track);
  }

  render(){
    return(
      <View style={{flexDirection: 'row'}}><View style={{flex: 6}}><Text style={styles.trackstyle}>{this.props.song.position}. {this.props.song.title}{'\n'}</Text></View><View style={{flex: 2}}><Button onPress={this.addToPlaylist} title="Add to P/L" /></View></View>
    )
  }
}
