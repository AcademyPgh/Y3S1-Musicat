import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button,
  TouchableOpacity 
} from 'react-native';
import Song from './song';
import styles from '../styles/styles';
export default class Album extends Component{
  constructor(props) {
      
    super(props);
    this.toggleShowSongs = this.toggleShowSongs.bind(this);
    this.showSongs = this.showSongs.bind(this);
    this.state = {
      trackList: "",
      showSongs: false
    };
  }
  
  showSongs() {
    if (!this.state.showSongs){
      return
    }
    let list = 
      <View>
        {this.props.album.tracks.map((song, index) => {return (
         <Song artist={this.props.album.main_artist_name} album_title={this.props.album.title} album_art={this.props.album.front_cover_art} song={song} key = {index} />
         )})}
      </View>;
      return list
  }
  
  toggleShowSongs() {
    this.setState({showSongs:!this.state.showSongs})
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress = {this.toggleShowSongs}> 
          <Text style={styles.container}>
            <Text>{this.props.trackNum}. </Text>
            <Text>{this.props.album.main_artist_name} - </Text>
            <Text>{this.props.album.title}{'\n'}{'\n'}</Text>
          </Text>
        </TouchableOpacity >
        {this.showSongs()}
      </View>
    );
  }
};