import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Song extends Component{
  addToPlaylist() {

  }

  render(){
    return(
      <View><Text>{this.props.song.position}. {this.props.song.title}{'\n'}</Text><Button onPress={this.addToPlaylist} title="Add to P/L" /></View>
    )
  }
}
