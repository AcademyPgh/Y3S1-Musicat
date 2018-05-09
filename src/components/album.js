import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button,
} from 'react-native';
import Song from './song';
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
      <Text>
        {this.props.album.tracks.map((song, index) => {return (
         <Song trackNumber = {song.position} title = {song.title} key = {index} />
         )})}
      </Text>;
      return list
  }
  
  toggleShowSongs() {
    this.setState({showSongs:!this.state.showSongs})
  }
  render() {
    return (
      <Text> 
        <Text>{this.props.trackNum}. </Text>
        <Text>{this.props.album.main_artist_name} - </Text>
        <Text onPress = {this.toggleShowSongs}>
        {this.props.album.title}{'\n'}{'\n'}</Text>
        {this.state.showSongs && this.showSongs()}
      </Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'visible',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    width: 200,
    backgroundColor: '#05a1f2',
    borderRadius: 10,
    color: 'white',
    padding: 10,
    margin: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  view: {
    fontSize: 6,
    backgroundColor: 'green',
    color: 'white',
  },
});